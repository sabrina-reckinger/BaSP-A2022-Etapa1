function validate(word, type, minChar, maxChar=0){
    if (word.length < minChar) {
        return (false)
    }
    if (maxChar > 0) {
        if (word.length > maxChar){
            return (false)
        }
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
function findNumber(word){
    letters = word.length;
    toCheck = "0123456789";
    for (a = 0; a < letters; a++){
        charToFind = word[a];
        if (toCheck.indexOf (charToFind) > -1){
            return (true)
        }
    }
    return (false);
}
function findLetter(word){
    letters = word.length;
    toCheck = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (a = 0; a < letters; a++){
        charToFind = word[a];
        if (toCheck.indexOf (charToFind) > -1){
            return (true)
        }
    }
    return (false);
}
function dateValidate(inputDate){
    if (validate(inputDate.substring(0, 2),'numbers',2,2) == false){
        return false;
    }
    if (Number(inputDate.substring(0, 2))>31){
        return false
    }
    if (Number(inputDate.substring(3, 5))>12){
        return false
    }
    if (inputDate[2]!="/" && inputDate[5]!="/"){
        return false;
    }
    if (validate(inputDate.substring(3, 5),'numbers',2,2) == false){
        return false;
    }
    if (validate(inputDate.substring(6),'numbers',4,4) == false){
        return false;
    }
    return true;
}
window.onload = function () {
    var inputName = document.getElementById ("inputName");
    var inputLastname = document.getElementById ("inputLastname");
    var inputDNI = document.getElementById ("inputDNI");
    var inputBirthday = document.getElementById ("inputBirthday");
    var inputPhone = document.getElementById ("inputPhone");
    var inputDirection = document.getElementById ("inputDirection");
    var inputCity = document.getElementById ("inputCity");
    var inputCP = document.getElementById ("inputCP");
    var inputEmail = document.getElementById ("inputEmail");
    var inputPassword = document.getElementById ("inputPassword");
    var inputRepeatPassword = document.getElementById ("inputRepeatPassword");
    var signUpButton = document.getElementsByClassName ("button-sign-up")[0];
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var nameError = document.getElementsByClassName ("error-message")[0];
    var lastnameError = document.getElementsByClassName ("error-message")[1];
    var DNIError = document.getElementsByClassName ("error-message")[2];
    var birthdayError = document.getElementsByClassName ("error-message")[3];
    var phoneError = document.getElementsByClassName ("error-message")[4];
    var directionError = document.getElementsByClassName ("error-message")[5];
    var cityError = document.getElementsByClassName ("error-message")[6];
    var cpError = document.getElementsByClassName ("error-message")[7];
    var emailError = document.getElementsByClassName ("error-message")[8];
    var passwordError = document.getElementsByClassName ("error-message")[9];
    var repeatPasswordError = document.getElementsByClassName ("error-message")[10];
    nameError.classList.add ("hidden");
    lastnameError.classList.add ("hidden");
    DNIError.classList.add ("hidden");
    birthdayError.classList.add ("hidden");
    phoneError.classList.add ("hidden");
    directionError.classList.add ("hidden");
    cityError.classList.add ("hidden");
    cpError.classList.add ("hidden");
    emailError.classList.add ("hidden");
    passwordError.classList.add ("hidden");
    repeatPasswordError.classList.add ("hidden");
    inputName.onblur = function () {
        names = inputName.value;
        nameOK = validate (names, "letters", 4);
        if (nameOK == false) {
            nameError.classList.remove ("hidden");
            inputName.classList.add ("redBorder");
        }
    }
    inputLastname.onblur = function () {
        lastname = inputLastname.value;
        lastnameOK = validate (lastname, "letters", 4);
        if (lastnameOK == false) {
            lastnameError.classList.remove ("hidden");
            inputLastname.classList.add ("redBorder");
        }
    }
    inputDNI.onblur = function () {
        DNI = inputDNI.value;
        DNIOK = validate (DNI, "numbers", 8);
        if (DNIOK == false) {
            DNIError.classList.remove ("hidden");
            inputDNI.classList.add ("redBorder");
        }
    }
    inputBirthday.onblur = function () {
        birthday = inputBirthday.value;
        birthdayOK = dateValidate (birthday, "numbers", 8);
        if (birthdayOK == false) {
            birthdayError.classList.remove ("hidden");
            inputBirthday.classList.add ("redBorder");
        }
    }
    inputPhone.onblur = function () {
        phone = inputPhone.value;
        phoneOK = validate (phone, "numbers", 10, 10);
        if (phoneOK == false) {
            phoneError.classList.remove ("hidden");
            inputPhone.classList.add ("redBorder");
        }
    }
    inputDirection.onblur = function () {
        direction = inputDirection.value;
        space = direction.indexOf(" ");
        directionOK = validate (direction.substring(0,space), "letters", 5) && validate (direction.substring(space+1), "numbers", 1);
        if (directionOK == false) {
            directionError.classList.remove ("hidden");
            inputDirection.classList.add ("redBorder");
        }
    }
    inputCity.onblur = function () {
        city = inputCity.value;
        cityOK = validate (city, "lettersAndNumbers", 4);
        if (cityOK == false) {
            cityError.classList.remove ("hidden");
            inputCity.classList.add ("redBorder");
        }
    }
    inputCP.onblur = function () {
        CP = inputCP.value;
        CPOk = validate (CP, "numbers", 4, 5);
        if (CPOk == false) {
            cpError.classList.remove ("hidden");
            inputCP.classList.add ("redBorder");
        }
    }
    inputEmail.onblur = function () {
        mail = inputEmail.value;
        mailOk = emailExpression.test(mail);
        if (mailOk == false) {
            emailError.classList.remove ("hidden");
            inputEmail.classList.add ("redBorder");
        }
    }
    inputPassword.onblur = function () {
        password = inputPassword.value;
        passwordOk = validate (password, "lettersAndNumbers", 8) && findNumber(password) && findLetter(password);
        if (passwordOk == false) {
            passwordError.classList.remove ("hidden");
            inputPassword.classList.add ("redBorder");
        }
    }
    inputRepeatPassword.onblur = function () {
        password = inputPassword.value;
        repeatPassword = inputRepeatPassword.value;
        repeatPasswordOk = repeatPassword === password;
        if (repeatPasswordOk == false) {
            repeatPasswordError.classList.remove ("hidden");
            inputRepeatPassword.classList.add ("redBorder");
        }
    }
    inputName.onfocus = function () {
        nameError.classList.add ("hidden");
        inputName.classList.remove ("redBorder");
    }
    inputLastname.onfocus = function () {
        lastnameError.classList.add ("hidden");
        inputLastname.classList.remove ("redBorder");
    }
    inputDNI.onfocus = function () {
        DNIError.classList.add ("hidden");
        inputDNI.classList.remove ("redBorder");
    }
    inputBirthday.onfocus = function () {
        birthdayError.classList.add ("hidden");
        inputBirthday.classList.remove ("redBorder");
    }
    inputPhone.onfocus = function () {
        phoneError.classList.add ("hidden");
        inputPhone.classList.remove ("redBorder");
    }
    inputDirection.onfocus = function () {
        directionError.classList.add ("hidden");
        inputDirection.classList.remove ("redBorder");
    }
    inputCity.onfocus = function () {
        cityError.classList.add ("hidden");
        inputCity.classList.remove ("redBorder");
    }
    inputCP.onfocus = function () {
        cpError.classList.add ("hidden");
        inputCP.classList.remove ("redBorder");
    }
    inputEmail.onfocus = function () {
        emailError.classList.add ("hidden");
        inputEmail.classList.remove ("redBorder");
    }
    inputPassword.onfocus = function () {
        passwordError.classList.add ("hidden");
        inputPassword.classList.remove ("redBorder");
    }
    inputRepeatPassword.onfocus = function () {
        repeatPasswordError.classList.add ("hidden");
        inputRepeatPassword.classList.remove ("redBorder");
    }
    signUpButton.onclick = function(e){
        var badInputs = []
        e.preventDefault();
        names = inputName.value;
        nameOK = validate (names, "letters", 4);
        lastname = inputLastname.value;
        lastnameOK = validate (lastname, "letters", 4);
        DNI = inputDNI.value;
        DNIOK = validate (DNI, "numbers", 8);
        birthday = inputBirthday.value;
        birthdayOK = dateValidate (birthday);
        phone = inputPhone.value;
        phoneOK = validate (phone, "numbers", 10, 10);
        direction = inputDirection.value;
        space = direction.indexOf(" ");
        directionOK = validate (direction.substring(0,space), "letters", 3) && validate (direction.substring(space+1), "numbers", 1);
        city = inputCity.value;
        cityOK = validate (city, "lettersAndNumbers", 4);
        CP = inputCP.value;
        CPOK = validate (CP, "numbers", 4, 5);
        mail = inputEmail.value;
        mailOk = emailExpression.test(mail);
        password = inputPassword.value;
        passwordOk = validate (password, "lettersAndNumbers", 8) && findNumber(password) && findLetter(password);
        repeatPassword = inputRepeatPassword.value;
        repeatPasswordOK = repeatPassword === password;
        if (nameOK == true && lastnameOK== true && DNIOK == true && birthdayOK == true && phoneOK == true && directionOK == true && cityOK == true && CPOK == true && repeatPasswordOK == true && passwordOk == true && mailOk == true){
            alert("Datos correctos." + "\n Los datos ingresados son: " + "\n Nombre completo: " + names + " " + lastname + "\n DNI: " + DNI + "\n Fecha de nacimiento: " + birthday + "\n Telefono: " + phone + "\n Direccion: " + direction + "\n Ciudad: " + city + "\n Codigo Postal: " + CP + "\n eMail: " + mail + "\n Contraseña: " + password)
        } else {
            if (nameOK == false){
                badInputs.push("Nombre = " + names + "\n")
            }
            if (lastnameOK == false){
                badInputs.push("Apellido = " + lastname + "\n")
            }
            if (DNIOK == false){
                badInputs.push("DNI = " + DNI + "\n")
            }
            if (birthdayOK == false){
                badInputs.push("Fecha de nacimiento = " + birthday + "\n")
            }
            if (phoneOK == false){
                badInputs.push("Telefono = " + phone + "\n")
            }
            if (directionOK == false){
                badInputs.push("Direccion = " + direction + "\n")
            }
            if (cityOK == false){
                badInputs.push("Ciudad = " + city + "\n")
            }
            if (CPOK == false){
                badInputs.push("Codigo postal" + CP + "\n")
            }
            if (mailOk == false){
                badInputs.push("eMail = " + mail + "\n")
            }
            if (passwordOk == false){
                badInputs.push("Contraseña = " + password + "\n")
            }
            if (repeatPasswordOK == false){
                badInputs.push("Reingreso de contraseña = " + repeatPassword + "\n")
            }
            alert ("Los datos mal ingresados son los siguientes = \n" + badInputs)
        }
    }

}