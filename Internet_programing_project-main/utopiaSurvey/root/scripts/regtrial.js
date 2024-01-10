const form = document.getElementById('form');
const firstname = document.getElementById('fname');
const lastname = document.getElementById('lname');
const profilephoto= document.getElementById('prof');
console.log(profilephoto.value.split("fakepath"));
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
// const pp = document.getElementById('pphoto');

const email = document.getElementById('email');
const phonenumber = document.getElementById('phonenum');

form.addEventListener('submit', e => {
    e.preventDefault();
     console.log(profilephoto.value);
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {

    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const phonenumberValue = phonenumber.value.trim();
    if(firstnameValue === '') {
        setError(firstname, 'Username is required');
    } else {
        setSuccess(firstname);
    }
    if(lastnameValue === '') {
        setError(lastname, 'Username is required');
    } else {
        setSuccess(lastname);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);

    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {

        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
        // const correctPassword=password2;
    }

    if(phonenumberValue === '') {
        setError(phonenumber, 'Password is required');
    } else if (phonenumberValue.length < 10 ) {
        setError(phonenumber, 'phonenum must be  must be at least 10 digitsf.')
    } else {
        setSuccess(phonenumber);
    }


if (isValidEmail(emailValue) && firstnameValue !== '' && lastnameValue !== '' && emailValue !== '' &&
        passwordValue !== '' && password2Value !== '' && password2Value === passwordValue && phonenumberValue.length > 8 &&
        phonenumberValue !== ''&& phonenumberValue.length >10){
          const data = new FormData(event.target);
          const value =Object.fromEntries (data.entries());
                value.pp=profilephoto.value;
          const store =  JSON.stringify(value);


        localStorage.setItem(emailValue,store);
        location.href="../pages/page 3.html";
}



};
