export function plusSignQuery(string) {
  return string.replace(/\s+/g, "+");
}

export function arrayString(array) {
  if (array && array.length > 1) return array.join(", ");
  return array;
}

export const logoUrl =
  "https://breakingbadapi.com/static/media/breaking_bad.6d275852.jpg";

export const flagUrl =
  "https://previews.123rf.com/images/tony4urban/tony4urban1502/tony4urban150200104/36582257-%E3%82%A2%E3%83%A1%E3%83%AA%E3%82%AB%E5%90%88%E8%A1%86%E5%9B%BD%E3%81%A8%E3%82%B9%E3%83%9A%E3%82%A4%E3%83%B3%E3%81%AE%E5%8D%8A%E5%88%86%E3%81%AE%E5%9B%BD%E3%81%AE%E5%9B%BD%E6%97%97.jpg";
