import axios from "axios";

const API_URL = "http://localhost:3003";

export const sendMessageToBackend = async (message: string) => {
  const response = await axios.post(`${API_URL}/chat`, { message });
  return response.data;
};
