import { formValidation } from "../validate-form/formValidation";
import { setDateToToday } from "../validate-form/date-time-helper-functions/setDateToToday";

export const showForm = function () {
  const reservationForm = document.getElementById("reservation-form-wrapper");
  reservationForm.classList.add("show");

  const closeFormBtn = document.getElementById("close-form-button");

  closeFormBtn.addEventListener("click", closeForm);

  function closeForm() {
    reservationForm.classList.remove("show");
    closeFormBtn.removeEventListener("click", closeForm);
  }

  formValidation();
  setDateToToday();
};
