
function toggleLoginform(show){
    document.getElementById('login-form').style.display = show ? 'block' : 'none';
    document.getElementById('user-card').style.display = show ? 'none' : 'block';
}

document.getElementById('login-form').addEventListener('submit', async function (e) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    try {

    } catch (error) {

    }
    
}

);