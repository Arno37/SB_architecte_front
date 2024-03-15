
async function login(email, password) {
    //fonction asynchrone nommée login qui prend deux paramètres : email et password//
    
    try {
         const response = await fetch('http://localhost:5678/api/users/login', {

         //l'API Fetch envoye une requête POST à l'URL http://localhost:5678/api/users/login, à l'endpoint (extrémité du point de communication) de l'API pour la connexion des utilisateurs. 
         //Les données de connexion (email et mot de passe) sont envoyées dans le corps de la requête au format JSON (JavaScript Object Notation)//
             
         method: 'POST',
         //POST -> requête pour envoyer des données au serveur//
             headers: {
                 'Content-Type': 'application/json'
                 // indique au serveur que les données envoyées dans le corps de la requête seront au format JSON (JavaScript Object Notation)
                 
             },
             body: JSON.stringify({
                 email: email,
                 password: password
                 // conversion d'un objet JavaScript en une chaîne JSON valide //
             })
         });

         if (response.ok) { //  vérification de la requête de connexion: statut HTTP 2OO OK)
             const data = await response.json(); 
            //extraction des données JSON de la réponse de la requête HTTP.
             const token = data.token; 
             //le token d'authentification est extrait de la réponse JSON//
             localStorage.setItem('token', token); 
             // le token  est stocké localement dans le localStorage du navigateur //
             window.location.href = "editor.html";
             //puis redirection vers la page "editor.html" //
         } 
         else {
             alert('La combinaison email/mot de passe est incorrecte. Veuillez réessayer.');
         }
 
     } catch (error) {
         console.error('Erreur lors de la connexion:', error);
     }
 }
 
 document.addEventListener("DOMContentLoaded", function() {
     const loginButton = document.querySelector(".login-button");
     //Sélection du bouton de "Connexion" dans le  HTML avec la classe ".login-button"//
 
     loginButton.addEventListener("click", async function(event) {
    // Ajout d'un écouteur d'événements de clic sur le bouton "Connexion". Lorsque le bouton est cliqué, la fonction addEventListener est exécutée.
       event.preventDefault(); 
 
       const email = document.getElementById("email").value;
       //Récupération de la value avec l'ID de input //
       const password = document.getElementById("password").value;
      //Récupération de la value avec l'ID de input //
 
       await login(email, password);
       //Appel de la fonction Login avec les valeurs de l'e-mail et du mot de passe en tant qu'arguments.
       //L'utilisation de await  indique que le code attend que la promesse retournée par login soit résolue avant de passer à l'instruction suivante
       
     });
 });