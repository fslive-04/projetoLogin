document.addEventListener('DOMContentLoaded', function () {
    const storedUser = localStorage.getItem('loggedUser');
    if (storedUser) {
        const userData = JSON.parse(storedUser);
        displayUserCard(userData);
        toggleLoginform(false);
    }
});

function displayUserCard(user) {
    const { firstName, lastName, age, email, phone, image } = user;
    document.getElementById('user-image').src = image;
    document.getElementById('user-name').textContent = `${firstName} ${lastName}`;
    document.getElementById('user-email').textContent = email;
    document.getElementById('user-age').textContent = age;
    document.getElementById('user-phone').textContent = phone;
}

function toggleLoginform(show) {
    document.getElementById('login-form').style.display = show ? 'block' : 'none';
    document.getElementById('user-card').style.display = show ? 'none' : 'block';
}

document.getElementById('login-form').addEventListener('submit', async function (e) {
    e.preventDefault(); //Evita o envio padrão do form

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const loginResponse = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password
            })
        });

        if (loginResponse.ok) {
            const userData = await loginResponse.json();
            localStorage.setItem('loggedUser', JSON.stringify(userData));
            displayUserCard(userData);
            toggleLoginform(false);
            clearLoginForm();
        } else {
            alert('Login falhou! Verifque suas credenciais.');
        }

    } catch (error) {
        console.error('Erro:', error);
        clearLoginForm();
    }
});

function clearLoginForm() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}