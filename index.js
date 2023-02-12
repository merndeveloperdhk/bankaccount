document.getElementById('btnSubmit').addEventListener('click',function(){
    // Always remember to use .value to get text from an input field.
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    // get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(password);

    // verify email and password.
    if(email === 'info@gmail.com' && password === 'secret'){
        window.location.href='bank.html';
    }else{
        alert("your email or password wrong.")
    }
})