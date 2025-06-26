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
	w.Header().Set("Content-Type", "application/json")

	var u models.User
	if err := json.NewDecoder(r.Body).Decode(&u); err != nil {
		http.Error(w, `{"message": "Invalid JSON"}`, http.StatusBadRequest)
		return
	}

	hash, err := bcrypt.GenerateFromPassword([]byte(u.Password), bcrypt.DefaultCost)
	if err != nil {
		http.Error(w, `{"message": "Internal error hashing password"}`, http.StatusInternalServerError)
		return
	}
	
	stmt, err := database.DB.Prepare("INSERT INTO users(name, email, password) VALUES ($1, $2, $3)")
	if err != nil {
		http.Error(w, `{"message": "Internal database error"}`, http.StatusInternalServerError)
		return
	}
	defer stmt.Close()

	_, err = stmt.Exec(u.Name, u.Email, string(hash))
	if err != nil {
		if strings.Contains(err.Error(), "duplicate key") {
			http.Error(w, `{"message": "Email already registered"}`, http.StatusBadRequest)
		} else {
			http.Error(w, `{"message": "Database error"}`, http.StatusInternalServerError)
		}
		return
	}

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(map[string]string{"message": "User registered successfully"})
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