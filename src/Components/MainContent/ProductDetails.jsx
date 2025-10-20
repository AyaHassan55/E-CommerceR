import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Container,
  Stack,
  Box,
  Typography,
  Dialog,
  IconButton,
  Button,
} from "@mui/material";
export default function ProductDetails() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        alignItems: "center",
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img width="300px" height="380px" src="src/images/1 (15).JPG" alt="" />
      </Box>

      <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Typography sx={{ mt: 3 }} variant="h5">
          Women's Fashion
        </Typography>
        <Typography my={0.4} fontSize={"22px"} color="crimson" variant="h4">
          $12.99
        </Typography>
        <Typography variant="body1">
          Lizards are a widespread group of squamate reptiles, with over 6000
          species ,ranging across all continents exept Antarctica
        </Typography>
        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
          {["src/images/1 (15).JPG", "src/images/1 (14).jpg"].map((item) => {
            return (
              <img
                key={item}
                src={item}
                alt=""
                width={"90px"}
                style={{ borderRadius: 3 }}
              />
            );
          })}
        </Stack>
        <Button variant="contained" sx={{ textTransform: "capitalize", mb: 3 }}>
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
}
