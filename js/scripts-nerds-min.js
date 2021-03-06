var link = document.querySelector(".button-link"),
  popup = document.querySelector(".form"),
  close = document.querySelector(".modal-close"),
  fullName = popup.querySelector("[name='fullName']"),
  mail = popup.querySelector("[name=mail]"),
  text = popup.querySelector("[name=text]"),
  form = popup.querySelector("form"),
  storage = localStorage.getItem("fullName"),
  isStorageSupport = !0;
storage = "";
try {
  storage = localStorage.getItem("fullName");
} catch (e) {
  isStorageSupport = !1;
}
link.addEventListener("click", function(e) {
  e.preventDefault(),
    popup.classList.add("form-show"),
    fullName.focus(),
    storage && ((fullName.value = storage), mail.focus());
}),
  close.addEventListener("click", function(e) {
    e.preventDefault(),
      popup.classList.remove("form-show"),
      popup.classList.remove("form-error");
  }),
  form.addEventListener("submit", function(e) {
    fullName.value && mail.value && text.value
      ? isStorageSupport && localStorage.setItem("fullName", fullName.value)
      : (e.preventDefault(), popup.classList.add("form-error"));
  }),
  window.addEventListener("keydown", function(e) {
    27 === e.keyCode &&
      popup.classList.contains("form-show") &&
      (e.preventDefault(),
      popup.classList.remove("form-show"),
      popup.classList.remove("form-error"));
  });
