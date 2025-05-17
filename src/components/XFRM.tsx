import {
  Box,
  Typography,
  Divider,
  TextField,
  InputAdornment,
} from "@mui/material";

export default function XFRM() {
  return (
    <Box
      sx={{
        bgcolor: "rgba(244,243,255,1)",
        borderRadius: "4px",
        p: "10px",
        width: "100%",
        minHeight: "300px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Box
        sx={{
          bgcolor: "rgba(219,214,254,1)",
          borderRadius: "4px",
          p: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            pl: "16px",
            pr: "16px",
            minHeight: "24px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: 16,
              lineHeight: "24px",
              color: "rgba(36,36,36,1)",
              textAlign: "left",
              alignSelf: "stretch",
            }}
          >
            XFRM Settings
          </Typography>
        </Box>
        <Divider sx={{ bgcolor: "rgba(0,0,0,0.12)", height: 1 }} />
        <Box
          sx={{
            border: "1px solid #bdbdbd",
            borderRadius: "4px",
            p: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: 14,
              lineHeight: "21px",
              color: "rgba(36,36,36,1)",
              textAlign: "left",
              alignSelf: "stretch",
            }}
          >
            Configuration
          </Typography>
          <Box sx={{ width: "100%", position: "relative" }}>
            <TextField
              fullWidth
              placeholder="Enter XFRM Configuration"
              variant="outlined"
              InputProps={{
                sx: {
                  fontFamily: "Poppins",
                  fontSize: 16,
                  color: "rgba(109,117,126,1)",
                  p: 0,
                  height: 56,
                  bgcolor: "#fff",
                  borderRadius: "4px",
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#fff",
                  borderRadius: "4px",
                  px: "12px",
                  py: 0,
                  minHeight: 56,
                  fontFamily: "Poppins",
                  fontSize: 16,
                },
                "& .MuiInputLabel-root": { display: "none" },
              }}
            />
            <Box
              sx={{
                position: "absolute",
                left: 12,
                top: -18,
                bgcolor: "rgba(240,239,255,1)",
                px: "4px",
                borderRadius: "4px",
                height: 18,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: 12,
                  lineHeight: "18px",
                  color: "rgba(109,117,126,1)",
                  bgcolor: "rgba(240,239,255,1)",
                  textAlign: "left",
                }}
              >
                XFRM Configuration
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
