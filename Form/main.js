var NameError = document.getElementById('Name-Error');
var NumberError = document.getElementById('Number-Error');
var EmailError = document.getElementById('Email-Error');
var AddressError = document.getElementById('Address-Error');
var SubmitError = document.getElementById('Submit-Error');

function ValidateName() {
    var name = document.getElementById('contact-name').value;
    if (name.length == 0) {
        NameError.innerHTML = 'Name is requird';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        NameError.innerHTML = 'Write a proper Name';
        return false;
    }
    NameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function ValidateNumber() {
    var number = document.getElementById('contact-number').value;
    if (number.length == 0) {
        NumberError.innerHTML = 'Phone Number is required';
        return false;
    }
    if (number.length !== 10) {
        NumberError.innerHTML = 'Write a proper Number';
        return false;
    }
    if (!number.match(/^[0-9]{10}$/)) {
        NumberError.innerHTML = 'Write only Numbers';
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
        EmailError.innerHTML = 'Email Id is invalid';
        return false;
    }
    EmailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function ValidateAddress() {
    var message = document.getElementById('contact-address').value;
    var requird = 50;
    var left = requird - message.length;
    if (left < 0) {
        AddressError.innerHTML = left + ' more charecters required';
        return false
    }
    AddressError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function ValidateForm() {
    if (!ValidateName() || !ValidateNumber() || !ValidateEmail() || !ValidateMessage()) {
        SubmitError.style.display = 'block';
        SubmitError.innerHTML = 'Please provide proper input in the the madatory fileds to submit ';
        setTimeout(function () {
            SubmitError.style.display = 'none';
        }, 3000);
        return false;
    }
}