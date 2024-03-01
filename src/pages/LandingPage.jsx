import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import AppAppBar from "../components/AppAppBar";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <>
      <CssBaseline />
      <AppAppBar />
      <Box sx={{ bgcolor: "background.default" }}>
        <Footer />
      </Box>
    </>
  );
}
