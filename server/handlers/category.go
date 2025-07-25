package handlers

import (
	"encoding/json"
	"math"
	"net/http"
	"strconv"

	"github.com/pedrocarvalho3/fintrack-server/database"
	"github.com/pedrocarvalho3/fintrack-server/models"
)

func CreateCategory(w http.ResponseWriter, r *http.Request) {
	userID := r.Context().Value("user_id")
	var c models.Category
	if err := json.NewDecoder(r.Body).Decode(&c); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	stmt, err := database.DB.Prepare("INSERT INTO categories(name, status, icon, color, type, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer stmt.Close()

	err = stmt.QueryRow(c.Name, c.Status, c.Icon, c.Color, c.Type, userID).Scan(&c.ID)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(c)
}

func GetCategories(w http.ResponseWriter, r *http.Request) {
	userID := r.Context().Value("user_id")

	pageStr := r.URL.Query().Get("page")
	limitStr := r.URL.Query().Get("limit")

	page := 1
	limit := 10

	if p, err := strconv.Atoi(pageStr); err == nil && p > 0 {
		page = p
	}
	if l, err := strconv.Atoi(limitStr); err == nil && l > 0 {
		limit = l
	}

	offset := (page - 1) * limit

	var total int
	err := database.DB.QueryRow("SELECT COUNT(*) FROM categories WHERE user_id = $1", userID).Scan(&total)
	if err != nil {
		http.Error(w, "Error counting categories: "+err.Error(), http.StatusInternalServerError)
		return
	}

	rows, err := database.DB.Query(`
		SELECT id, name, status, icon, color, type
		FROM categories
		WHERE user_id = $1
		ORDER BY id
		LIMIT $2 OFFSET $3`, userID, limit, offset)
	if err != nil {
		http.Error(w, "Error fetching categories: "+err.Error(), http.StatusInternalServerError)
		return
	}
	defer rows.Close()

	categories := []models.Category{}
	for rows.Next() {
		var c models.Category
		if err := rows.Scan(&c.ID, &c.Name, &c.Status, &c.Icon, &c.Color, &c.Type); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		categories = append(categories, c)
	}

	if err = rows.Err(); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	response := map[string]interface{}{
		"data":       categories,
		"page":       page,
		"limit":      limit,
		"total":      total,
		"totalPages": int(math.Ceil(float64(total) / float64(limit))),
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}


func GetCategory(w http.ResponseWriter, r *http.Request) {
	idStr := r.URL.Query().Get("id")
	id, err := strconv.Atoi(idStr)
	if err != nil {
		http.Error(w, "Invalid category ID", http.StatusBadRequest)
		return
	}

	var c models.Category
	row := database.DB.QueryRow("SELECT id, name, status, icon, color, type FROM categories WHERE id = $1", id)
	err = row.Scan(&c.ID, &c.Name, &c.Status, &c.Icon, &c.Color, &c.Type)
	if err != nil {
		http.Error(w, "Category not found", http.StatusNotFound)
		return
	}

	json.NewEncoder(w).Encode(c)
}

func UpdateCategory(w http.ResponseWriter, r *http.Request) {
	idStr := r.URL.Query().Get("id")
	id, err := strconv.Atoi(idStr)
	if err != nil {
		http.Error(w, "Invalid category ID", http.StatusBadRequest)
		return
	}

	var c models.Category
	if err := json.NewDecoder(r.Body).Decode(&c); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	stmt, err := database.DB.Prepare("UPDATE categories SET name = $1, status = $2, icon = $3, color = $4, type = $5 WHERE id = $6")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer stmt.Close()

	_, err = stmt.Exec(c.Name, c.Status, c.Icon, c.Color, c.Type, id)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	c.ID = id
	json.NewEncoder(w).Encode(c)
}

func DeleteCategory(w http.ResponseWriter, r *http.Request) {
	idStr := r.URL.Query().Get("id")
	id, err := strconv.Atoi(idStr)
	if err != nil {
		http.Error(w, "Invalid category ID", http.StatusBadRequest)
		return
	}

	stmt, err := database.DB.Prepare("DELETE FROM categories WHERE id = $1")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer stmt.Close()

	res, err := stmt.Exec(id)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	rowsAffected, err := res.RowsAffected()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	if rowsAffected == 0 {
		http.Error(w, "Category not found", http.StatusNotFound)
		return
	}

	w.WriteHeader(http.StatusNoContent)
}