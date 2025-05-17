import React from "react";
import { Box } from "@mui/material";

const SideBar: React.FC = () => {
  return (
    <Box
      sx={{
        width: 72,
        height: "100%",
        bgcolor: "#F0EFFF",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        p: "16px",
        boxSizing: "border-box",
        borderRight: "1px solid #E5E7EB",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
        }}
      >
        {/* Red V logo */}
        <Box
          sx={{
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F0EFFF",
            overflow: "visible",
          }}
        >
          <Box
            sx={{
              width: 26,
              height: 26,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/606f1b46-5595-4c66-b916-28c8253c78b9"
              alt="Logo"
              style={{ width: 44, height: 40, display: "block" }}
            />
          </Box>
        </Box>

        {/* Sidebar Navigation Icons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
            pt: 0.5,
            width: 40,
          }}
        >
          {/* Dashboard Icon */}
          <Box
            component="button"
            sx={{
              width: 40,
              height: 40,
              borderRadius: "100%",
              bgcolor: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              p: 0,
              cursor: "pointer",
              "&:hover": { bgcolor: "rgba(0,0,0,0.04)" },
            }}
          >
            <Box
              component="img"
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/20267ab7-6496-438c-b014-7a4a26d569d0"
              alt="Dashboard"
              sx={{ width: 18, height: 18 }}
            />
          </Box>

          {/* Projects Icon */}
          <Box
            component="button"
            sx={{
              width: 40,
              height: 40,
              borderRadius: "100%",
              bgcolor: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              p: 0,
              cursor: "pointer",
              "&:hover": { bgcolor: "rgba(0,0,0,0.04)" },
            }}
          >
            <Box
              component="img"
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c6ac1a55-66a4-4b4c-b9ce-08cadf72b30b"
              alt="Projects"
              sx={{ width: 20, height: 18 }}
            />
          </Box>

          {/* Add Icon */}
          <Box
            component="button"
            sx={{
              width: 40,
              height: 40,
              borderRadius: "100%",
              bgcolor: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              p: 0,
              cursor: "pointer",
              "&:hover": { bgcolor: "rgba(0,0,0,0.04)" },
            }}
          >
            <Box
              component="img"
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2b9cabc8-d793-4487-a5bd-a7193f38bf30"
              alt="Add"
              sx={{ width: 18, height: 20 }}
            />
          </Box>

          {/* Analytics Icon */}
          <Box
            component="button"
            sx={{
              width: 40,
              height: 40,
              borderRadius: "100%",
              bgcolor: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              p: 0,
              cursor: "pointer",
              "&:hover": { bgcolor: "rgba(0,0,0,0.04)" },
            }}
          >
            <Box
              component="img"
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ff931a65-4ea5-4d99-91ac-73cdbde61bda"
              alt="Analytics"
              sx={{ width: 17, height: 16 }}
            />
          </Box>

          {/* Security Icon */}
          <Box
            component="button"
            sx={{
              width: 40,
              height: 40,
              borderRadius: "100%",
              bgcolor: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              p: 0,
              cursor: "pointer",
              "&:hover": { bgcolor: "rgba(0,0,0,0.04)" },
            }}
          >
            <Box
              component="img"
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fd6955ba-4224-46cc-8a61-86b8e81e9d8b"
              alt="Security"
              sx={{ width: 18, height: 22 }}
            />
          </Box>

          {/* Settings Icon (Active) */}
          <Box
            sx={{
              width: 40,
              height: 40,
              p: 1,
              borderRadius: 2,
              bgcolor: "#DBD6FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/de558f1e-d244-43d5-9151-d50b6a4f0b18"
              alt="Settings"
              sx={{ width: 21.18, height: 20 }}
            />
          </Box>
        </Box>
      </Box>

      {/* User Avatar */}
      <Box
        component="img"
        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b6207d5a-03bb-4e7a-882a-e88311c73495"
        sx={{
          width: 40,
          height: 40,
          borderRadius: "50%",
        }}
        alt="User"
      />
    </Box>
  );
};

export default SideBar;
