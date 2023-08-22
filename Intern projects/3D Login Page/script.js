const signUpBtn = document.querySelector(".signup-btn");
const signInBtn = document.querySelector(".signin-btn");
const formsWrapper = document.querySelector(".forms-wrapper");

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formsWrapper.classList.add("change");
  setTimeout(() => {
    formsWrapper.classList.remove("change");
  }, 1000); // Revert the animation after 1 second
});

signInBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formsWrapper.classList.remove("change");
  setTimeout(() => {
    formsWrapper.classList.add("change");
  }, 1000); // Apply the animation after 1 second
});
