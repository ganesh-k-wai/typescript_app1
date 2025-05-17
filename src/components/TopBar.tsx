import React from "react";
import { Box, Paper } from "@mui/material";

const TopBar: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 50,
        display: "flex",
        flexDirection: "column",
        bgcolor: "transparent",
        zIndex: 2,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          height: 50,
          bgcolor: "#fff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "none",
          borderBottom: "1px solid #E5E7EB",
          padding: "0 24px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component="img"
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b7a0239e-178b-4a53-99cf-9f1a5e1b7a5d"
            alt="Menu"
            sx={{
              width: 18,
              height: 12,
              cursor: "pointer",
            }}
          />
        </Box>

        <Box
          component="button"
          sx={{
            color: "#449E40",
            border: "1px solid rgba(68,158,64,0.5)",
            borderRadius: "4px",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "20px",
            px: "18px",
            py: "6px",
            background: "transparent",
            cursor: "pointer",
            "&:hover": {
              borderColor: "#449E40",
              backgroundColor: "rgba(68,158,64,0.04)",
            },
          }}
        >
          Apply Configuration
        </Box>
      </Paper>
    </Box>
  );
};

export default TopBar;
