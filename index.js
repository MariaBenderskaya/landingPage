let inputPhone = document.getElementById("popupWindow__call");
let buttonPhone = document.getElementById("title-buttom-call");
let inputUserPhone = document.getElementById("userPhone");
let buttonClose = document.querySelector(".popupWindow__close");

buttonPhone.addEventListener("click", function () {
  inputPhone.classList.remove("hiden");
  inputPhone.classList.add("visible");
});

buttonClose.addEventListener("click", function () {
  inputPhone.classList.remove("visible");
  inputPhone.classList.add("hiden");
});

inputUserPhone.onblur = function () {
  let phoneValidate =
    /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/gim.test(
      inputUserPhone.value
    );
  if (phoneValidate === false) {
    inputUserPhone.classList.add("invalid");
    document
      .getElementById("phone__buttons-submit")
      .setAttribute("disabled", true);
  }
};

inputUserPhone.onfocus = function () {
  if (inputUserPhone.classList.contains("invalid")) {
    inputUserPhone.classList.remove("invalid");
    document
      .getElementById("phone__buttons-submit")
      .removeAttribute("disabled");
  }
};
