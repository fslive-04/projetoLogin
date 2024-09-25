
function toggleLoginform(show){
    document.getElementById('login-form').style.display = show ? 'block' : 'none';
    document.getElementById('user-card').style.display = show ? 'none' : 'block';
}

toggleLoginform(false)