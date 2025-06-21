package models

import "time"

type Status int

const (
	StatusPending Status = iota
	StatusCompleted
	StatusCancelled
)

type Transaction struct {
	ID          int       `json:"id"`
	Name        string    `json:"name"`
	Description string    `json:"description"`
	Amount      int       `json:"amount"`
	Date        time.Time `json:"date"`
	Status      Status    `json:"status"`
	CategoryID  int       `json:"category_id"`
	UserID      int       `json:"user_id"`
}

func CreateTransactionTableSQL() string {
	return `
	CREATE TABLE IF NOT EXISTS transactions (
		id SERIAL PRIMARY KEY,
		name TEXT NOT NULL,
		description TEXT,
		amount INTEGER NOT NULL,
		date TIMESTAMP NOT NULL,
		status INTEGER NOT NULL,
		category_id INTEGER NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
		user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE
	);`
}
