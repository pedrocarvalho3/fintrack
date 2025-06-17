package main

import (
	"log"
	"net/http"

	"github.com/pedrocarvalho3/fintrack-server/database"
	"github.com/pedrocarvalho3/fintrack-server/routes"
)

func main() {
	database.Connect()

	routes.RegisterRoutes()
	
	log.Println("Server is running on port :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}