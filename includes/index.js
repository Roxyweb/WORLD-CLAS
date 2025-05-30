let popup = document.getElementById("popup");
let loginBox = document.getElementById("login-box");

function openPopup(){
    popup.classList.add("open-popup");
    loginBox.style.opacity = "0.01";
}

function closePopup(){
    popup.classList.remove("open-popup")
}