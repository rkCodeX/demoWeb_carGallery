let name = document.querySelector('.name');
let number = document.querySelector('.number');
let email = document.querySelector('.email');
let code = document.querySelector('.code');
let check = document.querySelector('.checkbtn');
let submitBtn = document.querySelector('.submit');
let checkBtn = false;

check.addEventListener('click',()=>checkBtn = true);
function agree(){
if(checkBtn){
    check.checked = true;
}else{
    check.checked = false;
}
}

submitBtn.addEventListener('click', function(){
    let permission = checkValidity();
    if(permission){
        localStorage.setItem('name', name.value);
        localStorage.setItem('number', number.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', code.value);
        clear();
        agree();
        localStorage.setItem('register', true);
    }
})

function checkValidity(){
    let nameValue = name.value;
    let numberValue = number.value;
    let emailValue = email.value;
    let codeValue = code.value
    if(nameValue && numberValue.length >= 11 && emailValue && codeValue.length >= 4 && checkBtn)
    {
        alert('Form submitted successfully');
        return true;
    }else{
        alert('Please fill all the required fields and check the checkbox');
        return false;
    }
}
function clear(){
    name.value = '';
    number.value = '';
    email.value = '';
    code.value = '';
    checkBtn = false;
}