

async function deleteprojects(deleteid) {
    try {
        
        const response = await fetch(`http://localhost:5678/api/works/${id}`, {
            method: 'DELETE'
        });

       
        if (response.ok) {
            
            const workElement = document.getElementById(`work/${id}`);
            
        } else {
            
            console.error('La suppression du travail a échoué.');
        }
    } catch (error) {
        console.error('Une erreur s\'est produite lors de la suppression du travail :', error);
        
        alert('Une erreur s\'est produite lors de la suppression du travail. Veuillez réessayer plus tard.');
    }
}


const deletebutton = document.getElementById('trash_button')
deletebutton.addEventListener('click', function() {
    
    console.log('Le bouton a été cliqué !');
});


document.addEventListener('DOMContentLoaded', () => {
    
    const deletetrash = document.getElementById('trash_picture');
    deletetrash.addEventListener('click', deleteprojects);

});