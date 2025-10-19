import { Box, Stack, Typography } from "@mui/material";
export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <Stack direction={"row"} alignItems={"center"} justifyContent={"center"}>
        <Typography
          display="flex"
          justifyContent="center"
          alignItems="center"
          color={"HighLightText"}
          variant="h6"
          sx={{
            fontSize: "16px",
          }}
        >
          Designed and Developed By
        </Typography>

        <Typography sx={{ color: "#a7c0e6ff", paddingLeft: "14px" }}>
          Aya Hassan
        </Typography>
      </Stack>
    </Box>
  );
}
