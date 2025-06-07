function scrollToRegister() {
  document.getElementById("register").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("regForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("thanksMessage").innerText = "Thanks for registering! We'll reach out soon.";
  this.reset();
});