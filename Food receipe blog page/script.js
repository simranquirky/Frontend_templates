// Sample recipe data (you can replace this with your own data)
const recipes = [
    { title: "Paneer Tikka", description: "Biryani is a fragrant and flavorful rice dish made with aromatic basmati rice, mixed with a combination of spices, and often includes chicken, lamb, or vegetables. It's usually garnished with fried onions and served with raita." },
    { title: "Tandoori Chicken", description: "Tandoori chicken is marinated in a mixture of yogurt and spices, then cooked in a tandoor (clay oven). It has a smoky and slightly charred flavor and is often served with mint chutney." },
    { title: "Biryani", description: "Fresh tomatoes, mozzarella, basil, and balsamic glaze." },
    {title:"Masala Dosa",description:"A South Indian classic, masala dosa is a thin and crispy fermented rice and lentil crepe filled with a spiced potato mixture. It's typically served with coconut chutney and sambar."},
    {title:"Chole Bhature",description:"Chole bhature is a North Indian dish consisting of spicy chickpea curry (chole) and deep-fried bread (bhature). It's a hearty and flavorful meal."},
    {title:"Samosas",description:"Samosas are triangular pastries filled with a mixture of spiced potatoes, peas, and sometimes minced meat. They are deep-fried and make a popular snack."},
    {title:"Rogan Josh",description:"Rogan josh is a rich and aromatic curry from Kashmir, often made with tender pieces of meat (usually lamb) cooked in a flavorful sauce made with a blend of spices and yogurt."},
    {title:"Palak Paneer",description:"Palak paneer is a North Indian dish made with pureed spinach and paneer, cooked in a spiced tomato and cream-based sauce. It's nutritious and flavorful."},
    {title:"Dal Makhani",description:"Dal makhani is a rich and creamy lentil dish made with whole black lentils, red kidney beans, and a tomato-based gravy. It's usually served with naan or rice."},


];

// Function to display recipe titles only
function displayRecipeTitles() {
    const recipeList = document.getElementById("recipe");
    recipeList.classList.add("dish-container");
    recipeList.innerHTML = '';

    recipes.forEach(recipe => {
        const card = document.createElement("p");

        card.classList.add("recipe");
        card.innerText = recipe.title;
        recipeList.appendChild(card);
    });
}

// Call the function to display recipe titles on page load
displayRecipeTitles();

// Search functionality
document.getElementById("search").addEventListener("input", function () {
    const searchValue = this.value.toLowerCase().trim(); // Trim whitespace

    if (searchValue === "") {
        // Clear the content if the search field is empty
        const recipeList = document.getElementById("recipe-list");
        recipeList.innerHTML = 'Dish description';
    } else {
        const filteredRecipes = recipes.filter(recipe => {
            return recipe.title.toLowerCase().includes(searchValue);
        });

        // Display the filtered recipes with descriptions
        displayRecipes(filteredRecipes);
    }
});

// Function to display recipes with descriptions
function displayRecipes(recipeArray) {
    const recipeList = document.getElementById("recipe-list");
    recipeList.innerHTML = '';

    (recipeArray || recipes).forEach(recipe => {
        const card = document.createElement("div");
        card.classList.add("recipe-card");

        const title = document.createElement("div");
        title.classList.add("recipe-title");
        title.innerText = recipe.title;

        const description = document.createElement("div");
        description.classList.add("recipe-description");
        description.innerText = recipe.description;

        card.appendChild(title);
        card.appendChild(description);
        recipeList.appendChild(card);
    });
}