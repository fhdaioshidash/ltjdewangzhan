document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var storedUser = JSON.parse(localStorage.getItem('user'));
    if (username === storedUser.username && password === storedUser.password) {
        alert('登录成功，跳转中...');
        window.location.href = "home.html";
    } else {
        alert('用户名或密码错误');
    }
});