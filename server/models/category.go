package models

type StatusType int
type CategoryType int

const (
	StatusInactive StatusType = iota
	StatusActive
)

const (
	TypeIncome CategoryType = iota
	TypeExpense
)

type Category struct {
	ID     int          `json:"id"`
	Name   string       `json:"name"`
	Status StatusType   `json:"status"`
	Icon   string          `json:"icon"`
	Color  string          `json:"color"`
	Type   CategoryType `json:"type"`
	UserID int          `json:"user_id"`
}

func CreateCategoryTableSQL() string {
	return `
	CREATE TABLE IF NOT EXISTS categories (
		id SERIAL PRIMARY KEY,
		name TEXT NOT NULL,
		status INTEGER NOT NULL,
		icon TEXT NOT NULL,
		color TEXT NOT NULL,
		type INTEGER NOT NULL,
		user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE
	);`
}
