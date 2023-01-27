function rent() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email?");

  alert("Thank you " + name + " ! We're preparing your order!");
}

function toggleTheme() {
  if (theme === "light") {
    theme = "dark";
    document.querySelector("body").classList.add("dark");
  } else {
    theme = "light";
    document.querySelector("body").classList.remove("dark");
  }
}

let button = document.querySelector("#rent-button");
button.addEventListener("click", rent);

let theme = "dark";
let themeButton = document.querySelector("#change-theme-button");
themeButton.addEventListener("click", toggleTheme);
