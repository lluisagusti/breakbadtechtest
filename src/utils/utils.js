
import { imgUrl } from '../constants/constants'

export function plusSignQuery(string) {
  return string.replace(/\s+/g, "+");
}

export function spacesInsteadPlusSign(string) {
  return string.replace(/\+/g, " ");
}

export function arrayString(array) {
  if (array && array.length > 1) return array.join(", ");
  return array;
}

// cheat only for this api, sorry
export function hollyImage(string) {
  if (string && string.includes(imgUrl)) {
    const splitted = string.split(imgUrl);
    return `${splitted[0]}${imgUrl}`;
  }
  return string;
}

export function removeIdBtcAndImg(object) {
  delete object.char_id;
  return object;
}

export function characterInfoArray(data) {
  console.log('data 1', data)
  if (typeof data === "object") return data.join(", ")
  console.log('data 2', data)
  return data
}
