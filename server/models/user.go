package models

type User struct {
	ID	int `json:"id"`
	Name string `json:"name"`
	Email string `json:"email"`
	Password string `json:"password,omitempty"`
}

func CreateUserTableSQL() string {
	return `
	CREATE TABLE IF NOT EXISTS users (
		id SERIAL PRIMARY KEY,
		name TEXT NOT NULL,
		email TEXT NOT NULL UNIQUE,
		password TEXT NOT NULL
	);`
}