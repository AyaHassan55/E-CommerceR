import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import ElectricBikeOutlinedIcon from "@mui/icons-material/ElectricBikeOutlined";
import LaptopChromebookOutlinedIcon from "@mui/icons-material/LaptopChromebookOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Close, ExpandMore } from "@mui/icons-material";
import Links from "./Links";

export default function Header3() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  //------------------------------   for Drawer-------------------------------
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <div>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 5,
        }}
      >
        <Box>
          <Button
            //   className="border"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              width: "220px",
              justifyContent: "space-between",

              // @ts-ignore
              bgcolor: theme.palette.myColor.main,
              color: theme.palette.text.secondary,
            }}
          >
            <WindowOutlinedIcon />
            <Typography
              sx={{ padding: "0", textTransform: "capitalize", mx: 1 }}
              variant="body2"
            >
              Categories
            </Typography>
            <Box flexGrow={1} />
            <KeyboardArrowRightOutlinedIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                "aria-labelledby": "basic-button",
              },
            }}
            sx={{
              ".MuiPaper-root": {
                width: 220,
                // @ts-ignore
                bgcolor: theme.palette.myColor.main,
                color: theme.palette.text.secondary,
              },
            }}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <ElectricBikeOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Bikes</ListItemText>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <LaptopChromebookOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Electronics</ListItemText>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <MenuBookOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Books</ListItemText>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <SportsEsportsOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Games</ListItemText>
            </MenuItem>
          </Menu>
        </Box>

        {useMediaQuery("(min-width:1200px)") && (
          <Stack gap={3} direction={"row"} alignItems={"center"}>
            <Links title={"Home"} />
            <Links title={"Mega Menu"} />
            <Links title={"Full Screen Menu"} />
            <Links title={"Pages"} />
            <Links title={"User Account"} />
            <Links title={"Vendor Account"} />
          </Stack>
          //   <Stack gap={3} direction={"row"} alignItems={"center"}>

          //   </Stack>
        )}

        {useMediaQuery("(max-width:1200px)") && (
          <IconButton onClick={toggleDrawer("top", true)}>
            <MenuOutlinedIcon />
          </IconButton>
        )}

        <Drawer
          anchor={"top"}
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
          sx={{
            ".MuiPaper-root.css-k1yagv-MuiPaper-root-MuiDrawer-paper": {
              height: "100%",
            },
          }}
        >
          <Box
            // className="border"
            sx={{ width: 444, mx: "auto", mt: 6, position: "relative", pt: 10 }}
          >
            <IconButton
              sx={{
                ":hover": { rotate: "180deg", transition: ".3s", color: "red" },
                position: "absolute",
                top: 0,
                right: 10,
              }}
              onClick={toggleDrawer("top", false)}
            >
              <Close />
            </IconButton>

            {[
              { mainLink: "Home", subLink: ["Link1", "Link2", "Link3"] },
              { mainLink: "Mega menu", subLink: ["Link1", "Link2", "Link3"] },
              {
                mainLink: "Full Screen Menu",
                subLink: ["Link1", "Link2", "Link3"],
              },
              { mainLink: "Pages", subLink: ["Link1", "Link2", "Link3"] },
              {
                mainLink: "user account",
                subLink: ["Link1", "Link2", "Link3"],
              },
              {
                mainLink: "Vendor account",
                subLink: ["Link1", "Link2", "Link3"],
              },
            ].map((item) => {
              return (
                <Accordion
                  key={item.mainLink}
                  elevation={0}
                  sx={{ bgcolor: "initial" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panella-content"
                    id="panella-header"
                  >
                    <Typography>{item.mainLink}</Typography>
                  </AccordionSummary>

                  <List sx={{ py: 0, my: 0 }}>
                    {item.subLink.map((i) => {
                      return (
                        <ListItem key={i} sx={{ py: 0, my: 0 }}>
                          <ListItemButton>
                            <ListItemText primary={i}></ListItemText>
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </Accordion>
              );
            })}
          </Box>
        </Drawer>
      </Container>
    </div>
  );
}
