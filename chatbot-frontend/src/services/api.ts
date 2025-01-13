import axios from "axios";

const API_URL = "https://bot-backend-h9da.onrender.com";

export const sendMessageToBackend = async (message: string) => {
  const response = await axios.post(`${API_URL}/chat`, { message });
  return response.data;
};
