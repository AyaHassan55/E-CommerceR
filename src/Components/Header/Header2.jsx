import { ExpandMore, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge, Container, IconButton, ListItem, Stack } from "@mui/material";

import { styled, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";

// -------------------------------------------------------------------------------
const options = ["All Categories", "Car", "Cloths", "Electronics"];
export default function Header2() {
  // ------Menu List-------------------------------------------
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);

  const handleClickListItem = (event) => {
    const target = event.currentTarget;
    // نستخدم setTimeout علشان نسمح ل React يحدث الـ DOM قبل ما نفتحه
    setTimeout(() => {
      setAnchorEl(target);
    }, 0);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  //   ------------------------------------------------------------------------

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    border: "1px solid #777",
    flexGrow: 0.4,

    zIndex: "10",

    "&:hover": {
      border: "1px solid #333",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "266px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "330px",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#777",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  const theme = useTheme();
  return (
    <Container
      sx={{
        my: 3,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Stack sx={{ alignItems: "center", gap: 1 }}>
        <ShoppingCartOutlined />
        <Typography>E-commerce</Typography>
      </Stack>
      {/* search */}

      <Search
        sx={{
          borderRadius: "22px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />

        <div>
          <List
            component="nav"
            aria-label="Device settings"
            sx={{
              // @ts-ignore
              bgcolor: theme.palette.myColor.main,
              borderRadius: "8px",
              borderBottomRightRadius: "22px",
              borderTopRightRadius: "22px",
              //   p: 0,
            }}
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{ display: "flex" }}
            >
              <ListItemText
                // className="border"
                sx={{
                  width: 90,
                  //   height: 40,
                  textAlign: "center",
                  "&:hover": { cursor: "pointer" },
                }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Search>

      <Stack direction={"row"} alignItems={"center"}>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="primary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>

        <IconButton>
          <Person2OutlinedIcon />
        </IconButton>
      </Stack>
    </Container>
  );
}
