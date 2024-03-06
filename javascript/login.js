
async function login(email, password) {
    try {
         const response = await fetch('http://localhost:5678/api/users/login', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify({
                 email: email,
                 password: password
             })
         });
 
         if (response.ok) {
             const data = await response.json(); 
             const token = data.token; 
             localStorage.setItem('token', token); 
             window.location.href = "editor.html"; 
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
 
     loginButton.addEventListener("click", async function(event) {
       event.preventDefault(); 
 
       const email = document.getElementById("email").value;
       const password = document.getElementById("password").value;
 
       await login(email, password);
     });
 });