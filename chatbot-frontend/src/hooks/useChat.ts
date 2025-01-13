import { useEffect, useState } from "react";
import axios from "axios";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get("http://localhost:3003/chat/messages");
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    fetchMessages();
  }, []);

  const sendMessage = async (text: string) => {
    const userMessage: Message = { sender: "user", text };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await axios.post("http://localhost:3003/chat/message", {
        question: text,
      });

      const botMessage: Message = {
        sender: "bot",
        text: response.data.message,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return { messages, sendMessage };
};
