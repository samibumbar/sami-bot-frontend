import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

interface InputBarProps {
  onSend: (message: string) => void;
}

const InputBar: React.FC<InputBarProps> = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        p: 2,
        backgroundColor: "#fff",
        borderTop: "1px solid #ccc",
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSend}
        sx={{ ml: 2 }}
      >
        Send
      </Button>
    </Box>
  );
};

export default InputBar;
