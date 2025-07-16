package seeders

import (
	"log"
	"math/rand"
	"time"

	"github.com/pedrocarvalho3/fintrack-server/database"
	"github.com/pedrocarvalho3/fintrack-server/models"
	"github.com/pedrocarvalho3/fintrack-server/utils"
)

func SeedCategories() {
	rand.Seed(time.Now().UnixNano())

	_, err := database.DB.Exec(`
		INSERT INTO users (id, name, email, password)
		VALUES (1, 'Seeder User', 'seeder@example.com', 'hashed_password')
		ON CONFLICT (id) DO NOTHING;
	`)
	if err != nil {
		log.Fatalf("Erro ao inserir usuário: %v", err)
	}

	categories := []models.Category{
		{Name: "Electronics", Status: models.StatusActive, Icon: "💻", Type: models.TypeExpense, UserID: 1},
		{Name: "Clothing", Status: models.StatusActive, Icon: "👕", Type: models.TypeExpense, UserID: 1},
		{Name: "Home & Garden", Status: models.StatusInactive, Icon: "🏠", Type: models.TypeExpense, UserID: 1},
		{Name: "Sports & Outdoors", Status: models.StatusActive, Icon: "🏃", Type: models.TypeExpense, UserID: 1},
		{Name: "Books", Status: models.StatusActive, Icon: "📚", Type: models.TypeExpense, UserID: 1},
		{Name: "Toys & Games", Status: models.StatusInactive, Icon: "🎁", Type: models.TypeExpense, UserID: 1},
		{Name: "Beauty & Personal Care", Status: models.StatusActive, Icon: "💄", Type: models.TypeExpense, UserID: 1},
		{Name: "Automotive", Status: models.StatusActive, Icon: "🚗", Type: models.TypeExpense, UserID: 1},
		{Name: "Salary", Status: models.StatusActive, Icon: "💰", Type: models.TypeIncome, UserID: 1},
		{Name: "Freelance", Status: models.StatusActive, Icon: "💰", Type: models.TypeIncome, UserID: 1},
		{Name: "Investments", Status: models.StatusActive, Icon: "💰", Type: models.TypeIncome, UserID: 1},
	}

	stmt, err := database.DB.Prepare(`
		INSERT INTO categories (name, status, icon, color, type, user_id)
		VALUES ($1, $2, $3, $4, $5, $6)
		ON CONFLICT DO NOTHING;
	`)
	if err != nil {
		log.Fatalf("Failed to prepare statement: %v", err)
	}
	defer stmt.Close()

	for _, cat := range categories {
		cat.Color = utils.RandomHexColor()
		_, err := stmt.Exec(cat.Name, cat.Status, cat.Icon, cat.Color, cat.Type, cat.UserID)
		if err != nil {
			log.Printf("Error inserting category %s: %v", cat.Name, err)
		}
	}
}
