window.onload = function () {
    var inputEmail = document.getElementById ("inputEmail");
    var inputPassword = document.getElementById ("inputPassword");
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var emailError = document.getElementsByClassName ("error-message")[0];
    var passwordError = document.getElementsByClassName ("error-message")[1];
    emailError.classList.add ("hidden");
    passwordError.classList.add ("hidden");
    inputEmail.onblur = function () {
        mail=inputEmail.value;
        mailOk = emailExpression.test(mail);
        if (mailOk == false) {
            emailError.classList.remove ("hidden");
        }
    }
    inputEmail.onfocus = function () {
        emailError.classList.add ("hidden");
    }
}