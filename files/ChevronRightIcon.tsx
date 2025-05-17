import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const ChevronRightIcon = () => (
  <Box
    component="img"
    src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23423f43-46da-4b28-b5b9-8ea736653ac9"
    alt=""
    sx={{
      width: 6.17,
      height: 10,
      opacity: 0.56,
      display: "block",
    }}
  />
);

const TitleAndContents: React.FC = () => (
  <Box
    sx={{
      width: "100%",
      minHeight: 62,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      gap: 8,
    }}
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: 272,
        minWidth: 272,
        alignItems: "flex-start",
      }}
    >
      <Breadcrumbs
        separator={<ChevronRightIcon />}
        aria-label="breadcrumb"
        sx={{
          p: 0,
          m: 0,
          "& .MuiBreadcrumbs-separator": {
            mx: 1,
            display: "flex",
            alignItems: "center",
            minWidth: 20,
            minHeight: 20,
          },
        }}
      >
        <Link
          underline="none"
          color="inherit"
          href="#"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "24px",
            letterSpacing: 0,
            color: "rgba(36,36,36,1)",
            display: "flex",
            alignItems: "center",
            p: 0,
            m: 0,
            minHeight: 24,
            minWidth: 65,
          }}
        >
          Settings
        </Link>
        <Link
          underline="none"
          color="inherit"
          href="#"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "24px",
            letterSpacing: 0,
            color: "rgba(36,36,36,1)",
            display: "flex",
            alignItems: "center",
            p: 0,
            m: 0,
            minHeight: 24,
            minWidth: 64,
          }}
        >
          General
        </Link>
      </Breadcrumbs>
      <Typography
        sx={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 500,
          fontSize: 20,
          lineHeight: "30px",
          letterSpacing: 0,
          color: "rgba(54,54,54,1)",
          textAlign: "left",
          alignSelf: "stretch",
          display: "flex",
          alignItems: "center",
          minHeight: 30,
        }}
      >
        Configuration Apply Status
      </Typography>
    </Box>
  </Box>
);

export default TitleAndContents;
