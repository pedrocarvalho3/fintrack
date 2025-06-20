package routes

import (
	"net/http"

	"github.com/pedrocarvalho3/fintrack-server/handlers"
	"github.com/pedrocarvalho3/fintrack-server/middleware"
)

func RegisterRoutes() {
	http.HandleFunc("/register", handlers.RegisterHandler)
	http.HandleFunc("/login", handlers.LoginHandler)
	http.HandleFunc("/profile", middleware.AuthMiddleware(handlers.ProfileHandler))
}
