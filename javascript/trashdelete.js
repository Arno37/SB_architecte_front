async function deleteItemFromApi (idPhoto) {
    const userToken = localStorage.getItem('token');
    
    const response = await fetch(http://localhost:5678/api/works/${idPhoto}, {
           method: 'DELETE',
           headers: {
               'Authorization': Bearer ${userToken}
               'Content-Type': 'application/json'
           }
       });
       
       if (response.ok) {
         console.log('image supprimee')
       } else {
         console.log('un probleme est survenu lors de la suppression')
       }
}