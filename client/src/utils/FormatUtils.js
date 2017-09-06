import { CLIENT_ID } from '../constants/Config';

export function addCommas(i) {
  if (i === null || i === undefined) {
    return '';
  }

  return i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function formatSongTitle(str) {
  if (!str) {
    return '';
  }

  const arr = str.replace('–', '-').split(' - ');

  return arr[arr.length - 1].split(' (')[0];
}

export function formatSeconds(num) {
  const minutes = padZero(Math.floor(num / 60), 2);
  const seconds = padZero(num % 60, 2);
  return `${minutes}:${seconds}`;
}

export function formatStreamUrl(str) {
  return `${str}?client_id=${CLIENT_ID}`;
}

function padZero(num, size) {
  let s = String(num);
  while (s.length < size) {
    s = `0${s}`;
  }
  return s;
}