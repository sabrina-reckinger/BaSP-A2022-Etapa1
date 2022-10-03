function validate(word, type, minChar, maxChar=0){
    if (word.length < minChar){
        return false
    }
    if (maxChar > 0) {
        if (word.length > maxChar){
            return false
        }
    }
    var toCheck = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 "
    if (type == "letters"){
        toCheck = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ "
    }
    if (type == "numbers"){
        toCheck = "0123456789"
    }
    if (type == "lettersAndNumbers"){
        toCheck = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 "
    }
    var letters = word.length;
    for (a = 0; a < letters; a++){
        var charToFind = word[a];
        if (toCheck.indexOf(charToFind) == -1){
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
        if (toCheck.indexOf(charToFind) > -1){
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
        if (toCheck.indexOf(charToFind) > -1){
            return true
        }
    }
    return false;
}
function dateValidate(inputDate){
    if (validate(inputDate.substring(0, 4),'numbers',4,4) == false){
        return false;
    }
    if (Number(inputDate.substring(8, 10))>31){
        return false
    }
    if (Number(inputDate.substring(5, 7))>12){
        return false
    }
    if (inputDate[4]!="-" && inputDate[7]!="-"){
        return false;
    }
    if (validate(inputDate.substring(5, 7),'numbers',2,2) == false){
        return false;
    }
    if (validate(inputDate.substring(8, 10),'numbers',2,2) == false){
        return false;
    }
    return true;
}
window.onload = function () {
    var inputName = document.getElementById("inputName");
    var inputLastname = document.getElementById("inputLastname");
    var inputDNI = document.getElementById("inputDNI");
    var inputBirthday = document.getElementById("inputBirthday");
    var inputPhone = document.getElementById("inputPhone");
    var inputDirection = document.getElementById("inputDirection");
    var inputCity = document.getElementById("inputCity");
    var inputCP = document.getElementById("inputCP");
    var inputEmail = document.getElementById("inputEmail");
    var inputPassword = document.getElementById("inputPassword");
    var inputRepeatPassword = document.getElementById("inputRepeatPassword");
    var signUpButton = document.getElementsByClassName("button-sign-up")[0];
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var nameError = document.getElementsByClassName("error-message")[0];
    var lastnameError = document.getElementsByClassName("error-message")[1];
    var DNIError = document.getElementsByClassName("error-message")[2];
    var birthdayError = document.getElementsByClassName("error-message")[3];
    var phoneError = document.getElementsByClassName("error-message")[4];
    var directionError = document.getElementsByClassName("error-message")[5];
    var cityError = document.getElementsByClassName("error-message")[6];
    var cpError = document.getElementsByClassName("error-message")[7];
    var emailError = document.getElementsByClassName("error-message")[8];
    var passwordError = document.getElementsByClassName("error-message")[9];
    var repeatPasswordError = document.getElementsByClassName("error-message")[10];
    nameError.classList.add("hidden");
    lastnameError.classList.add("hidden");
    DNIError.classList.add("hidden");
    birthdayError.classList.add("hidden");
    phoneError.classList.add("hidden");
    directionError.classList.add("hidden");
    cityError.classList.add("hidden");
    cpError.classList.add("hidden");
    emailError.classList.add("hidden");
    passwordError.classList.add("hidden");
    repeatPasswordError.classList.add("hidden");
    inputName.value = localStorage.getItem('name');
    inputLastname.value = localStorage.getItem('lastname');
    inputDNI.value = localStorage.getItem('DNI');
    inputBirthday.value = localStorage.getItem('birthday');
    inputPhone.value = localStorage.getItem('phone');
    inputDirection.value = localStorage.getItem('direction');
    inputCity.value = localStorage.getItem('city');
    inputCP.value = localStorage.getItem('CP');
    inputEmail.value = localStorage.getItem('email');
    inputPassword.value = localStorage.getItem('password');
    inputRepeatPassword.value = localStorage.getItem('repeatPassword');
    inputName.onblur = function() {
        var names = inputName.value;
        var nameOK = validate(names, "letters", 4);
        if (nameOK == false) {
            nameError.classList.remove("hidden");
            inputName.classList.add("redBorder");
        }
    }
    inputLastname.onblur = function() {
        var lastname = inputLastname.value;
        var lastnameOK = validate(lastname, "letters", 4);
        if (lastnameOK == false) {
            lastnameError.classList.remove("hidden");
            inputLastname.classList.add("redBorder");
        }
    }
    inputDNI.onblur = function() {
        var DNI = inputDNI.value;
        var DNIOK = validate(DNI, "numbers", 8);
        if (DNIOK == false) {
            DNIError.classList.remove("hidden");
            inputDNI.classList.add("redBorder");
        }
    }
    inputBirthday.onblur = function() {
        var birthday = inputBirthday.value;
        var birthdayOK = dateValidate(birthday, "numbers", 8);
        if (birthdayOK == false) {
            birthdayError.classList.remove("hidden");
            inputBirthday.classList.add("redBorder");
        }
    }
    inputPhone.onblur = function() {
        var phone = inputPhone.value;
        var phoneOK = validate(phone, "numbers", 10, 10);
        if (phoneOK == false) {
            phoneError.classList.remove("hidden");
            inputPhone.classList.add("redBorder");
        }
    }
    inputDirection.onblur = function() {
        var direction = inputDirection.value;
        var space = direction.indexOf(" ");
        directionOK = validate(direction.substring(0,space), "letters", 5) && validate (direction.substring(space+1), "numbers", 1);
        if (directionOK == false) {
            directionError.classList.remove("hidden");
            inputDirection.classList.add("redBorder");
        }
    }
    inputCity.onblur = function() {
        var city = inputCity.value;
        var cityOK = validate(city, "lettersAndNumbers", 4);
        if (cityOK == false) {
            cityError.classList.remove("hidden");
            inputCity.classList.add("redBorder");
        }
    }
    inputCP.onblur = function() {
        var CP = inputCP.value;
        var CPOk = validate(CP, "numbers", 4, 5);
        if (CPOk == false) {
            cpError.classList.remove("hidden");
            inputCP.classList.add("redBorder");
        }
    }
    inputEmail.onblur = function() {
        var mail = inputEmail.value;
        var mailOk = emailExpression.test(mail);
        if (mailOk == false) {
            emailError.classList.remove("hidden");
            inputEmail.classList.add("redBorder");
        }
    }
    inputPassword.onblur = function() {
        var password = inputPassword.value;
        var passwordOk = validate(password, "lettersAndNumbers", 8) && findNumber(password) && findLetter(password);
        if (passwordOk == false) {
            passwordError.classList.remove("hidden");
            inputPassword.classList.add("redBorder");
        }
    }
    inputRepeatPassword.onblur = function() {
        var password = inputPassword.value;
        var repeatPassword = inputRepeatPassword.value;
        var repeatPasswordOk = repeatPassword === password;
        if (repeatPasswordOk == false) {
            repeatPasswordError.classList.remove("hidden");
            inputRepeatPassword.classList.add("redBorder");
        }
    }
    inputName.onfocus = function() {
        nameError.classList.add("hidden");
        inputName.classList.remove("redBorder");
    }
    inputLastname.onfocus = function() {
        lastnameError.classList.add("hidden");
        inputLastname.classList.remove("redBorder");
    }
    inputDNI.onfocus = function() {
        DNIError.classList.add("hidden");
        inputDNI.classList.remove("redBorder");
    }
    inputBirthday.onfocus = function() {
        birthdayError.classList.add("hidden");
        inputBirthday.classList.remove("redBorder");
    }
    inputPhone.onfocus = function() {
        phoneError.classList.add("hidden");
        inputPhone.classList.remove("redBorder");
    }
    inputDirection.onfocus = function() {
        directionError.classList.add("hidden");
        inputDirection.classList.remove("redBorder");
    }
    inputCity.onfocus = function() {
        cityError.classList.add("hidden");
        inputCity.classList.remove("redBorder");
    }
    inputCP.onfocus = function() {
        cpError.classList.add("hidden");
        inputCP.classList.remove("redBorder");
    }
    inputEmail.onfocus = function() {
        emailError.classList.add("hidden");
        inputEmail.classList.remove("redBorder");
    }
    inputPassword.onfocus = function() {
        passwordError.classList.add("hidden");
        inputPassword.classList.remove("redBorder");
    }
    inputRepeatPassword.onfocus = function() {
        repeatPasswordError.classList.add("hidden");
        inputRepeatPassword.classList.remove("redBorder");
    }
    signUpButton.onclick = function(e){
        var badInputs = []
        e.preventDefault();
        var names = inputName.value;
        var nameOK = validate(names, "letters", 4);
        var lastname = inputLastname.value;
        var lastnameOK = validate(lastname, "letters", 4);
        var DNI = inputDNI.value;
        var DNIOK = validate(DNI, "numbers", 8);
        var birthday = inputBirthday.value;
        var birthdayOK = dateValidate(birthday);
        var phone = inputPhone.value;
        var phoneOK = validate(phone, "numbers", 10, 10);
        var direction = inputDirection.value;
        var space = direction.indexOf(" ");
        var directionOK = validate(direction.substring(0,space), "letters", 3) && validate(direction.substring(space+1), "numbers", 1);
        var city = inputCity.value;
        var cityOK = validate(city, "lettersAndNumbers", 4);
        var CP = inputCP.value;
        var CPOK = validate(CP, "numbers", 4, 5);
        var mail = inputEmail.value;
        var mailOk = emailExpression.test(mail);
        var password = inputPassword.value;
        var passwordOk = validate(password, "lettersAndNumbers", 8) && findNumber(password) && findLetter(password);
        var repeatPassword = inputRepeatPassword.value;
        var repeatPasswordOK = repeatPassword === password;
        if (nameOK && lastnameOK && DNIOK && birthdayOK && phoneOK && directionOK && cityOK && CPOK && repeatPasswordOK && passwordOk && mailOk){
            localStorage.setItem('name', names);
            localStorage.setItem('lastname', lastname);
            localStorage.setItem('DNI', DNI);
            localStorage.setItem('birthday', birthday);
            birthdayLat=birthday.substring(8, 10) + "/" + birthday.substring(5, 7) + "/" + birthday.substring(0,4);
            localStorage.setItem('phone', phone);
            localStorage.setItem('direction', direction);
            localStorage.setItem('city', city);
            localStorage.setItem('CP', CP);
            localStorage.setItem('mail', mail);
            localStorage.setItem('password', password);
            localStorage.setItem('repeatPassword', repeatPassword);
            var queryParams='name=' + names + '&lastName=' + lastname + '&dni=' + DNI + '&dob=' + birthdayLat + '&phone=' + phone + '&address=' + direction + '&city=' + city + '&zip=' + CP + '&email=' + mail + '&password=' + password;
            url='https://basp-m2022-api-rest-server.herokuapp.com/signup?' + queryParams;
            var call = fetch(url)
            call.then(function(response){
                return response.json()
            }).then(function(data){
                if (data.success) alert('La solicitud se realizo correctamente. Y la respuesta fue: ' + data.msg)
                else alert('Hubo un error. Y el error fue: ' + data.msg)
            });
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
            alert("Los datos mal ingresados son los siguientes = \n" + badInputs)
        }
    }
}