import React from "react";

import { Paper, Typography, Grid, Container } from "@mui/material";
import MoreVertSharpIcon from "@mui/icons-material/MoreVertSharp";

const Comment = ({ author, content }) => {
  return (
    <Container sx={{ padding: 0.5 }}>
      <Paper variant="outlined" rounded sx={{ padding: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="subtitle2">{author}</Typography>
          </Grid>
          <Grid item xs={12} align="right">
            <MoreVertSharpIcon sx={{ verticalAlign: "middle" }} />
          </Grid>
          <Grid item xs={24}>
            <Typography paragraph align="justify">
              {content}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Comment;
