    document.getElementById('loginForm').addEventListener('submit', async function (event) {
        event.preventDefault();
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());

        const response = await fetch('/.netlify/functions/handleForm', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log(result.message); // Affiche un message de confirmation
    });
