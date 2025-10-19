import "./index.css";
import Header1 from "./Components/Header/Header1";
import Header2 from "./Components/Header/Header2";
import Header3 from "./Components/Header/Header3";

import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Hero from "./Components/Hero/Hero";
import Main from "./Components/MainContent/main";
import Footer from "./Components/Footer/Footer";

export default function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />
        <Header1 />
        <Header2 />
        <Header3 />
        <Box
          bgcolor={
            // @ts-ignore
            theme.palette.bgWeb.main
          }
        >
          <Hero />
          <Main />
        </Box>
        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
