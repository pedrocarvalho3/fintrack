package routes

import (
	"net/http"

	"github.com/pedrocarvalho3/fintrack-server/handlers"
)

func RegisterRoutes() {
	http.HandleFunc("/register", handlers.RegisterHandler)
}
