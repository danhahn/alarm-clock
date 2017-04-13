export const formatHour = (hour) => hour > 12 ? hour-12 : hour;
export const formatTime = (part) => part < 10 ? `0${part}` : part;
export const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
export const calcuateSecondsSinceMidnight = ({hours, minutes, seconds, dayPart}) => (parseInt(hours) * 3600) + (parseInt(minutes) * 60) + parseInt(seconds);
