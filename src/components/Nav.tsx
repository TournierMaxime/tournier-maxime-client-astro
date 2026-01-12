"use client"
import {
  Drawer,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material"
import React, { Fragment } from "react"
import MenuIcon from "@mui/icons-material/Menu"
import { GitHub, LinkedIn } from "@mui/icons-material"

export default function Nav() {
  const drawerWidth = 240
  const navItems = ["About", "Projects", "Skills"]

  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const homeLogo = "/images/logo_TM_2.webp"

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", py: 4 }}>
      <a href={"/"}>
        <img src={"/images/logo_TM_2.webp"} alt="Home Image" width={40} height={40} />
      </a>
      <Divider />
      <List>
        {navItems.map((item) => (
          <a key={item} href={`/#${item}`}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </a>
        ))}
        <a
          href={"https://www.linkedin.com/in/tourniermaxime/"}
          target="_blank"
        >
          <IconButton>
            <LinkedIn />
          </IconButton>
        </a>

        <a href={"https://github.com/TournierMaxime"} target="_blank">
          <IconButton>
            <GitHub />
          </IconButton>
        </a>
      </List>
    </Box>
  )

  return (
    <Fragment>
      <AppBar component="nav" color="default">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <a href={"/"}>
              <img src={homeLogo} alt="Home Image" width={40} height={40} />
            </a>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <a key={item} href={`/#${item}`}>
                <Button sx={{ color: "#000" }}>{item}</Button>
              </a>
            ))}
            <a
              href={"https://www.linkedin.com/in/tourniermaxime/"}
              target="_blank"
            >
              <IconButton>
                <LinkedIn />
              </IconButton>
            </a>

            <a href={"https://github.com/TournierMaxime"} target="_blank">
              <IconButton>
                <GitHub />
              </IconButton>
            </a>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Fragment>
  )
}
