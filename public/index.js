const form = document.querySelector("form");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const address = document.getElementById("address");
const phoneNumber = document.getElementById("telephone");
const passwordI = document.getElementById("password");
const passwordConf = document.getElementById("passwordConfirm");

//submit event listener
form.addEventListener('submit',(e)=>{
 e.preventDefault();
 checkInputs();
})

//error function
function setErrorFor(input,message){
 const formControl=input.parentElement;
 const small=formControl.querySelector('small');
 small.className='form-control error';
 small.textContent=message;
}

//success function
function setSuccessFor(input){
 formControl=input.parentElement;
 formControl.className='form-control success'
}

//check inputs function
function checkInputs(){
 const firstNameValue=firstName.value.trim();
 const lastNameValue=lastName.value.trim();
 const emailValue=email.value.trim();
 const addressValue=address.value.trim();
 const phoneValue=phoneNumber.value.trim();
 const passwordValue=passwordI.value.trim();
 const confValue=passwordConf.value.trim();

 //first name
 if(firstNameValue=== '') {
  setErrorFor(firstName, 'firstname cannot be blank');
 } else if(!isChar20(firstNameValue)){
  setErrorFor(firstName,"firstname shouldn't contain numbers")
 }
 else {
  setSuccessFor(firstName);
 }

 //last name
 if(lastNameValue=== '') {
  setErrorFor(lastName, 'lastname cannot be blank');
 } else if(!isChar20(lastNameValue)){
  setErrorFor(lastName,"lastname shouldn't contain numbers")
 }
 else {
  setSuccessFor(lastName);
 }
 
 //email
 if(emailValue === '') {
  setErrorFor(email, 'Email cannot be blank');
 } else if (!isEmail(emailValue)) {
  setErrorFor(email, 'Not a valid email');
 } else {
  setSuccessFor(email);
 }

 //address
 if(addressValue=== '') {
  setErrorFor(address, 'address cannot be blank');
 } else if(!isChar20(addressValue)){
  setErrorFor(address,"address shouldn't contain numbers")
 }
 else {
  setSuccessFor(address);
 }

 //phone number
 if(phoneValue === '') {
  setErrorFor(phoneNumber, 'phone cannot be blank');
 } else if (!isTelephone(phoneValue)) {
  setErrorFor(phoneNumber, 'Not a valid phone number');
 } else {
  setSuccessFor(phoneNumber);
 }

 //password
 if(passwordValue === '') {
  setErrorFor(passwordI, 'password cannot be blank');
 } else if (!isAlphaNumeric(passwordValue)) {
  setErrorFor(passwordI, 'password should contain only letters and numbers');
 } else {
  setSuccessFor(passwordI);
 }

 //confirm password
 if(confValue === '') {
  setErrorFor(passwordConf, 'confirm password cannot be blank');
 } else if(confValue !== passwordValue) {
  setErrorFor(passwordConf, 'Passwords do not match');
 } else{
  setSuccessFor(passwordConf);
 }

}


//match email
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

//match telephone
function isTelephone(phone){
 return /^\d{10}$/.test(phone)
}

//20 characters username
function isChar20(user){
 return /^.{1,20}[a-zA-Z]+$/.test(user);
}

//alpha numeric
function isAlphaNumeric(passw){
 return /^[0-9a-zA-Z]+$/.test(passw);
}
