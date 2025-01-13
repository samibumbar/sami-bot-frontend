import axios from "axios";

const API_URL = "https://samibumbar.github.io/sami-bot-frontend/";

export const sendMessageToBackend = async (message: string) => {
  const response = await axios.post(`${API_URL}/chat`, { message });
  return response.data;
};
