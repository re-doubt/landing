import axios from "axios";

export const API_URL = "https://api.redoubt.online/";
export const COINGECKO_API =
  "https://api.coingecko.com/api/v3/simple/price?ids=the-open-network&vs_currencies=usd";

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "appication/json",
  },
});
