// Once you have retrieved all of the foods from your own Food API, display each one of them in the DOM. Create an HTML representation of each food which will display the name of the food, its type, and its ethnicity.

// Create a DOM element in your index.html with a class of foodList.
// Create a function which returns a string template. The template is the HTML representation for a food item.
// Create a function that inserts an HTML representation of a food into the DOM


// http://localhost:8088/foods

// fetch("http://localhost:8088/food")
//     .then(foods => foods.json())
//     .then(parsedFoods => {
//         parsedFoods.forEach(food => {
//             const foodAsHTML = foodFactory(food)
//             addFoodToDom(foodAsHTML)
//         })
//     })

const foodList = document.getElementById('foodList');
function domContent (name, category, ethnicity) {
    foodList.innerHTML += `<div class='foodDiv'><h1>${name}</h1>
    <p>${category}</p>
    <p>${ethnicity}</div>
    `
}

fetch('http://localhost:8088/foods')
    .then(response => response.json())
    .then(parsedFoods => {
        for (let i = 0; i < parsedFoods.length; i++) {
            domContent(parsedFoods[i].name, parsedFoods[i].category, parsedFoods[i].ethnicity)
        }
    })
    
    
    
    
    
    // foodList.textContent += ' ' + parsedFoods[i].name
    // foodList.textContent += ' ' + parsedFoods[i].category
    // foodList.textContent += ' ' + parsedFoods[i].ethnicity


