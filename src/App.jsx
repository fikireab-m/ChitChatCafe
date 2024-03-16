import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppAppBar from "./components/AppAppBar";
import Footer from "./components/Footer";
import Login from "./Pages/Auth/Login";
import PrivateRoute from "./components/PrivateRoute";
import getLPTheme from "./getLPTheme";
import HomePage from "./Pages/Homepage";

const App = () => {
  const [mode, setMode] = useState("light");
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Router>
        <Routes>
          <Route path="/auth" element={<Login />} />
          <Route path="" element={<PrivateRoute />}>
            <Route
              path="/"
              element={
                <Box sx={{ bgcolor: "background.default" }}>
                  <HomePage />
                  <Footer />
                </Box>
              }
            />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
