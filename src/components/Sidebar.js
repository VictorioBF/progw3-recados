// import Teste from "./SubComponents/Teste";

import React from "react";

import {
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  Modal,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField
} from "@mui/material";

import CropFreeSharpIcon from "@mui/icons-material/CropFreeSharp";

const NewPost = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Box
      sx={{
        width: "75%",
        m: "auto"
      }}
    >
      <Paper variant="outlined" sx={{ padding: 3, mt: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={24}>
            <Typography id="simple-modal-title" variant="h6">
              Nova Postagem
            </Typography>
          </Grid>

          <Grid item container spacing={2} xs={24}>
            <Grid item xs={12}>
              <TextField
                id="crn_title"
                variant="outlined"
                label="Título"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Select
                defaultValue=""
                variant="outlined"
                id="crn_topic"
                // label="Assunto"
                sx={{ width: "100%" }}
              >
                <MenuItem value="">
                  <em>Assunto 01</em>
                </MenuItem>
                {[
                  "Assunto 02",
                  "Assunto 03",
                  "Assunto 04",
                  "Assunto 05",
                  "Assunto 06",
                  "Assunto 07",
                  "Assunto 08"
                ].map((text, index) => (
                  <MenuItem key={text} value={text} primary={text}>
                    <em>{text}</em>
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={24} sx={{}}>
              <TextField
                id="crn_post"
                label="Conteúdo da Postagem"
                multiline
                rows={6}
                variant="outlined"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} sx={{}}>
              <Button
                color="error"
                variant="contained"
                sx={{ width: "100%", textTransform: "none" }}
                onClick={() => handleClose()}
              >
                Cancelar
              </Button>
            </Grid>
            <Grid item xs={12} sx={{}}>
              <Button
                color="primary"
                variant="contained"
                sx={{ width: "100%", textTransform: "none" }}
                onClick={() => handleClose()}
              >
                Postar!
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );

  return (
    <>
      <Button
        type="button"
        onClick={handleOpen}
        sx={{
          textTransform: "none",
          width: "100%"
        }}
      >
        Postar
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </>
  );
};

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "100%"
      }}
    >
      <Drawer
        anchor="left"
        variant="permanent"
        sx={{ width: "100%" }}
        elevation={0}
      >
        <Typography
          color="inherit"
          variant="h6"
          component="div"
          sx={{ textDecoration: "none", m: 1, display: "flex" }}
          justifyContent="center"
          alignItems="center"
          as="a"
          href="/"
        >
          <CropFreeSharpIcon sx={{ mr: 0.5 }} />
          corner
        </Typography>
        <Divider />
        <Box sx={{ overflow: "auto" }}>
          <Typography align="center" sx={{ m: 1 }}>
            Usuário
          </Typography>
          <Divider />
          <NewPost />
          <Divider />
          <List sx={{ padding: 0 }}>
            {[
              "Assunto 01",
              "Assunto 02",
              "Assunto 03",
              "Assunto 04",
              "Assunto 05",
              "Assunto 06",
              "Assunto 07",
              "Assunto 08"
            ].map((text, index) => (
              <ListItem button key={text} alignItems="center">
                <ListItemText primary={text} style={{ textAlign: "center" }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
