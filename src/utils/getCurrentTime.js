import label from '../labels';
import {
  monthNames,
} from './common';

const getCurrentTime = function getCurrentTime() {
  const now = new Date();
  return {
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
    month: monthNames[now.getMonth()],
    day: now.getDate(),
    year: now.getFullYear(),
    dayPart: now.getHours() >= 12 ? label.PM : label.AM,
  };
};

export default getCurrentTime;
