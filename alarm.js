const label = {
  AM: 'am',
  PM: 'pm',
}

const formatHour = (hour) => hour > 12 ? hour-12 : hour;
const formatTime = (part) => part < 10 ? `0${part}` : part;
const monthNames = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];

const getCurrentTime = function getCurrentTime() {
  const now = new Date();
  return {
    hours: formatHour(now.getHours()),
    minutes: formatTime(now.getMinutes()),
    seconds: formatTime(now.getSeconds()),
    month: monthNames[now.getMonth()],
    day: now.getDate(),
    year: now.getFullYear(),
    dayPart: now.getHours() > 12 ? label.PM : label.AM,
  };
};

const displayClock = function displayClock() {
  const {
    hours,
    minutes,
    seconds,
    month,
    day,
    year,
    dayPart,
  } = getCurrentTime();
  return `
    <div class="clock">
      <div class="date">${month} ${day} ${year}</div>
      <div class="time">${hours} : ${minutes} : ${seconds} ${dayPart}</div>
    </div>
  `;
};

const buildClockWrapper = function buildClockWrapper() {
  const wrapper = `<div class="wrapper">
    <div class="wapper--clock"></div>
    <div class="wrapper--button">
      <button>Add Alarm</button>
    </div>
  </div>`
};
