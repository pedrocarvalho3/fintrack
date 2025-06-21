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
	Icon   int          `json:"icon"`
	Color  int          `json:"color"`
	Type   CategoryType `json:"type"`
}

func CreateCategoryTableSQL() string {
	return `
	CREATE TABLE IF NOT EXISTS categories (
		id SERIAL PRIMARY KEY,
		name TEXT NOT NULL,
		status INTEGER NOT NULL,
		icon INTEGER NOT NULL,
		color INTEGER NOT NULL,
		type INTEGER NOT NULL
	);`
}
