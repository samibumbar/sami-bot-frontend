import { useEffect, useRef } from "react";
import Message from "./Message";
import InputBar from "./InputBar";
import { useChat } from "../hooks/useChat";
import { Box, Paper } from "@mui/material";

const ChatWindow = () => {
  const { messages, sendMessage } = useChat();
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          p: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {messages.map((msg, idx) => (
          <Message key={idx} sender={msg.sender} text={msg.text} />
        ))}
        <div ref={chatEndRef} />
      </Box>

      <InputBar onSend={sendMessage} />
    </Paper>
  );
};

export default ChatWindow;
