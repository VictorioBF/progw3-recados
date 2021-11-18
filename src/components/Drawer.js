import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  InboxIcon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MailIcon,
  MenuIcon,
  Toolbar,
  Typography
} from "@mui/core";

import { makeStyles, useTheme } from "@mui/styles";

import CropFreeSharpIcon from "@mui/icons-material/CropFreeSharp";

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--
// V modal novo post
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
// ^ Modal  novo post
//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>{}</List>
      <Divider />
      <List>{}</List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` }
        }}
      >
        <Toolbar />
        <Box>SaaS</Box>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};
