import { Box, TextField, Button, Typography, Paper, Grid } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Box
      sx={{
        width: "35%",
        margin: "15% auto"
      }}
    >
      <Paper
        variant="outlined"
        sx={{
          padding: "10%"
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Login</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="crn-user"
              fullWidth
              label="Usuário"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="crn-password"
              fullWidth
              label="Senha"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography as="a" href="/">
              Esqueci a senha
            </Typography>
          </Grid>
          <Grid item xs={6} align="right">
            <Typography as="a" href="/">
              Cadastrar
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" fullWidth type="submit">
              Login
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Home;
