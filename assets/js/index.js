
const $form = document.querySelector("#form");
const $errorValidate = document.querySelector("#error-validate");

class Validation {
  
  constructor(data){
    this.email = data.get("email");
    this.name = data.get("name");
    this.lastName = data.get("lastname");
    this.password = data.get("password");
    this.passwordConfirm = data.get("password-confirm");
  }
  
  validate(){
    
  }
  
  showErrorMessage(input, text){
    
  }
}

const validateForm = (e)=>{
  e.preventDefault();
  
  const formData = new FormData($form);
  const validation = new Validation(formData);
  validation.validate();
}

$form.addEventListener("submit", validateForm);

