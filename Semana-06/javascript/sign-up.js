function validate(word, type, minChar){
    if (word.length < minChar) {
        return (false)
    }
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
    letters = word.length;
    for (a = 0; a < letters; a++){
        charToFind = word[a];
        if (toCheck.indexOf (charToFind) == -1){
            return (false)
        }
    }
    return (true);
}
window.onload = function () {
    var inputEmail = document.getElementById ("inputEmail");
    var inputPassword = document.getElementById ("inputPassword");
    var signUpButton = document.getElementsByClassName ("button-login")[0];
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var nameError = document.getElementsByClassName ("error-message")[0];
    var lastnameError = document.getElementsByClassName ("error-message")[1];
    var dniError = document.getElementsByClassName ("error-message")[2];
    var birthdayError = document.getElementsByClassName ("error-message")[3];
    var phoneError = document.getElementsByClassName ("error-message")[4];
    var directionError = document.getElementsByClassName ("error-message")[5];
    var cityError = document.getElementsByClassName ("error-message")[6];
    var cpError = document.getElementsByClassName ("error-message")[7];
    var emailError = document.getElementsByClassName ("error-message")[8];
    var passwordError = document.getElementsByClassName ("error-message")[9];
    var repeatPasswordError = document.getElementsByClassName ("error-message")[10];
    buscar="0"
    dondeBuscar="abcdefghijklmnopqrstuvwxyz"
    console.log(dondeBuscar.indexOf(buscar));
    nameError.classList.add ("hidden");
    lastnameError.classList.add ("hidden");
    dniError.classList.add ("hidden");
    birthdayError.classList.add ("hidden");
    phoneError.classList.add ("hidden");
    directionError.classList.add ("hidden");
    cityError.classList.add ("hidden");
    cpError.classList.add ("hidden");
    emailError.classList.add ("hidden");
    passwordError.classList.add ("hidden");
    repeatPasswordError.classList.add ("hidden");
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
        passwordOk = validate (password, "lettersAndNumbers", 8);
        if (passwordOk == false) {
            passwordError.classList.remove ("hidden");
        }
    }
    inputPassword.onfocus = function () {
        passwordError.classList.add ("hidden");
    }
    signUpButton.onclick = function(e){
        e.preventDefault();
        mail = inputEmail.value;
        mailOk = emailExpression.test(mail);
        password = inputPassword.value;
        passwordOk = validate (password, "lettersAndNumbers", 8);
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