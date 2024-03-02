import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff, LockOutlined, AlternateEmailOutlined } from '@mui/icons-material';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" mt={5}>
      {'Copyright © '}
      <Link color="inherit" href="">
        The Chitchat cafe
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get('username'),
      password: data.get('password'),
    });
  };

  return (
    <Grid container component="main" sx={{ height: '90vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundImage: 'url(/loginPic.png)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} sx={{ alignContent: "center" }}>
        <Box
          sx={{
            my: 8,
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            alignSelf: 'center',
            maxWidth: 420,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main', height: 64, width: 64 }}>
            <LockOutlined sx={{ fontSize: "3rem" }} />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ color: "var(--lightText)", fontWeight: "800" }}>
            Welcome back
          </Typography>
          <Typography component="h1" variant="body2" sx={{ color: "var(--lightGreyText)", mt: 0.5 }}>
            Sign in to your account
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ p: 2 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              size="small"
              color='primary'
              id="username"
              label="Email address"
              name="email"
              type="email"
              placeholder="Email address"
              autoComplete="email"
              autoFocus
              InputProps={{
                startAdornment:
                  <InputAdornment position="start" >
                    < AlternateEmailOutlined sx={{ color: 'primary.main' }} />
                  </InputAdornment>
              }}
            />
            <TextField
              margin="dense"
              required
              fullWidth
              size="small"
              color='primary'
              name="password"
              label="Password"
              id="password"
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment:
                  <InputAdornment position="end" >
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      sx={{ color: 'primary.main' }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>,
                startAdornment:
                  <InputAdornment position="start" >
                    <LockOutlined sx={{ color: 'primary.main' }} />
                  </InputAdornment>
              }}

              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Copyright />
          </Box>
        </Box>
      </Grid>
    </Grid >
  );
}

export default Login; 