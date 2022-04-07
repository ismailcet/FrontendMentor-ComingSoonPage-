const btn=document.querySelector('#Btn');
let value=document.querySelector('.email-input')
let msg=document.querySelector('.error');
let iconError=document.querySelector('.error-icon')
function checkEmail(e){
    if(validateEmail(value.value) ===null){
        msg.classList.add('active');
        value.classList.add('border');
        iconError.classList.add('active');
    }
    setTimeout(deleteVal,2000);
    e.preventDefault();
}
const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
function deleteVal(){
   if(msg.classList.contains('active') ||value.classList.contains('border') ||iconError.classList.contains('active')){
    msg.classList.remove('active');
    value.classList.remove('border');
    iconError.classList.remove('active');
    value.value='';
}
}
btn.addEventListener('click',checkEmail);


