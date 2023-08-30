function emailValidation() {
    const form = document.getElementById('form');
    const emailField = form.querySelector('input[name="email"]');
    const emailConfirmField = form.querySelector('input[name="email_confirm"]');
    const errorMessage = document.querySelector('.error-message');
  
    emailConfirmField.addEventListener('input', () => {
      if (emailField.value !== emailConfirmField.value) {
        emailConfirmField.classList.add("alert_bg");
        errorMessage.textContent = "el email no coincide";
        errorMessage.style.color = "red";
      } else {
        emailConfirmField.classList.remove("alert_bg");
        errorMessage.textContent = "";
      }
    });
    
    errorMessage.textContent = "";
  }
  
  window.onload = function() {
    emailValidation();
  };
  