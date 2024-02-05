import axios from 'axios';

const baseURL = 'https://api.coincap.io/v2';

export const fetchAllCoins = async () => {
  const response = await axios.get(`${baseURL}/assets`);
  return response.data.data;
};

export const fetchCoinDetails = async (id: string| string[] | undefined) => {
  
  const response = await axios.get(`${baseURL}/assets/${id}`);
  return response.data.data;
};

export const fetchCoinHistory = async (id: string| string[] | undefined) => {
  const response = await axios.get(`${baseURL}/assets/${id}/history?interval=d1`);
  return response.data.data;
};

export const fetchCoinMarket = async (id: string| string[] | undefined) => {
  const response = await axios.get(`${baseURL}/assets/${id}/markets`);
  return response.data.data;
};



export const fetchRateList = async () => {
  const response = await axios.get(`${baseURL}/rates`);
  return response.data.data;
};

export const fetchRateDetails = async (id: string | String[]| undefined) => {
  const response = await axios.get(`${baseURL}/rates/${id}`);
  return response.data.data;
};

export const fetchExchangesList = async () => {
  const response = await axios.get(`${baseURL}/exchanges`);
  return response.data.data;
};

export const fetchExchangeDetails = async (id: string | String[] | undefined) => {
  const response = await axios.get(`${baseURL}/exchanges/${id}`);
  return response.data.data;
};

export const fetchMarketList = async () => {
  const response = await axios.get(`${baseURL}/markets`);
  return response.data.data;
};

