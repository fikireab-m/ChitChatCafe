import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { setCredRequest } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { user } = useSelector((state) => state.auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userInfo = {
      email: data.get("email").toString(),
      password: data.get("password").toString(),
    };
    dispatch(setCredRequest(userInfo));
    if (user !== null) {
      navigate("/");
    }
  };

  useEffect(() => {
    if (user !== null) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <Grid
      container
      component="section"
      bgcolor="background.default"
      sx={{ height: "80vh", mt: 12 }}
    >
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundImage: "url(/loginPic.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={8}>
        <Box
          sx={{
            my: 6,
            mx: "auto",
            maxWidth: "420px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Welcome back,
          </Typography>
          <Typography component="p" variant="body1">
            Sign in to your account
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              required
              fullWidth
              id="email"
              placeholder="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{ mt: 2 }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              sx={{ my: 2 }}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
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
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
