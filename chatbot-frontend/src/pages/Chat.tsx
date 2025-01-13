import Navbar from "../components/Navbar";
import ChatWindow from "../components/ChatWindow";
import { Box } from "@mui/material";

const Chat = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Navbar />
      <ChatWindow />
    </Box>
  );
};

export default Chat;
