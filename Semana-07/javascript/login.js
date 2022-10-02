function validate(word, type, minChar){
    if (word.length < minChar) {
        return false
    }
    var toCheck = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    if (type == "letters"){
        toCheck = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if (type == "numbers"){
        toCheck = "0123456789"
    }
    if (type == "lettersAndNumbers"){
        toCheck = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    }
    var letters = word.length;
    for (a = 0; a < letters; a++){
        var charToFind = word[a];
        if (toCheck.indexOf (charToFind) == -1){
            return false
        }
    }
    return true;
}
function findNumber(word){
    var letters = word.length;
    var toCheck = "0123456789";
    for (a = 0; a < letters; a++){
        var charToFind = word[a];
        if (toCheck.indexOf (charToFind) > -1){
            return true
        }
    }
    return false;
}
function findLetter(word){
    var letters = word.length;
    var toCheck = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (a = 0; a < letters; a++){
        var charToFind = word[a];
        if (toCheck.indexOf (charToFind) > -1){
            return true
        }
    }
    return false;
}
window.onload = function () {
    var inputEmail = document.getElementById("inputEmail");
    var inputPassword = document.getElementById("inputPassword");
    var loginButton = document.getElementsByClassName("button-login")[0];
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var emailError = document.getElementsByClassName("error-message")[0];
    var passwordError = document.getElementsByClassName("error-message")[1];
    emailError.classList.add("hidden");
    passwordError.classList.add("hidden");
    inputEmail.value = localStorage.getItem('email');
    inputPassword.value = localStorage.getItem('password');
    inputEmail.onblur = function () {
        var mail = inputEmail.value;
        var mailOk = emailExpression.test(mail);
        if (mailOk == false) {
            emailError.classList.remove("hidden");
        }
    }
    inputEmail.onfocus = function () {
        emailError.classList.add("hidden");
    }
    inputPassword.onblur = function () {
        var password = inputPassword.value;
        var passwordOk = validate (password, "lettersAndNumbers", 8) && findNumber(password) && findLetter(password);
        if (passwordOk == false) {
            passwordError.classList.remove("hidden");
        }
    }
    inputPassword.onfocus = function () {
        passwordError.classList.add("hidden");
    }
    loginButton.onclick = function(e){
        e.preventDefault();
        var mail = inputEmail.value;
        var mailOk = emailExpression.test(mail);
        var password = inputPassword.value;
        var passwordOk = validate (password, "lettersAndNumbers", 8) && findNumber(password) && findLetter(password);
        if (passwordOk == true && mailOk == true){
            localStorage.setItem('email', mail);
            localStorage.setItem('password', password);
            /*alert("Email: " + mail + ". Password: " + password)*/
            var queryParams='email=' + mail + '&password=' + password;
            url='https://basp-m2022-api-rest-server.herokuapp.com/login?' + queryParams;
            fetch(url)
                .then(function(data){
                    console.log(data.json());
                });
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