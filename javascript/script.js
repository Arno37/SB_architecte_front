async function getWorks() {
    try {
        const response = await fetch('http://localhost:5678/api/works/');
        
        const dataWorks = await response.json();
        
        const gallery = document.querySelector('.gallery');
        
        
        for (const currentWork of dataWorks) {
            const figure = document.createElement('figure');
            figure.dataset.category=currentWork.categoryId
           
            const image = document.createElement('img');
            image.src = currentWork.imageUrl
            image.alt = currentWork.title

            const caption = document.createElement('figcaption');
            caption.textContent = currentWork.title

            figure.appendChild(image);
            figure.appendChild(caption);

            gallery.appendChild(figure); 
        } 
        
    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
}

function setfilter(categoryId){
    const gallery = document.querySelector('.gallery');
    const figures= gallery.querySelectorAll('figure')
    console.log('boutonclique ' , categoryId)

    for  (const figure of figures) {
        console.log(figure.dataset.category)

        if(figure.dataset.category == categoryId){
            figure.style.display='block'
        }
        else if (categoryId == 0){
            figure.style.display='block'
        }
        else {
            figure.style.display='none'
        }
    }
    



}


async function getCategories() {
    try {
        const filters = document.querySelector('.filters');
        const button = document.createElement('button');
        button.textContent = 'Tous';
        button.addEventListener("click",()=>setfilter(0))
        filters.appendChild(button)


        const response = await fetch('http://localhost:5678/api/categories/');
        
        const dataCategories = await response.json();// Affiche la réponse dans la console
        
        

        
        for (const currentCategory of dataCategories) {
            
            const button = document.createElement('button');
            button.textContent = currentCategory.name;
            button.addEventListener("click",()=>setfilter(currentCategory.id))
            
        filters.appendChild(button)


}


    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
   
    async function loginUser(email, password) {
        try {
            
            const response = await fetch('http://localhost:5678/api-docs/#/default/post_users_login', {
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
                window.location.href = '/accueil.html';
                
                return data;
            } else if (response.status === 401) {
                
                throw new Error('Email ou mot de passe incorrect.');
            } else if (response.status === 404) {
                
                throw new Error('Utilisateur non trouvé.');
            } else {
               
                throw new Error('Erreur inattendue.');
            }
        } catch (error) {
            
            console.error('Une erreur s\'est produite lors de la connexion :', error);
           
            return null;
        }
    }
    
    
    /*loginUser('exemple@email.com', 'motdepasse')
        .then(data => {
            
            if (data) {
                console.log('Utilisateur connecté avec succès:', data);
                
            } else {
                console.log('Échec de la connexion.');
               
            }
        });*/
    
}



// Appel de la fonction fetchData dès que le document est chargé
document.addEventListener('DOMContentLoaded', () => {
    getWorks();
    getCategories();


})

