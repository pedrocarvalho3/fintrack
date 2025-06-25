package routes

import (
	"net/http"

	"github.com/pedrocarvalho3/fintrack-server/handlers"
	"github.com/pedrocarvalho3/fintrack-server/middlewares"
)

func RegisterRoutes() {
	http.HandleFunc("/register", handlers.RegisterHandler)
	http.HandleFunc("/login", handlers.LoginHandler)
	http.HandleFunc("/profile", middlewares.AuthMiddleware(handlers.ProfileHandler))

	http.HandleFunc("/categories", middlewares.AuthMiddleware(func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodGet:
			handlers.GetCategories(w, r)
		case http.MethodPost:
			handlers.CreateCategory(w, r)
		default:
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		}
	}))

	http.HandleFunc("/category", middlewares.AuthMiddleware(func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodGet:
			handlers.GetCategory(w, r)
		case http.MethodPut:
			handlers.UpdateCategory(w, r)
		case http.MethodDelete:
			handlers.DeleteCategory(w, r)
		default:
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		}
	}))

	http.HandleFunc("/transactions", middlewares.AuthMiddleware(func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodGet:
			handlers.GetTransactions(w, r)
		case http.MethodPost:
			handlers.CreateTransaction(w, r)
		default:
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		}
	}))

	http.HandleFunc("/transaction", middlewares.AuthMiddleware(func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodGet:
			handlers.GetTransaction(w, r)
		case http.MethodPut:
			handlers.UpdateTransaction(w, r)
		case http.MethodDelete:
			handlers.DeleteTransaction(w, r)
		default:
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		}
	}))
}
