
document.addEventListener("DOMContentLoaded", function() {
    
    var loginButton = document.querySelector(".login-button");
  
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
  });
/* 

function createModal() {

    const modal = document.createElement('div');
    modal.id = 'modal';
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Titre de la Modale</h2>
            <p>Contenu de la Modale...</p>
        </div>
    `;


    const modalContainer = document.getElementById('modalContainer');
    modalContainer.appendChild(modal);
}

function openModal() {

    createModal();
    const modal = document.getElementById('modal');

    modal.style.display = 'block';
}

function closeModal() {

    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}


const openModalButton = document.getElementById('openModalButton');
openModalButton.addEventListener('click', openModal);


const closeModalButton = document.getElementById('closeModalButton');
closeModalButton.addEventListener('click', closeModal);



document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', function (event) {
        if (event.target === document.body) {
            openModal();
        }
    });
}); */
