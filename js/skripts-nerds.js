var link = document.querySelector(".button-link");
var popup = document.querySelector(".form");
var close = document.querySelector(".modal-close");
var fullName = popup.querySelector("[name='fullName']");
var mail = popup.querySelector("[name=mail]");
var text = popup.querySelector("[name=text]");
var form = popup.querySelector("form");
var storage = localStorage.getItem("fullName");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("fullName");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("form-show");
  fullName.focus();
  if (storage) {
    fullName.value = storage;
    mail.focus();
  } 
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("form-show");
  popup.classList.remove("form-error");
});

form.addEventListener("submit", function(evt) {
  if (!fullName.value || !mail.value || !text.value) {
    evt.preventDefault();
    popup.classList.add("form-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("fullName", fullName.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("form-show")) {
      evt.preventDefault();
      popup.classList.remove("form-show");
      popup.classList.remove("form-error");
    }
  }
});
