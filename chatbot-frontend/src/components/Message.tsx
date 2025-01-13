import React from "react";
import { Box } from "@mui/material";

interface MessageProps {
  sender: "user" | "bot";
  text: string;
}

const Message: React.FC<MessageProps> = ({ sender, text }) => {
  return (
    <Box
      sx={{
        p: 1,
        borderRadius: 2,
        maxWidth: "60%",
        backgroundColor: sender === "user" ? "#1976d2" : "#e0e0e0",
        color: sender === "user" ? "#fff" : "#000",
        alignSelf: sender === "user" ? "flex-end" : "flex-start",
        mb: 1,
      }}
    >
      {text}
    </Box>
  );
};

export default Message;
