package main

import (
	"log"
	"net/http"

	"github.com/joho/godotenv"

	"github.com/pedrocarvalho3/fintrack-server/database"
	"github.com/pedrocarvalho3/fintrack-server/middlewares"
	"github.com/pedrocarvalho3/fintrack-server/routes"
)

func main() {
	database.Connect()

	routes.RegisterRoutes()
	
	handler := middlewares.CorsMiddleware(http.DefaultServeMux)

	log.Println("Server is running on port :8080")
	log.Fatal(http.ListenAndServe(":8080", handler))
}

func init() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
}