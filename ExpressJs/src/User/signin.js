const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const handleButtonClick = (e) => {
    e.preventDefault();
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    console.log("Email:", emailValue);
    console.log("Password:", passwordValue);
  };
  
  const handleEnterKey = (e) => {
    if (e.code === "Enter") {
      e.preventDefault();
      const emailValue = emailInput.value;
      const passwordValue = passwordInput.value;
      console.log("Email:", emailValue);
      console.log("Password:", passwordValue);
    }
  };
  
  // Attach the click event listener to the submit button
  const submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", handleButtonClick);
  
  // Attach the keyup event listeners to emailInput and passwordInput
  emailInput.addEventListener("keyup", handleEnterKey);
  passwordInput.addEventListener("keyup", handleEnterKey);



