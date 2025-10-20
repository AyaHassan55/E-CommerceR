import {
  Container,
  Stack,
  Box,
  Typography,
  useTheme,
  Dialog,
  IconButton,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Rating from "@mui/material/Rating";
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { useGetproductByNameQuery } from "../../Redux/product";

export default function Main() {
  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (event, newValue) => {
    setAlignment(newValue);
    setMyData(newValue);
  };
  const theme = useTheme();
  // const [value] = useState(2);

  // -----------dialog----------------
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // -----------Redux----------------
  const allProducts = "products?populate=*";
  const menCategoryApi =
    "products?populate=*&filters[productCategory][$eq]=men";
  const womenCategoryApi =
    "products?populate=*&filters[productCategory][$eq]=women";

  const [myData, setMyData] = useState(allProducts);
  const { data, isLoading, error } = useGetproductByNameQuery(myData);
  if (isLoading) {
    return <Typography variant="h6">Loading.......</Typography>;
  }
  if (error) {
    // @ts-ignore
    return <Typography variant="h6">{error.message}</Typography>;
  }
  if (data) {
    return (
      <Container sx={{ mt: 9, pb: 9 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={3}
        >
          <Box>
            <Typography variant="h6">Selected Products</Typography>
            <Typography fontWeight={300} variant="body1">
              {" "}
              All Our New Arrivals in exclusive brand selection
            </Typography>
          </Box>
          {/*----------------------- sec Box--------------------------------- */}
          <ToggleButtonGroup
            color="error"
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              ".Mui-selected": {
                border: "1px solid rgba(233,69, 96,0.5) !important",
                color: "#e94560",
                backgroundColor: "initial",
              },
            }}
          >
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="myButton"
              value={allProducts}
              aria-label="left aligned"
            >
              All Category
            </ToggleButton>
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="myButton"
              value={menCategoryApi}
              aria-label="centered"
            >
              Men Categories
            </ToggleButton>
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="myButton"
              value={womenCategoryApi}
              aria-label="right aligned"
            >
              Women Categories
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Stack
          direction={"row"}
          gap={2}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          {data.data.map((item) => {
            return (
              <Card
                key={item}
                sx={{
                  maxWidth: 333,
                  mt: 3,
                  ":hover .MuiCardMedia-root": {
                    scale: "1.1",
                    transation: "0.35s",
                    rotate: "1deg",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: 277 }}
                  // @ts-ignore
                  image={`${import.meta.env.VITE_USE_URL}${
                    item.productImg[0].url
                  }`}
                  title="green iguana"
                />

                <CardContent>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography gutterBottom variant="h6" component={"div"}>
                      {item.productTitle}
                    </Typography>
                    <Typography variant="subtitle1" component={"p"}>
                      {item.productPrice}
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    {item.productDesc}
                  </Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    onClick={handleClickOpen}
                    sx={{ textTransform: "capitalize" }}
                    size="small"
                  >
                    <AddShoppingCartIcon sx={{ mr: 1 }} fontSize="small" />
                    Add to Card
                  </Button>
                  <Rating
                    name="read-only"
                    value={item.productRating}
                    readOnly
                  />
                </CardActions>
              </Card>
            );
          })}
        </Stack>

        <Dialog
          sx={{
            ".MuiPaper": { xs: { width: "100%", md: 800 }, bgcolor: "#fff" },
          }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            sx={{
              ":hover": { rotate: "180deg", transition: ".3s", color: "red" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
          <ProductDetails />
        </Dialog>
      </Container>
    );
  }
}
