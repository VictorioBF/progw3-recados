import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Sidebar from "../components/Sidebar";
import Comment from "../components/Comment";
// import Footer from '../components/Footer'

const OpenPost = () => {
  const staticAuthor = "Autor Estático";
  const staticContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt interdum massa, in lacinia nisi tempus at. Quisque varius felis et neque placerat, in congue orci ornare. Nulla id odio eu erat commodo iaculis. Etiam eleifend neque felis, at varius urna bibendum in. Vivamus varius dolor sit amet lacus convallis, sit amet laoreet libero tempor. Aenean massa erat, vulputate at dignissim eget, interdum eget nibh. Nulla mi dolor, pharetra quis rutrum in, vehicula in sapien. Nulla dictum neque erat, a placerat mauris eleifend in. Mauris maximus feugiat nunc vitae tristique. Praesent in eros venenatis, malesuada turpis in, vestibulum magna. Sed pellentesque nunc sem, et placerat justo condimentum vel.";

  return (
    <>
      <Grid container columns={24}>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={21}>
          <Container sx={{ padding: 1 }}>
            <Paper variant="outlined" rounded sx={{ padding: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={14} sx={{ verticalAlign: "middle" }}>
                  <Box
                    sx={{ display: "flex", height: "100%" }}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography variant="h6" align="center">
                      title
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    sx={{ display: "flex", height: "100%" }}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography align="center">topic</Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    sx={{ display: "flex", height: "100%" }}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography align="center">author</Typography>
                  </Box>
                </Grid>
                <Grid item xs={24}>
                  <Typography align="justify">content</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography align="left">Comentários: 32</Typography>
                </Grid>
                <Grid item xs={12} as="a" href="/">
                  <Typography align="right">Comentar</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Container>
          <Comment author={staticAuthor} content={staticContent} />
          <Comment author={staticAuthor} content={staticContent} />
          <Comment author={staticAuthor} content={staticContent} />
          <Comment author={staticAuthor} content={staticContent} />
        </Grid>
      </Grid>
    </>
  );
};

export default OpenPost;
