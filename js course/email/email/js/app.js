var sendBTN = document.getElementById('sendBtn'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message');
    resetBTN = document.getElementById('resetBtn');
    sendEmailForm = document.getElementById('email-form');

//eventlisteners
eventlisteners();
function eventlisteners(){
document.addEventListener('DOMContentLoaded', appInit);
// send email

sendEmailForm.addEventListener('submit', sendEmail2);;

        //validate

    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);

    //reset
    resetBTN.addEventListener('click', resetForm);

}






function appInit(){
    sendBTN.disabled = true;
}

function validateField(){
        let error = document.querySelectorAll('.error');
        //validate length
        
        validateLength(this);
       if(this.type === 'email'){
           validateEmail(this);
       }

       if(email.value != '' && subject.value != '' && message.value != ''){
           if(error.length == 0){
        sendBTN.disabled = false; 
       }}
}


function validateLength(field){
    if (field.value.length > 0){
        field.style.borderBottomColor = 'green'
        field.classList.remove('error');

    }
    else {
        field.style.borderBottomColor = 'red'
        field.classList.add('error');
    }
}


function validateEmail(field){
        let emailText = field.value;
        
        if (emailText.indexOf('@') != -1){
            field.style.borderBottomColor = 'green'
            field.classList.remove('error');
    
        }
        else {
            field.style.borderBottomColor = 'red'
            field.classList.add('error');
        }
}


function resetForm(){
        sendEmailForm.reset()

}


function sendEmail2(e){

    e.preventDefault();
    let spinner = document.getElementById('spinner');
    let sendimg = document.createElement('img');
    sendimg.src = 'img/mail.gif';
    sendimg.style.display = 'block';
    
    // const send = document.querySelectorAll('#send');

    spinner.style.display = 'block';

    setTimeout(() => {
        spinner.style.display = 'none';
        document.querySelector('#loaders').appendChild(sendimg);

        setTimeout(() => {
            resetForm();
            sendimg.remove();
        }, 4000);
       
    }, 3000);
}


