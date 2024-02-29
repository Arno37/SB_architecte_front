async function login(form) {
    try {
        const email = form.email.value; 
        const password = form.password.value; 

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
           
        } else {
            alert('La combinaison email/mot de passe est incorrecte. Veuillez réessayer.');
        }

    } catch (error) {
        console.error('Une erreur s\'est produite lors de la tentative de connexion :', error);
        alert('Une erreur s\'est produite lors de la tentative de connexion. Veuillez réessayer plus tard.');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    
    const loginButton = document.querySelector(".login-button");
    
  
    loginButton.addEventListener("click", function(event) {
      event.preventDefault(); 
      

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
     
      if (email === "sophie.bluel@test.tld" && password === "S0phie") {
        
        window.location.href = "editor.html";
      } else {
        
        alert("La combinaison e-mail/mot de passe est incorrecte. Veuillez réessayer.");
      }
    });
  })