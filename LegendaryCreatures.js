// LES CARTES //

const cards = [

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

// Terre

{   "id": 11,
    "name":"Pisselion",
    "type":"Terre",
    "fusion":true,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Earth/id_11_Earth_Pisselion.webp"
},

{   "id": 12,
    "name":"Tergarou",
    "type":"Terre",
    "fusion":true,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Earth/id_12_Earth_Tergarou.webp"
},

{   "id": 13,
    "name":"Relaxil",
    "type":"Terre",
    "fusion":false,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Earth/id_13_Earth_Relaxil.webp"
},

{   "id": 14,
    "name":"Pichampi",
    "type":"Terre",
    "fusion":true,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Earth/id_14_Earth_Pichampi.webp"
},

{   "id": 15,
    "name":"Passerbe",
    "type":"Terre",
    "fusion":true,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": true,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Earth/id_15_Earth_Passerbe.webp"
},

// Vent

{   "id": 16,
    "name":"Toraigle",
    "type":"Vent",
    "fusion":true,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": true,
    "image":"./Images/Creatures_Cards/Wind/id_16_Wind_Toraigle.webp"
},

{   "id": 17,
    "name":"Pelisha",
    "type":"Vent",
    "fusion":true,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Wind/id_17_Wind_Pelisha.webp"
},

{   "id": 18,
    "name":"Automni",
    "type":"Vent",
    "fusion":false,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": true,
    "image":"./Images/Creatures_Cards/Wind/id_18_Wind_Automni.webp"
},

{   "id": 19,
    "name":"Balhy",
    "type":"Vent",
    "fusion":false,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Wind/id_19_Wind_Balhy.webp"
},

{   "id": 20,
    "name":"Volfury",
    "type":"Vent",
    "fusion":true,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Wind/id_20_Wind_Volfury.webp"
},

// Electricité

{   "id": 21,
    "name":"Eleco",
    "type":"Electricité",
    "fusion":false,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Electricity/id_21_Electricity_Eleco.webp"
},

{   "id": 22,
    "name":"Hibectrix",
    "type":"Electricité",
    "fusion":false,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Electricity/id_22_Electricity_Hibectrix.webp"
},

{   "id": 23,
    "name":"Elechat",
    "type":"Electricité",
    "fusion":false,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Electricity/id_23_Electricity_Elechat.webp"
},

{   "id": 24,
    "name":"Ferox",
    "type":"Electricité",
    "fusion":false,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Electricity/id_24_Electricity_Ferox.webp"
},

{   "id": 25,
    "name":"Mystris",
    "type":"Electricité",
    "fusion":false,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Electricity/id_25_Electricity_Mystris.webp"
},

// Glace

{   "id": 26,
    "name":"Draglace",
    "type":"Glace",
    "fusion":false,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Ice/id_26_Ice_Draglace.webp"
},

{   "id": 27,
    "name":"Equifreeze",
    "type":"Glace",
    "fusion":false,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Ice/id_27_Ice_Equifreeze.webp"
},

{   "id": 28,
    "name":"Tigalo",
    "type":"Glace",
    "fusion":false,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Ice/id_28_Ice_Tigalo.webp"
},

{   "id": 29,
    "name":"Lynxi",
    "type":"Glace",
    "fusion":false,
    "brulure":false,
    "eclaboussure":true,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Ice/id_29_Ice_Lynxi.webp"
},

{   "id": 30,
    "name":"Liona",
    "type":"Glace",
    "fusion":false,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Ice/id_30_Ice_Liona.webp"
},


//Lave

{   "id": 31,
    "name":"Grenzuu",
    "type":"Lave",
    "fusion":false,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Lava/id_31_Lava_Grenzuu.webp"
},

{   "id": 32,
    "name":"Cracky",
    "type":"Lave",
    "fusion":false,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Lava/id_32_Lava_Cracky.webp"
},

{   "id": 33,
    "name":"Phoenoc",
    "type":"Lave",
    "fusion":false,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Lava/id_33_Lava_Phoenoc.webp"
},

{   "id": 34,
    "name":"Dracony",
    "type":"Lave",
    "fusion":false,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Lava/id_34_Lava_Dracony.webp"
},

{   "id": 35,
    "name":"Salalave",
    "type":"Lave",
    "fusion":false,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Lava/id_35_Lava_Salalave.webp"
},

// Vapeur //

{   "id": 36,
    "name":"Plumygre",
    "type":"Vapeur",
    "fusion":false,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Steam/id_36_Steam_Plumygre.webp"
},

{   "id": 37,
    "name":"Voldry",
    "type":"Vapeur",
    "fusion":false,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Steam/id_37_Steam_Voldry.webp"
},

{   "id": 38,
    "name":"Moochto",
    "type":"Vapeur",
    "fusion":false,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Steam/id_38_Steam_Moochto.webp"
},

{   "id": 39,
    "name":"Loufroi",
    "type":"Vapeur",
    "fusion":false,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Steam/id_39_Steam_Loufroi.webp"
},

{   "id": 40,
    "name":"Raygon",
    "type":"Vapeur",
    "fusion":false,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Steam/id_40_Steam_Raygon.webp"
},


// Végétale //

{   "id": 41,
    "name":"Axolyte",
    "type":"Vegetale",
    "fusion":false,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Vegetal/id_41_Vegetal_Axolyte.webp"
},

{   "id": 42,
    "name":"Dracolune",
    "type":"Vegetale",
    "fusion":false,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Vegetal/id_42_Vegetal_Dracolune.webp"
},

{   "id": 43,
    "name":"Dracolune",
    "type":"Vegetale",
    "fusion":false,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Vegetal/id_43_Vegetal_Herbo.webp"
},

{   "id": 44,
    "name":"Logaro",
    "type":"Vegetale",
    "fusion":false,
    "brulure":false,
    "eclaboussure":true,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Vegetal/id_44_Vegetal_Logaro.webp"
},

{   "id": 45,
    "name":"Fouinou",
    "type":"Vegetale",
    "fusion":false,
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Vegetal/id_45_Vegetal_Fouinou.webp"
},

]

