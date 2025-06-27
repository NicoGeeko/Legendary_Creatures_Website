// Les Cartes //

// Feu

let lezincelle = {
    "id":1,
    "name":"Lezincelle",
    "type":"Feu",
    "fusion":true,
    "resistance":"terre",
    "brulure":true,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Fire/id_01_Fire_Lezincelle.webp"};

let tigrafeu = {
    "id":2,
    "name":"Tigrafeu",
    "type":"Feu",
    "fusion":true,
    "resistance":"terre",
    "brulure":true,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Fire/id_02_Fire_Tigrafeu.webp"};

let chaufeu = {
    "id":3,
    "name":"Chaufeu",
    "type":"Feu",
    "fusion":false,
    "resistance":"terre",
    "brulure":true,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Fire/id_03_Fire_Chaufeu.webp"};

let flammalion = {
    "id":4,
    "name":"Flammalion",
    "type":"Feu",
    "fusion":true,
    "resistance":"terre",
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Fire/id_04_Fire_Flammalion.webp"};   

let ghostflamme = {
    "id":5,
    "name":"Flammalion",
    "type":"Feu",
    "fusion":true,
    "resistance":"terre",
    "brulure":false,
    "eclaboussure":false,
    "cohesion": false,
    "etourdissement": false,
    "image":"./Images/Creatures_Cards/Fire/id_05_Fire_Ghostflamme.webp"};  
    
let fireCreatures = [lezincelle,tigrafeu,chaufeu,flammalion,ghostflamme];    

console.log(fireCreatures[2][2]);