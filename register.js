document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var user = { username: username, password: password };
    localStorage.setItem('user', JSON.stringify(user));
    alert('注册成功，跳转中...');
    window.location.href = "login.html";
});