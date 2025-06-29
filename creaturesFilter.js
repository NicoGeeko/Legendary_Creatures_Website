
const allCreatures = [

    {   "id":1,
        "name":"Lezincelle",
        "type":"Feu",
        "fusion":true,
        "brulure":true,
        "eclaboussure":false,
        "cohesion": false,
        "etourdissement": false,
        "image":"./Images/Creatures_Cards/Fire/id_01_Fire_Lezincelle.webp"
    },

    {   "id":2,
        "name":"Tigrafeu",
        "type":"Feu",
        "fusion":true,
        "brulure":true,
        "eclaboussure":false,
        "cohesion": false,
        "etourdissement": false,
        "image":"./Images/Creatures_Cards/Fire/id_02_Fire_Tigrafeu.webp"
    },

    {   "id":3,
        "name":"Chaufeu",
        "type":"Feu",
        "fusion":false,
        "brulure":true,
        "eclaboussure":false,
        "cohesion": false,
        "etourdissement": false,
        "image":"./Images/Creatures_Cards/Fire/id_03_Fire_Chaufeu.webp"
    },

{   "id":4,
    "name":"Flammalion",
    "type":"Feu",
    "fusion":true,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Fire/id_04_Fire_Flammalion.webp"
},   

{   "id":5,
    "name":"Flammalion",
    "type":"Feu",
    "fusion":true,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Fire/id_05_Fire_Ghostflamme.webp"
}, 

// Eau

{   "id": 6,
    "name":"Mignoni",
    "type":"Eau",
    "fusion":false,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Water/id_06_Water_Mignoni.webp"
}, 

{   "id": 7,
    "name":"Tortinou",
    "type":"Eau",
    "fusion":false,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Water/id_07_Water_Tortinou.webp"
},

{   "id": 8,
    "name":"Aquami",
    "type":"Eau",
    "fusion":false,
    "brulure":false,
    "eclaboussure":true,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Water/id_08_Water_Aquami.webp"
},

{   "id": 9,
    "name":"Belfleur",
    "type":"Eau",
    "fusion":false,
    "brulure":false,
    "eclaboussure":true,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Water/id_09_Water_Belfleur.webp"
},

{   "id": 10,
    "name":"Corina",
    "type":"Eau",
    "fusion":false,
    "brulure":false,
    "eclaboussure":true,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Water/id_10_Water_Corina.webp"
},

]


const cardsContainer = document.getElementById('cards-container');

/**
 * Crée un élément HTML de carte à partir d'un objet créature, sans texte.
 * @param {object} creature - L'objet créature à afficher.
 * @returns {HTMLElement} - L'élément div représentant la carte.
 */
function createCardElement(creature) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    
    // Ajoute des attributs data-* pour le filtrage en JavaScript
    cardDiv.dataset.id = creature.id; 
    cardDiv.dataset.type = creature.type;
    // Ajoute tous les attributs booléens de la créature comme data-attributes
    for (const key in creature) {
        if (typeof creature[key] === 'boolean' && creature[key] === true) {
            cardDiv.dataset[key] = 'true';
        }
    }

    // Le contenu HTML de la carte : seulement l'image
    cardDiv.innerHTML = `
        <img src="${creature.image}" alt="${creature.name}">
    `;
    return cardDiv;
}

/**
 * Affiche toutes les cartes dans le conteneur.
 */
function renderAllCards() {
    cardsContainer.innerHTML = ''; // Vide le conteneur
    allCreatures.forEach(creature => {
        cardsContainer.appendChild(createCardElement(creature));
    });
}

/**
 * Filtre les cartes affichées en fonction du type et de la valeur du filtre.
 * @param {string} filterBy - Le type de filtre ('type' ou 'attribute').
 * @param {string} filterValue - La valeur du filtre (ex: 'Feu', 'brulure', 'all').
 */
function filterCards(filterBy, filterValue) {
    const allCardElements = document.querySelectorAll('.card');

    allCardElements.forEach(cardElement => {
        // Supprime la classe 'hidden' de toutes les cartes avant de refiltrer
        cardElement.classList.remove('hidden');

        if (filterValue === 'all') {
            // Si le filtre est 'all', toutes les cartes restent visibles
            return;
        }

        let shouldBeHidden = true; // Par défaut, on cache la carte

        if (filterBy === 'type') {
            if (cardElement.dataset.type === filterValue) {
                shouldBeHidden = false; // La carte correspond au type, ne la cache pas
            }
        } else if (filterBy === 'attribute') {
            // Vérifie si l'attribut booléen de la carte est 'true' pour le filtre donné
            if (cardElement.dataset[filterValue] === 'true') {
                shouldBeHidden = false; // La carte a l'attribut, ne la cache pas
            }
        }

        if (shouldBeHidden) {
            cardElement.classList.add('hidden');
        }
    });
}

// --- Initialisation et gestion des événements ---

// Au chargement de la page, afficher toutes les cartes
document.addEventListener('DOMContentLoaded', renderAllCards);

// Écouteur d'événements pour les boutons de filtre
const filterButtons = document.querySelectorAll('.filter-button');

filterButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const filterBy = event.target.dataset.filterBy;
        const filterValue = event.target.dataset.filterValue;
        
        filterCards(filterBy, filterValue);
    });
});






////
