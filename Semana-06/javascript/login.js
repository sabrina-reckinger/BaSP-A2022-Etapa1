function validate(word, type){
    toCheck = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    if (type == "letters"){
        toCheck = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if (type == "numbers"){
        toCheck = "0123456789"
    }
    if (type == "lettersAndNumbers"){
        toCheck = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    }
    valid = true
    letters = word.length;
    for (a = 0; a < letters ; a++){
        if (toCheck.indexOf (word[a])==-1){
            valid = false;
        }
    }
    return (valid);
}
window.onload = function () {
    var inputEmail = document.getElementById ("inputEmail");
    var inputPassword = document.getElementById ("inputPassword");
    var loginButton = document.getElementsByClassName ("button-login")[0];
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var emailError = document.getElementsByClassName ("error-message")[0];
    var passwordError = document.getElementsByClassName ("error-message")[1];
    buscar="0"
    dondeBuscar="abcdefghijklmnopqrstuvwxyz"
    console.log(dondeBuscar.indexOf(buscar));
    emailError.classList.add ("hidden");
    passwordError.classList.add ("hidden");
    inputEmail.onblur = function () {
        mail = inputEmail.value;
        mailOk = emailExpression.test(mail);
        if (mailOk == false) {
            emailError.classList.remove ("hidden");
        }
    }
    inputEmail.onfocus = function () {
        emailError.classList.add ("hidden");
    }
    inputPassword.onblur = function () {
        password = inputPassword.value;
        passwordOk = password.length >= 8 && validate(password, "lettersAndNumbers");
        if (passwordOk == false) {
            passwordError.classList.remove ("hidden");
        }
    }
    inputPassword.onfocus = function () {
        passwordError.classList.add ("hidden");
    }
    loginButton.onclick = function(e){
        e.preventDefault();
        mail = inputEmail.value;
        mailOk = emailExpression.test(mail);
        password = inputPassword.value;
        passwordOk = password.length >= 8;
        if (passwordOk == true && mailOk == true){
            alert("Email: " + mail + ". Password: " + password)
        } else {
            if (mailOk == false){
                alert("Invalid email");
            }
            if (passwordOk == false){
                alert("Invalid password");
            }
        }
    }
}