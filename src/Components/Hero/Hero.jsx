import {
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  ListItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slides.css";

const mySlider = [
  { text: "MEN", link: "src/images/banner-15.jpg" },
  { text: "WOMEN", link: "src/images/banner-25.jpg" },
];
export default function Hero() {
  const theme = useTheme();
  return (
    <Container sx={{ mt: 2.5, display: "flex", alignItems: "center", gap: 2 }}>
      <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {mySlider.map((item) => {
          return (
            <SwiperSlide className="parent-slider">
              {/* <img src="src" alt="" /> */}
              <img src={item.link} alt="" />

              <Box
                sx={{
                  [theme.breakpoints.up("sm")]: {
                    textAlign: "left",
                    position: "absolute",
                    left: "10%",
                    top: "50%",
                    transform: "translateY(-50%)",
                  },
                  [theme.breakpoints.down("sm")]: {
                    pt: 4,
                    bgcolor: "#fff",
                    pb: 6,
                  },
                }}
              >
                <Typography sx={{ color: "#222" }} variant="h5">
                  LIFESTYLE COLLECTION
                </Typography>
                <Typography
                  sx={{ color: "#222", fontWeight: 400, my: 1 }}
                  variant="h3"
                >
                  {item.text}
                </Typography>

                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  sx={{ justifyContent: "center" }}
                >
                  <Typography
                    sx={{ color: "#333", justifyContent: { xs: "center" } }}
                    mr={1}
                    variant="h4"
                  >
                    SALE UP TO
                  </Typography>
                  <Typography sx={{ color: "#D23F57" }} variant="h4">
                    30% OFF
                  </Typography>
                </Stack>

                <Typography
                  sx={{ color: "#000", fontWeight: 300, my: 1 }}
                  variant="body1"
                >
                  Get Free Shopping on orders over $99.00
                </Typography>
                <Button
                  sx={{
                    px: 5,
                    py: 1,
                    mt: 2,
                    backgroundColor: "#222",
                    boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                    color: "#fff",
                    borderRadius: "1px",
                    ":hover": {
                      bgcolor: "#151515",
                      boxShadow: "0px 4px 16px rgba(43, 52,59,0.1)",
                    },
                  }}
                  variant="contained"
                >
                  SHOP NOW
                </Button>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* -------------Second column -------------------------------*/}
      <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.4%" } }}>
        <Box sx={{ position: "relative" }}>
          <img src="src/images/banner-17.jpg" width={"100%"} />

          <Stack
            // className="border"
            sx={{
              position: "absolute",
              top: "50%",
              left: "30px",
              transform: "translateY(-50%)",
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "#2B3445", lineHeight: "18px", fontWeight: 400 }}
            >
              New Arrivals
            </Typography>

            <Typography
              variant="h6"
              sx={{ color: "#2B3445", lineHeight: "16px", mt: 1 }}
            >
              SUMMER
            </Typography>
            <Typography variant="h6" sx={{ color: "#2B3445" }}>
              SALE 20% OFF
            </Typography>

            <Link
              sx={{
                color: "#2B3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: ".3s",
                ":hover": { color: "#D23F57" },
              }}
              href="#"
              underline="none"
            >
              Shop now
              <ArrowForwardIosIcon sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>

        {/* -------------------------------------------------------------------- */}
        <Box sx={{ position: "relative" }}>
          <img src="src/images/banner-16.jpg" width={"100%"} />
          <Stack
            // className="border"
            sx={{
              position: "absolute",
              top: "50%",
              left: "30px",
              transform: "translateY(-50%)",
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "#2B3445", lineHeight: "18px", fontWeight: 400 }}
            >
              Gaming 4K
            </Typography>

            <Typography
              variant="h6"
              sx={{ color: "#2B3445", lineHeight: "16px", mt: 1 }}
            >
              DESKTOP &
            </Typography>
            <Typography variant="h6" sx={{ color: "#2B3445" }}>
              LAPTOPS
            </Typography>

            <Link
              sx={{
                color: "#2B3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: ".3s",
                ":hover": { color: "#D23F57" },
              }}
              href="#"
              underline="none"
            >
              Shop now
              <ArrowForwardIosIcon sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
