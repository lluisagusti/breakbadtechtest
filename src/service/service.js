import axios from "axios";
import { apiUrl, apiKey } from '../constants/constants'
import { switchResponse } from '../logic/logic'

export const getAllCharacters = async () => {
return switchResponse(await axios.get(`${apiUrl}/characters`))
};

export const getLists = async () => {
return await axios.get(`https://api.themoviedb.org/4/list/1?api_key=${apiKey}`);
};

export const getCharacterDataByName = async (name) => {
  return await axios.get(`${apiUrl}/characters?name=${name}`);
};

export const getCharacterQuote = async (name) => {
  return await axios.get(`${apiUrl}/quote/random?author=${name}`);
};