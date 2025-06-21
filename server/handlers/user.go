package handlers

import (
	"encoding/json"
	"net/http"
	"os"
	"time"

	"github.com/golang-jwt/jwt/v5"
	"golang.org/x/crypto/bcrypt"

	"github.com/pedrocarvalho3/fintrack-server/database"
	"github.com/pedrocarvalho3/fintrack-server/models"
)

var jwtKey = []byte(os.Getenv("JWT_SECRET"))

type UserResponse struct {
	ID    int    `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email"`
}

func RegisterHandler(w http.ResponseWriter, r *http.Request) {
	var u models.User
	json.NewDecoder(r.Body).Decode(&u)

	hash, _ := bcrypt.GenerateFromPassword([]byte(u.Password), 14)
	
	stmt, err := database.DB.Prepare("INSERT INTO users(name, email, password) VALUES ($1, $2, $3)")
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	_, err = stmt.Exec(u.Name, u.Email, string(hash))
	if err != nil {
		http.Error(w, "Email registered", 400)
		return
	}

	w.WriteHeader(http.StatusCreated)
}

func LoginHandler(w http.ResponseWriter, r *http.Request) {
	var creds models.User
	json.NewDecoder(r.Body).Decode(&creds)

	var u models.User 
	row := database.DB.QueryRow("SELECT id, name, email, password FROM users WHERE email = $1", creds.Email)
	err := row.Scan(&u.ID, &u.Name, &u.Email, &u.Password)
	if err != nil {
		http.Error(w, "User not found", 401)
		return
	}

	err = bcrypt.CompareHashAndPassword([]byte(u.Password), []byte(creds.Password))
	if err != nil {
		http.Error(w, "Invalid password", 401)
		return
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"user_id": u.ID,
		"exp": time.Now().Add(time.Hour * 72).Unix(),
	})
	tokenString, err := token.SignedString(jwtKey)
	if err != nil {
		http.Error(w, "Error in token generation", 500)
		return
	}

	json.NewEncoder(w).Encode(map[string]string{
		"token": tokenString,
	})
}

func ProfileHandler(w http.ResponseWriter, r *http.Request) {
	userID := r.Context().Value("user_id")

	var u models.User 
	row := database.DB.QueryRow("SELECT id, name, email, password FROM users WHERE id = $1", userID)
	err := row.Scan(&u.ID, &u.Name, &u.Email, &u.Password)
	if err != nil {
		http.Error(w, "User not found", 401)
		return
	}

	res := UserResponse{
		ID:    u.ID,
		Name:  u.Name,
		Email: u.Email,
	}
	json.NewEncoder(w).Encode(res)
}