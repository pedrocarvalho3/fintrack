package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/pedrocarvalho3/fintrack-server/database"
	"golang.org/x/crypto/bcrypt"
)


type User struct {
	ID	int `json:"id"`
	Name string `json:"name"`
	Email string `json:"email"`
	Password string `json:"password,omitempty"`
}

func RegisterHandler(w http.ResponseWriter, r *http.Request) {
	var u User
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