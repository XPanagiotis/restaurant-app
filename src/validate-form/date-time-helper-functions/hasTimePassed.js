import { timeToMinutes } from "./timeToMinutes";
export const hasTimePassed = function (time) {
  let timeInMin = timeToMinutes(time);
  const currentTime = new Date();
  const currentMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();

  return currentMinutes > timeInMin;
};
