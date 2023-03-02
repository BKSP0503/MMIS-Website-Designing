var NameError = document.getElementById('Name-Error');
var CourseError = document.getElementById('Course-Error');
var GenderError = document.getElementById('Gender-Error');
var NumberError = document.getElementById('Number-Error');
var EmailError = document.getElementById('Email-Error');
var AddressError = document.getElementById('Address-Error');
var PasswordError = document.getElementById('Password-Error');
var RePasswordError = document.getElementById('RePassword-Error');
var SubmitError = document.getElementById('Submit-Error');

function ValidateName() {
    var name = document.getElementById('contact-name').value;
    if (name.length == 0) {
        NameError.innerHTML = 'Name is requird';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        NameError.innerHTML = 'Please Enter a proper Name';
        return false;
    }
    NameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateRadio() {
    var gender = document.getElementsByName('gender');
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            GenderError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            return true;
        }
    }
    GenderError.innerHTML = 'Please Select An Option';
    return false;
}

function ValidateCourse() {
    var course = document.getElementById('course');
    if (course.selectedIndex !== -1) {
        CourseError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true; // at least one option is selected
    }
    CourseError.innerHTML = 'Please Select Atleast 1 Course'
}

function ValidateNumber() {
    var number = document.getElementById('contact-number').value;
    if (number.length == 0) {
        NumberError.innerHTML = 'Phone Number is required';
        return false;
    }
    if (number.length !== 10) {
        NumberError.innerHTML = 'Please Enter a Proper Number';
        return false;
    }
    if (!number.match(/^[0-9]{10}$/)) {
        NumberError.innerHTML = 'Enter Only Numbers';
        return false;
    }
    NumberError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function ValidateEmail() {
    var email = document.getElementById('contact-email').value;
    if (email.length == 0) {
        EmailError.innerHTML = 'Email Id is required';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        EmailError.innerHTML = 'Pleae Enter a Valid Email Id';
        return false;
    }
    EmailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function ValidateAddress() {
    var address = document.getElementById('contact-address').value;
    // var requird = 0;
    // var left = requird - message.length;
    if (address.length < 0) {
        AddressError.innerHTML = 'Please Enter A Valid Address';
        return false
    }
    AddressError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function ValidatePassword() {
    var password = document.getElementById('contact-password').value;
    if (password.length == 0) {
        PasswordError.innerHTML = 'Please Enter A Password';
        return false;
    }
    if (password.length < 5) {
        PasswordError.innerHTML = 'The Password Created Is Too Short';
        return false;
    }
    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/)) {
        PasswordError.innerHTML = 'Password Must Have Atleast - 1 Uppercase Letter, 1 Lowercase Letter, 1 Number, 1 Special Charecter';
        return false;
    }
    // if (!password.test(/[-z]/)) {
    //     PasswordError.innerHTML = 'Create A Password With Atleast 1 Uppercase Letter';
    //     return false;
    // }
    // if (!password.test(/[a-z]/)) {
    //     PasswordError.innerHTML = 'Create A Password With Atleast 1 Lowercase Letter';
    //     return false;
    // }
    // if (!password.test(/\d/)) {
    //     PasswordError.innerHTML = 'Create A Password With Atleast 1 Number';
    //     return false;
    // }
    // if (!password.test(/[\W_]/)) {
    //     PasswordError.innerHTML = 'Create A Password With Atleast 1 Special Charecter';
    //     return false;
    // }
    PasswordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function ValidateRePassword() {
    var password = document.getElementById('contact-password').value;
    var repassword = document.getElementById('contact-repassword').value;
    if (repassword.length == 0) {
        RePasswordError.innerHTML = 'Please Re-Enter The Password'
    }
    if (password !== repassword) {
        RePasswordError.innerHTML = 'Passwords Do Not Match';
        return false;
    }
    RePasswordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function ValidateForm() {
    if (!ValidateName() || !ValidateCourse() || !validateRadio() || !ValidateNumber() || !ValidateEmail() || !ValidateAddress() || !ValidatePassword() || !ValidateRePassword()) {
        SubmitError.style.display = 'block';
        SubmitError.innerHTML = 'Please Provide Input In The Madatory Fileds To Submit';
        setTimeout(function () {
            SubmitError.style.display = 'none';
        }, 3000);
        return false;
    }
}