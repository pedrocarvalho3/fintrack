package utils

import (
	"fmt"
	"math/rand"
)

func RandomHexColor() string {
	return fmt.Sprintf("#%06X", rand.Intn(0xFFFFFF))
}
