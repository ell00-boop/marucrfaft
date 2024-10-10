const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

// Disable buttons during the transition
function disableButtonsDuringTransition() {
  registerButton.disabled = true;
  loginButton.disabled = true;
  
  setTimeout(() => {
    registerButton.disabled = false;
    loginButton.disabled = false;
  }, 600); // Duration matches the CSS transition timing
}

// Focus on the first input of the active form
function focusFirstInput(panel) {
  const firstInput = panel.querySelector("input");
  if (firstInput) {
    firstInput.focus();
  }
}

registerButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
  disableButtonsDuringTransition();
  const registerContainer = document.querySelector(".register-container");
  focusFirstInput(registerContainer);
});

loginButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
  disableButtonsDuringTransition();
  const loginContainer = document.querySelector(".login-container");
  focusFirstInput(loginContainer);
});
