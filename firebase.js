// A rajouter dans HTML
//     <script type="module" src="./firebase.js"></script>

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
  import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js"; 

 
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAMYsJzeUagyp-k1zGcK-AdTYJd9yB9ESM",
    authDomain: "legendarycreatures-6501d.firebaseapp.com",
    databaseURL: "https://legendarycreatures-6501d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "legendarycreatures-6501d",
    storageBucket: "legendarycreatures-6501d.firebasestorage.app",
    messagingSenderId: "254186153193",
    appId: "1:254186153193:web:d1e4b70cfa519e056f7c78",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Créer la référence à la BDD firebase
  const bdd = getDatabase(app); //=> ici je récupère la base de données Firebase
  const DBref = ref(bdd);//=> ici je conserve sa référence pour l'utiliser plus tard

 DBref.set("users");

  