import label from './labels';
import buildDropDown from './utils/buildDropDown';

const displaySetAlarm = function displaySetAlarm() {
  return `
    <div class="set-alarm-container">
      <select name="" id="setHours">${buildDropDown(24)}</select>
      <select name="" id="setMinutes">${buildDropDown(60)}</select>
      <select name="" id="setSeconds">${buildDropDown(60)}</select>
      <select name="" id="setAmPm">
        <option value="${label.AM}">${label.AM}</option>
        <option value="${label.PM}">${label.PM}</option>
      </select>
      <button id="setAlarm">${label.SET_ALARM}</button>
    </div>
  `;
};

export default displaySetAlarm;
