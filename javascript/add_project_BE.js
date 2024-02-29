async function postworks (){

 try {

    const post = await fetch('http://localhost:5678/api/works/');
    method: 'POST',
    headers: {
    'Content-Type: multipart/form-data'

}
body: FormData
    image: 
    title: 
    category: 
}
if (post.ok) {
const upload = await post.FormData()

} else {
    alert('Le formulaire est correctement rempli.');
}
} catch (error) {
    console.error('Le formulaire n\'est pas correctement rempli.', error)
}
document.addEventListener('DOMContentLoaded', function() {
    const addPhotoButton = document.querySelector('.add-photo-button');
    const fileInput = document.getElementById('fileInput');

    addPhotoButton.addEventListener('click', function() {
        fileInput.click();
    });
});

