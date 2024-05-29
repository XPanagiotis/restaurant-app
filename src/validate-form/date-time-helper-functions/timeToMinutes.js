export const timeToMinutes = function (time) {
  let [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};
