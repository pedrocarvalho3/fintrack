package database

import (
	"database/sql"
	"log"

	_ "github.com/lib/pq"
)

var DB *sql.DB

func Connect() {
	var err error

	// Exemplo: postgres://usuario:senha@host:porta/banco?sslmode=disable
	connStr := "postgres://postgres:postgres@localhost:5432/financas?sslmode=disable"
	DB, err = sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal("Error to open connection:", err)
	}

	err = DB.Ping()
	if err != nil {
		log.Fatal("Erro to connect database:", err)
	}

	createTables()
}

func createTables() {
	query := `
	CREATE TABLE IF NOT EXISTS usuarios (
		id SERIAL PRIMARY KEY,
		nome TEXT NOT NULL,
		email TEXT NOT NULL UNIQUE,
		senha TEXT NOT NULL
	);
	`
	if _, err := DB.Exec(query); err != nil {
		log.Fatal("Erro ao criar tabelas:", err)
	}
}

