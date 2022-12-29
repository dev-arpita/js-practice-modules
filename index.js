let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let fruits = document.getElementById("fruit-shelf")
fruits.textContent = fruit.join("")
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

document.getElementById("srotButton").addEventListener("click", fruitShelf)
// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.
function fruitShelf() {
        return fruit.map(fruit => {
        return( fruit === "🍎") ? appleShelf.textContent += fruit : orangeShelf.textContent += fruit
    })

}
// fruitShelf()
