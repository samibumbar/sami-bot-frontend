import Chat from "./pages/Chat";
import { CssBaseline } from "@mui/material";

const App = () => {
  return (
    <>
      <CssBaseline />
      <div
        style={{
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Chat />
      </div>
    </>
  );
};

export default App;