// RECUPERATION DES ELEMENTS //

const cardContainer = document.getElementById('BestiaryContainer');
const allCardsButton = document.getElementById('allCardsBtn');
const fireCardsButton = document.getElementById('fireCardsBtn');
const waterCardsButton = document.getElementById('waterCardsBtn');
const earthCardsButton = document.getElementById('earthCardsBtn');
const windCardsButton = document.getElementById('windCardsBtn');
const electricityCardsButton = document.getElementById('electricityCardsBtn');
const iceCardsButton = document.getElementById('iceCardsBtn');
const lavaCardsButton = document.getElementById('lavaCardsBtn');
const steamCardsButton = document.getElementById('steamCardsBtn');
const vegetalCardsButton = document.getElementById('vegetalCardsBtn');


// FONCTION AFFICHAGE DES CARTES //

function displayCards(filteredCards) {
    cardContainer.innerHTML = '';
    filteredCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `
        <img src="${card.image}" alt="${card.name}">`;
        cardContainer.appendChild(cardElement);
     });
}


// Afficher toutes les cartes au chargement de la page //
document.addEventListener('DOMContentLoaded', () => {
displayCards(cards);
});

// Écouteur d'événement pour le bouton "Toutes les cartes" //
   allCardsButton.addEventListener('click', () => {
            displayCards(cards);
    });

// Écouteur d'événement pour le bouton "Créatures du Feu"//
fireCardsButton.addEventListener('click', () => {
    const fireCards = cards.filter(card => card.type === 'Feu');
    displayCards(fireCards);
});

// Écouteur d'événement pour le bouton "Créatures de l'Eau" //
waterCardsButton.addEventListener('click', () => {
    const waterCards = cards.filter(card => card.type === 'Eau');
    displayCards(waterCards);
});

// Écouteur d'événement pour le bouton "Créatures de la Terre" //
earthCardsButton.addEventListener('click', () => {
    const earthCards = cards.filter(card => card.type === 'Terre');
    displayCards(earthCards);
});

// Écouteur d'événement pour le bouton "Créatures du Vent" //
windCardsButton.addEventListener('click', () => {
    const windCards = cards.filter(card => card.type === 'Vent');
    displayCards(windCards);
});

// Écouteur d'événement pour le bouton "Créatures de l'Electricité" //
electricityCardsButton.addEventListener('click', () => {
    const electricityCards = cards.filter(card => card.type === 'Electricité');
    displayCards(electricityCards);
});

// Écouteur d'événement pour le bouton "Créatures de la Glace" //
iceCardsButton.addEventListener('click', () => {
    const iceCards = cards.filter(card => card.type === 'Glace');
    displayCards(iceCards);
});

// Écouteur d'événement pour le bouton "Créatures de Lave" //
lavaCardsButton.addEventListener('click', () => {
    const lavaCards = cards.filter(card => card.type === 'Lave');
    displayCards(lavaCards);
});

// Écouteur d'événement pour le bouton "Créatures de Vapeur" //
steamCardsButton.addEventListener('click', () => {
    const steamCards = cards.filter(card => card.type === 'Vapeur');
    displayCards(steamCards);
});

// Écouteur d'événement pour le bouton "Créatures Végétales" //
vegetalCardsButton.addEventListener('click', () => {
    const vegetalCards = cards.filter(card => card.type === 'Vegetale');
    displayCards(vegetalCards);
});
