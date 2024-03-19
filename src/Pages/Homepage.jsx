import { Send } from "@mui/icons-material";
import { Fab } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Card from "../components/Card";

export default function HomePage() {
  return (
    <Box id="home" sx={{ width: "100%" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 4, sm: 10 },
          pb: 4,
        }}
      >
        <Stack
          direction="row"
          alignSelf="center"
          spacing={1}
          alignItems="center"
          sx={{ mt: 2, width: { xs: "100%", sm: "70%", lg: "50%" } }}
        >
          <TextField
            id="outlined-basic"
            hiddenLabel
            size="small"
            fullWidth
            multiline
            maxRows={6}
            minRows={2}
            variant="outlined"
            aria-label="What do you have in mind?"
            placeholder="What do you have in mind?"
            inputProps={{
              autocomplete: "off",
              ariaLabel: "What do you have in mind?",
            }}
          />
          <Fab
            variant="extended"
            color="primary"
            sx={{ width: "3rem", height: "3rem" }}
          >
            <Send />
          </Fab>
        </Stack>
        {Array.from(Array(6)).map((el) => (
          <Card key={el} />
        ))}
      </Container>
    </Box>
  );
}
