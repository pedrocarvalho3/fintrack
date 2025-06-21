package database

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	_ "github.com/lib/pq"
	"github.com/pedrocarvalho3/fintrack-server/models"
)

var DB *sql.DB

func Connect() {
	var err error

	user := os.Getenv("DB_USER")
	pass := os.Getenv("DB_PASSWORD")
	host := os.Getenv("DB_HOST")
	port := os.Getenv("DB_PORT")
	dbname := os.Getenv("DB_NAME")
	sslmode := os.Getenv("DB_SSLMODE")

	connStr := fmt.Sprintf(
		"postgres://%s:%s@%s:%s/%s?sslmode=%s",
		user, pass, host, port, dbname, sslmode,
	)

	DB, err = sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal("Error opening connection:", err)
	}

	err = DB.Ping()
	if err != nil {
		log.Fatal("Error connecting to database:", err)
	}

	createTables()
}

func createTables() {
	queries := []string{
		models.CreateUserTableSQL(),
		models.CreateCategoryTableSQL(),
	}

	for _, query := range queries {
		if _, err := DB.Exec(query); err != nil {
			log.Fatal("Error creating table:", err)
		}
	}
}

