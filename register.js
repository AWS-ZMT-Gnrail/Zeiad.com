document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    localStorage.setItem('fullname', fullname);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

   
    alert('تم إنشاء الحساب بنجاح! يمكنك الآن تسجيل الدخول.');
    window.location.href = 'login.html';  
});
