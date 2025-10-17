import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import {
  Box,
  Container,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  DarkModeOutlined,
  ExpandMore,
  LightModeOutlined,
} from "@mui/icons-material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useState } from "react";

export default function Header1() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const options = ["En", "Ar"];
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: "4px",
        borderBottomRightRadius: "4",
        borderBottomLeftRadius: "4",
      }}
    >
      <Container>
        <Stack direction="row" alignItems="center">
          {/* left side */}
          <Typography
            sx={{
              mr: 2,
              p: "2px 10px",
              bgcolor: "#D23F57",
              borderRadius: "12px",
              fontSize: "10px",
              fontWeight: "bold",
              color: "#fff",
            }}
            variant="body1"
          >
            HOT
          </Typography>
          <Typography
            sx={{ fontSize: "12px", fontWeight: "300", color: "#fff" }}
            variant="body2"
          >
            Free Express Shopping
          </Typography>
          <Box flexGrow={1} />

          {/* icon for dark mode */}
          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined sx={{ fontSize: "20px", color: "#fff" }} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined sx={{ fontSize: "20px", color: "#fff" }} />
              </IconButton>
            )}
          </div>

          {/* selected menue */}
          <List
            component="nav"
            aria-label="Device settings"
            sx={{ m: "0", p: 0 }}
          >
            <ListItemButton
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{ "&:hover": { cursor: "pointer" } }}
            >
              <ListItemText
                sx={{
                  ".MuiTypography-root": { fontSize: "16px", color: "white" },
                }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore sx={{ fontSize: "16px", color: "#fff" }} />
            </ListItemButton>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                "aria-labelledby": "lock-button",
                role: "listbox",
              },
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{ fontSize: "16px", p: "3px 10px", minHeight: "10px" }}
                key={option}
                // disabled={index === 0}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
          <TwitterIcon
            sx={{ fontSize: "16px", color: "#fff", marginRight: "10px" }}
          />
          <FacebookIcon
            sx={{ fontSize: "16px", color: "#fff", marginRight: "10px" }}
          />
          <InstagramIcon
            sx={{ fontSize: "16px", color: "#fff", marginRight: "10px" }}
          />
        </Stack>
      </Container>
    </Box>
  );
}
