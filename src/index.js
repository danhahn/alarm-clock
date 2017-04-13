import label from './labels';
import {
  formatHour,
  formatTime,
  monthNames,
  calcuateSecondsSinceMidnight
} from './utils/common';
import buildDropDown from './utils/buildDropDown';
import getCurrentTime from './utils/getCurrentTime';
import formatFullTime from './utils/formatFullTime';
import displaySetAlarm from './displaySetAlarm';


const getAlarmTime = function setAlarm() {
  return {
    hours: document.querySelector('#setAmPm').value === label.PM ? parseInt(document.querySelector('#setHours').value) + 12 :  parseInt(document.querySelector('#setHours').value),
    minutes: parseInt(document.querySelector('#setMinutes').value),
    seconds: parseInt(document.querySelector('#setSeconds').value),
    dayPart: document.querySelector('#setAmPm').value,
  };
}

const setAlarmTime = function setAlarmTime() {
  const currentAlarm = getAlarmTime();
  console.log(currentAlarm);
  return {
    displayTime: `${formatHour(currentAlarm.hours)}:${formatTime(currentAlarm.minutes)}:${formatTime(currentAlarm.seconds)}${currentAlarm.dayPart}`,
    displayTime: `${formatFullTime(currentAlarm.hours, currentAlarm.minutes, currentAlarm.seconds, currentAlarm.dayPart)}`,
    timeSinceMidnight: calcuateSecondsSinceMidnight(currentAlarm)
  }
}

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
      <div class="date">${month} ${day}, ${year}</div>
      <div class="time">${formatFullTime(hours, minutes, seconds, dayPart)}</div>
    </div>
  `;
};



const displayAlarmList = function displayAlarmList(alarms) {
  return `<ul class="alarm-list">
    ${alarms.map(alarm => `<li>${alarm.displayTime}</li>`).join('')}
  </ul>`
};

const buildClockWrapper = function buildClockWrapper() {
  const wrapper = `<div class="wrapper">
    <div class="wrapper--main">
      <div class="wrapper--clock"></div>
      <div class="wrapper--button">
        <button id="addAlarm">${label.SET_ALARM}</button>
        <button id="alarmOff" class="hide">${label.TURN_OFF}</button>
        ${displaySetAlarm()}
      </div>
    </div>
    <div class="wrapper--alarms"></div>
  </div>`;
  document.body.innerHTML = wrapper;
};

const init = function init() {
  buildClockWrapper();
  let alarms = [];
  const clockWrapper = document.querySelector('.wrapper--clock');
  const alarmListContainer = document.querySelector('.wrapper--alarms');
  const setAlarmContainer = document.querySelector('.set-alarm-container');
  const toggleSetAlarmButton = document.querySelector('#addAlarm');
  const setAlarmButton = document.querySelector('#setAlarm');
  const setAlarmOff = document.querySelector('#alarmOff');

  // event handler for "set new alarm"
  toggleSetAlarmButton.addEventListener('click', () => {
    toggleSetAlarmButton.classList.toggle('hide');
    setAlarmContainer.classList.toggle('show');
  });
  // event handler for adding new alarm
  setAlarmButton.addEventListener('click', () => {
    alarms = [...alarms, setAlarmTime()]
    alarmListContainer.innerHTML = displayAlarmList(alarms);
    toggleSetAlarmButton.classList.toggle('hide');
    setAlarmContainer.classList.toggle('show');
  });
  // event handler for turning off alarm
  setAlarmOff.addEventListener('click', () => {
    document.body.classList.toggle('alarm-on');
    toggleSetAlarmButton.classList.toggle('hide');
    setAlarmOff.classList.toggle('hide');
  });
  // display clock on page load.
  clockWrapper.innerHTML = displayClock();
  // update clock every second.
  setInterval(() => {
    clockWrapper.innerHTML = displayClock();
    const currnetTimeSinceMindnight = calcuateSecondsSinceMidnight(getCurrentTime());
    alarms.forEach(alarm => {
      if(currnetTimeSinceMindnight === parseInt(alarm.timeSinceMidnight)) {
        document.body.classList.toggle('alarm-on');
        toggleSetAlarmButton.classList.toggle('hide');
        setAlarmOff.classList.toggle('hide');
      }
    })
  }, 1000);
}

init();
