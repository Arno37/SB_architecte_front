
/* const loginButton = document.querySelector('.connecting .invisible-button');
loginButton.addEventListener('click', () => {

    const email = document.querySelector('.contact input').value;
    const password = document.querySelector('.password input').value;

    login(email, password);
});
 */

async function login(form) {
    try {

        console.log(form)
        /* const response = await fetch('http://localhost:5678/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({
                email: email,
                password: password
            })

        });

        console.log(response)



        if (response.ok) {
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MTg3NDkzOSwiZXhwIjoxNjUxOTYxMzM5fQ.JGN1p8YIfR-M-5eQ-Ypy6Ima5cKA4VbfL2xMr2MgHm4';
            localStorage.setItem('token', token)
            window.location.href = 'file:///Users/arno/Desktop/SB_architecte/Portfolio-architecte-sophie-bluel/FrontEnd/index.html#';

        } else {
            alert('La combinaison email/mot de passe est incorrecte. Veuillez réessayer.');
        }
 */
    } catch (error) {
        console.error('Une erreur s\'est produite lors de la tentative de connexion :', error);
        alert('Une erreur s\'est produite lors de la tentative de connexion. Veuillez réessayer plus tard.');
    }
}