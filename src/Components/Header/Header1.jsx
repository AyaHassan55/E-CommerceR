import   { useContext } from "react";
import { ColorModeContext } from "../../theme";
import { IconButton, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
export default function Header1() {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
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
                <LightModeOutlined />
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
          <DarkModeOutlined />
                </IconButton>
      )}
        </div>
    );
}