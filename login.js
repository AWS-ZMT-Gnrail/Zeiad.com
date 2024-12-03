document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '1524') {
        localStorage.setItem('loggedIn', 'true');

        const audio = new Audio('audio/1.mp3'); 
        audio.play();

        audio.onended = function() {
            window.location.href = 'home.html';
        };

        const welcomeMessage = document.getElementById('welcomeMessage');
        welcomeMessage.style.display = 'block';

        setTimeout(function() {
            welcomeMessage.style.display = 'none';
        }, 3000);
    } else {
        alert('اسم المستخدم أو كلمة المرور غير صحيحة!');
    }
});
