import axios from "axios";

const api = "https://breakingbadapi.com/api";

// export const getAllCharacters = async () => {
//   return await axios.get(`${api}/characters`);
// };

export const getAllCharacters = async () => {
  return await axios.get(`${api}/characters`);
  // return await axios.get(`${api}/characters?category=Breaking+Bad`);
};

export const getCharacterDataByName = async (name) => {
  return await axios.get(`${api}/characters?name=${name}`);
};

export const getCharacterDataById = async (id) => {
  return await axios.get(`${api}/characters/${id}`);
};

export const getCharacterQuote = async (name) => {
  return await axios.get(`${api}/quote/random?author=${name}`);
};