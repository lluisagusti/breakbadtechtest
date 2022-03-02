import axios from "axios";

const api = "https://breakingbadapi.com/api"

export const getAllCharacters = async () => {
  return await axios.get(`${api}/characters`);
};

export const getCharacterDataByName = async (name) => {
  return await axios.get(`${api}/characters?name=${name}`);
};

export const getCharacterQuote = async (name) => {
  return await axios.get(`${api}/quote/random?author=${name}`);
};