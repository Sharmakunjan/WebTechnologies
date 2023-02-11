const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#contact");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const nameValue = name.value;
  const emailValue = email.value;
  const contactValue = phone.value;
  
  localStorage.setItem("Name", nameValue);
  localStorage.setItem("Email", emailValue);
  localStorage.setItem("Phone", contactValue);
  
  alert("Information stored successfully!");
});