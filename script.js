// Recuperer l'id dans le DOM
const dishesID = document.getElementById("dishes");

// Recuperation des données json
fetch("plats-du-monde.json")
    .then(response => response.json())
    .then(data => {
        // On vide le conteneur juste une seule fois
        dishesID.innerHTML = "";

        // Affichage des plats avec une boucle
        data.dishes.forEach(dish => {
            displayCard(dish);
        });
    });

function displayCard(dish) {

    // Creation de la card
    const card = document.createElement("div");
    card.classList.add("card");

    const imgCard = document.createElement("img");
    imgCard.src = `${dish.media.image}`;

    const titleCard = document.createElement("h3");
    titleCard.textContent = `${dish.name}`;

    const vegeCard = document.createElement("p");
    if (dish.diet.vegetarian === true) {
        vegeCard.textContent = `VEGETARIEN`;
    } else {
        vegeCard.textContent = `NON VEGETARIEN`;
    }

    const ingredientsList = document.createElement("ul");

    dish.ingredients.forEach(element => {
        const li = document.createElement("li");
        li.textContent = `${element}`;
        ingredientsList.appendChild(li);
    });

    const paraCard = document.createElement("p");
    paraCard.textContent = `${dish.origin.context}`;

    // Ajout des éléments dans la card
    card.appendChild(imgCard);
    card.appendChild(titleCard);
    card.appendChild(ingredientsList);
    card.appendChild(paraCard);
    card.appendChild(vegeCard);

    // Ajout de la card dans le DOM
    dishesID.appendChild(card);
}

