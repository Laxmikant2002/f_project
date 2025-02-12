// client/src/components/LoginForm.js
import React from 'react';
import { TextField, Button, Link, Grid, Box, Typography } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const LoginForm = ({ onConnect }) => {
  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 8, p: 3 }}>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <LockOpenIcon sx={{ fontSize: 40, color: 'primary.main' }} />
        <Typography variant="h5" gutterBottom>
          Sign In
        </Typography>
      </Box>

      <TextField
        fullWidth
        label="Email or Username"
        margin="normal"
        variant="outlined"
      />

      <TextField
        fullWidth
        label="Password"
        type="password"
        margin="normal"
        variant="outlined"
      />

      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={onConnect}
      >
        Sign In
      </Button>

      <Grid container justifyContent="space-between">
        <Grid item>
          <Link href="/signup" variant="body2">
            Create New Account
          </Link>
        </Grid>
        <Grid item>
          <Link href="/forgot-password" variant="body2">
            Forgot Password?
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginForm;