export const dateHasPassed = function (date) {
  const inputDate = new Date(date).setHours(0, 0, 0, 0);

  const currentDate = new Date().setHours(0, 0, 0, 0);

  return inputDate < currentDate;
};
