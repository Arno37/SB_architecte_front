async function getWorks() {
    try {
        const response = await fetch('http://localhost:5678/api/works/');
        const data = await response.json();// Affiche la réponse dans la console
        console.log('recup works');
        console.log(data[0].title)
        return data
    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
    
}

getWorks()


