import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Paper } from '@mui/material';

export default function PostCard() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Paper elevation={8} sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </>
  );
}