let userEmail = localStorage.getItem('email');
let passCode = localStorage.getItem('password');
console.log(userEmail);
console.log(passCode);
let email = document.querySelector('.email');
let pass = document.querySelector('.pass');
let submitBtn = document.querySelector('.submit');
//event listener on submit button
submitBtn.addEventListener("click", function(){
    if(email.value === userEmail && pass.value === passCode){
        localStorage.setItem('register', true);
        alert('login successfully.');
        window.location.href = 'explore.html';
    }else{
        alert('Account does not exist.');
    }
});