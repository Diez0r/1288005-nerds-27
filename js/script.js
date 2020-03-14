var link = document.querySelector(".button-message-us");
var openForm = document.querySelector(".message-us");
var closeButton = document.querySelector(".modal-close");

var login = openForm.querySelector("[name=field_name]");
var email = openForm.querySelector("[name=field_email]");
var yourText = openForm.querySelector("[name=field_letter]");
var form = openForm.querySelector("form");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false; 
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    openForm.classList.add("message-us-show");

    if (storage) {
        login.value = storage;
        email.focus();
    }
    else {
        setTimeout(function() {
            login.focus();
        }, 1000)
    }

});

closeButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    openForm.classList.remove("message-us-show");
    openForm.classList.remove("message-error");
});

form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value || !yourText.value ) {
        evt.preventDefault();
        openForm.classList.remove("message-error");
        openForm.offsetWidth = openForm.offsetWidth;
        openForm.classList.add("message-error");
    }  else {
        if (isStorageSupport) {
        localStorage.setItem("login", login.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (openForm.classList.contains("message-us-show")) {
            openForm.classList.remove("message-us-show");
            openForm.classList.remove("message-error");
        }
    }
});