import { hasTimePassed } from "./date-time-helper-functions/hasTimePassed";
import { isToday } from "./date-time-helper-functions/isToday";
import { dateHasPassed } from "./date-time-helper-functions/dateHasPassed";

export const formValidation = function () {
  //cashe DOM
  const reservationForm = document.getElementById("reservation-form-wrapper");
  const form = document.getElementById("reservation-form");

  const fullName = document.getElementById("full-name");
  const date = document.getElementById("date");
  const time = document.getElementById("time");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone-number");

  const inputs = [fullName, date, time, email, phone];
  const validateFunctions = [
    checkFullName,
    checkDate,
    checkTime,
    checkEmail,
    checkPhone,
  ];

  //add event listeners to inputs
  for (let i = 0; i <= 4; i++) {
    inputs[i].addEventListener("input", () => {
      inputs[i].dataset.isvalid = "false";
      validateFunctions[i](inputs[i]);
    });
  }

  //add sumbit event listener to the form
  form.addEventListener("submit", validateForm);

  function validateInput(input) {
    input.dataset.isvalid = "false";
    validateFunctions[inputs.indexOf(input)](input);

    if (input.dataset.isvalid !== "true") {
      return true;
    }
    return false;
  }

  function validateForm(event) {
    event.preventDefault();
    let isValid = true;

    inputs.forEach((input) => {
      if (validateInput(input)) {
        isValid = false;
      }
    });

    if (isValid) {
      console.log("SECCESS!!!");
      reservationForm.classList.remove("show");
      form.removeEventListener("submit", validateForm);
    } else {
      console.log("FAIL!!!");
    }
  }

  function checkFullName(name) {
    const errorMessage = document.querySelector("label[for='name'] > span");
    if (name.value.length === 0) {
      errorMessage.textContent = "The name field can not be empty";
    } else if (!/^[A-Za-z\s]+$/.test(name.value)) {
      errorMessage.textContent = "The name must contain only letters.";
    } else if (name.validity.tooShort) {
      errorMessage.textContent = "The name is too short.";
    } else if (!/^[A-Za-z]{3,} [A-Za-z]{3,}/.test(name.value)) {
      errorMessage.textContent = "Fill your First name and your Surname";
    } else if (name.validity.tooLong) {
      errorMessage.textContent = "The name can not be more than 35 letters.";
    } else {
      errorMessage.textContent = "";
      name.dataset.isvalid = "true";
    }
  }

  function checkDate(date) {
    const errorMessage = document.querySelector("label[for='date'] > span");

    if (dateHasPassed(date.value)) {
      errorMessage.textContent = "This date has passed.";
      date.classList.add("invalid");
    } else {
      errorMessage.textContent = "";
      date.classList.remove("invalid");
      date.dataset.isvalid = "true";
    }
  }

  function checkTime(time) {
    const errorMessage = document.querySelector("label[for='time'] > span");

    const isDateToday = isToday(date.value);
    if (time.value === "") {
      errorMessage.textContent = "Select the reservation time.";
    } else if (hasTimePassed(time.value) && isDateToday) {
      errorMessage.textContent = "This time has passed.";
      time.classList.add("invalid");
    } else {
      errorMessage.textContent = "";
      time.classList.remove("invalid");
      time.dataset.isvalid = "true";
    }
  }

  function checkEmail(email) {
    const errorMessage = document.querySelector("label[for='email'] > span");
    const parts = email.value.split("@");

    if (email.value.length === 0) {
      errorMessage.textContent = "The email field can not be empty.";
    } else if (!/.*@.*/.test(email.value)) {
      errorMessage.textContent = "Email must contain @ symbol.";
    } else if (!(parts.length === 2 && parts[1].length > 0)) {
      errorMessage.textContent = "Fill the email after @.";
    } else {
      errorMessage.textContent = "";
      email.dataset.isvalid = "true";
    }
  }

  function checkPhone(phone) {
    const errorMessage = document.querySelector(
      "label[for='phone-number'] > span"
    );

    if (phone.value.length === 0) {
      errorMessage.textContent = "The phone can not be empty.";
    } else if (!/^\d+$/.test(phone.value)) {
      errorMessage.textContent = "The phone must contain only digits.";
    } else if (phone.validity.tooShort) {
      errorMessage.textContent = "The phone must have 10 digtis.";
    } else {
      errorMessage.textContent = "";
      phone.dataset.isvalid = "true";
    }
  }
};
