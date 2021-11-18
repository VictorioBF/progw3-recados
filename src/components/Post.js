import React from "react";

import { Paper, Typography, Grid, Container, Box } from "@mui/material";
import MoreVertSharpIcon from "@mui/icons-material/MoreVertSharp";

const Post = ({ title, topic, content, comments }) => {
  return (
    <Container sx={{ padding: 0.4 }}>
      <Paper variant="outlined" sx={{ padding: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={16}>
            <Box
              sx={{ display: "flex", height: "100%" }}
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="h6" align="center">
                {title}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{ display: "flex", height: "100%" }}
              alignItems="center"
              justifyContent="center"
            >
              <Typography align="center">{topic}</Typography>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box
              sx={{ display: "flex", height: "100%" }}
              alignItems="center"
              justifyContent="center"
            >
              <MoreVertSharpIcon sx={{ verticalAlign: "middle" }} />
            </Box>
          </Grid>
          <Grid item xs={24}>
            <Typography align="justify">{content}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align="left">Comentários: {comments}</Typography>
          </Grid>
          <Grid item xs={12} align="right">
            <Typography as="a" href="/">
              Comentar
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Post;
