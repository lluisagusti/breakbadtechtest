import axios from "axios";
import { apiUrl } from '../constants/constants'
import { switchResponse } from '../logic/logic'

export const getAllCharacters = async () => {
return switchResponse(await axios.get(`${apiUrl}/characters`))
};

export const getCharacterDataByName = async (name) => {
  return await axios.get(`${apiUrl}/characters?name=${name}`);
};

export const getCharacterQuote = async (name) => {
  return await axios.get(`${apiUrl}/quote/random?author=${name}`);
};