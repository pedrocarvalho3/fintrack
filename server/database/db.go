package database

import (
	"database/sql"
	"log"

	_ "github.com/lib/pq"
)

var DB *sql.DB

func Connect() {
	var err error

	connStr := "postgres://postgres:postgres@localhost:5432/fintrack-db?sslmode=disable"
	DB, err = sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal("Error to open connection:", err)
	}

	err = DB.Ping()
	if err != nil {
		log.Fatal("Error to connect database:", err)
	}

	createTables()
}

func createTables() {
	query := `
	CREATE TABLE IF NOT EXISTS users (
		id SERIAL PRIMARY KEY,
		name TEXT NOT NULL,
		email TEXT NOT NULL UNIQUE,
		password TEXT NOT NULL
	);
	`
	if _, err := DB.Exec(query); err != nil {
		log.Fatal("Error to create tables:", err)
	}
}

