import {
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import WorkSpacePremiumOutlinedIcon from "@mui/icons-material/WorkSpacePremiumOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";

// const card = [
//   {
//     icon: <ElectricBoltIcon />,
//     title: "Fast Delivery",
//     subTitle: "Start From $10",
//   },
//   {
//     icon: <CreditScoreOutlinedIcon />,
//     title: "Payment",
//     subTitle: "Security System",
//   },
//   {
//     icon: <WorkSpacePremiumOutlinedIcon />,
//     title: "Money Guarantee",
//     subTitle: "7 Days Back",
//   },
//   {
//     icon: <AccessAlarmOutlinedIcon />,
//     title: "365 Days",
//     subTitle: "For Free return",
//   },
// ];
export default function IconSection() {
  const theme = useTheme();
  return (
    <Container
      sx={{ mt: 3, bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff" }}
    >
      <Stack
        divider={
          useMediaQuery("(min-width:600px)") ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
        sx={{ flexWrap: "wrap" }}
        direction={"row"}
        alignItems={"center"}
      >
        <MyBox
          icon={<ElectricBoltIcon />}
          title={"Fast Delivery"}
          subTitle={"Start from $10"}
        />
        <MyBox
          icon={<WorkSpacePremiumOutlinedIcon />}
          title={"Money Guarantee"}
          subTitle={"7 Days Back"}
        />
        <MyBox
          icon={<AccessAlarmOutlinedIcon />}
          title={"365 Days"}
          subTitle={"For free return"}
        />
        <MyBox
          icon={<CreditScoreOutlinedIcon />}
          title={"Payment"}
          subTitle={"Secure System"}
        />
      </Stack>
    </Container>
  );
}

const MyBox = ({ icon, title, subTitle }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        width: 250,
        flexGrow: 1,
        alignItems: "center",

        gap: 3,
        py: 3,
        justifyContent: useMediaQuery("(min-width:600px)") ? "center" : "left",
      }}
    >
      {icon}
      <Box sx={{}}>
        <Typography variant="body1">{title}</Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 300,
            color: theme.palette.text.secondary,
          }}
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};
