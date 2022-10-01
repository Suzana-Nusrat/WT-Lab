var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('no.-error');
var emailError = document.getElementById('email-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value ;

    if(name.length == 0){
        nameError.innerHTML = 'Name Required' ;
        return false ;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write Full Name' ;
        return false ;
    }
    nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>' ;
    return true;
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value ;

    if(phone.length == 0){
        phoneError.innerHTML = 'Contact Required' ;
        return false ;
    }
    if(phone.length !== 11){
        phoneError.innerHTML = 'Must be of 11 digits' ;
        return false ;
    }
    if(!phone.match(/^[0-9]{11}$/)){
        phoneError.innerHTML = 'Only Digits Please' ;
        return false ;
    }
    phoneError.innerHTML = '<i class="fa-regular fa-circle-check"></i>' ;
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value ;

    if(email.length == 0){
        emailError.innerHTML = 'Email Required' ;
        return false ;
    }
    if(!email.match(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})\.([a-z]{2,8})?$/)){
        emailError.innerHTML = 'Invalid Email' ;
        return false ;
    }
    emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>' ;
    return true;
}