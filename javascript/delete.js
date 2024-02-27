async function deleteWork(workId) {
    try {
        
        const response = await fetch(`http://localhost:5678/api/works/${workId}`, {
            method: 'DELETE'
        });

       
        if (response.ok) {
            
            const workElement = document.getElementById(`work-${workId}`);
            
            if (workElement) {
                workElement.remove();
            } else {
                console.error(`Le travail avec l'identifiant ${workId} n'a pas été trouvé dans le DOM.`);
            }
        } else {
            
            console.error('La suppression du travail a échoué.');
        }
    } catch (error) {
        console.error('Une erreur s\'est produite lors de la suppression du travail :', error);
        
        alert('Une erreur s\'est produite lors de la suppression du travail. Veuillez réessayer plus tard.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    
    const deleteButtons = document.querySelectorAll('.delete-work-button');

   
    deleteButtons.forEach(function(button) {
        
        button.addEventListener('click', function(event) {
            event.preventDefault();

           
            const workId = button.getAttribute('data-work-id');
            deleteWork(workId);
        });
    });
});