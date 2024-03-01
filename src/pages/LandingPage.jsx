import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import AppAppBar from "../components/AppAppBar";
import Footer from "../components/Footer";
import Features from "./Features";

export default function LandingPage() {
  return (
    <>
      <CssBaseline />
      <AppAppBar />
      <Box sx={{ bgcolor: "background.default" }}>
        <Features />
        <Footer />
      </Box>
    </>
  );
}
