import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";

export default function Controls() {
  return (
    <Box
      sx={{
        width: 1560,
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          height: 40,
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Search Config"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ pr: 1 }}>
                <Box
                  component="img"
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63946f79-4503-4e6a-b400-9d4c10140953"
                  alt="search"
                  sx={{
                    width: 17.49,
                    height: 17.49,
                    opacity: 0.56,
                  }}
                />
              </InputAdornment>
            ),
            sx: {
              height: 40,
              fontFamily: "Poppins, sans-serif",
              fontSize: 14,
              fontWeight: 400,
              color: "#6D757E",
              bgcolor: "transparent",
              borderRadius: 1,
              alignItems: "center",
              pl: 0,
              pr: 0,
              "& fieldset": {
                borderColor: "rgba(0,0,0,0.23)",
                borderWidth: 1,
              },
            },
          }}
          inputProps={{
            sx: {
              fontFamily: "Poppins, sans-serif",
              fontSize: 14,
              fontWeight: 400,
              color: "#6D757E",
              height: 21,
              lineHeight: "21px",
              letterSpacing: 0,
              alignSelf: "stretch",
              p: 0,
            },
          }}
          sx={{
            width: 300,
            height: 40,
            bgcolor: "transparent",
            borderRadius: 1,
            "& .MuiOutlinedInput-root": {
              bgcolor: "transparent",
              borderRadius: 1,
              height: 40,
              alignItems: "center",
            },
            "& .MuiInputBase-input": {
              p: 0,
              display: "flex",
              alignItems: "center",
            },
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: 40,
          gap: "12px",
        }}
      >
        <IconButton
          sx={{
            bgcolor: "#D3CEFF",
            width: 32,
            height: 32,
            borderRadius: 1,
            p: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&:hover": { bgcolor: "#B6A8FF" },
          }}
        >
          <Box
            component="img"
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/894f7811-d7ad-4bed-9c52-0d5c4f49f465"
            alt="refresh"
            sx={{ width: 13.32, height: 13.33 }}
          />
        </IconButton>
        <Button
          variant="contained"
          disableElevation
          startIcon={
            <Box
              component="img"
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/02a3a8e7-116b-4163-93a6-22c4c57ec868"
              alt="delete"
              sx={{ width: 10.5, height: 13.5, opacity: 0.38 }}
            />
          }
          sx={{
            bgcolor: "#fff",
            color: "rgba(0,0,0,0.38)",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 500,
            fontSize: 13,
            lineHeight: "19.5px",
            borderRadius: 1,
            boxShadow: "none",
            px: 2.5,
            py: 0.5,
            minWidth: 0,
            height: 32,
            "&:hover": {
              bgcolor: "#f5f5f5",
              boxShadow: "none",
            },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          disableElevation
          startIcon={
            <Box
              component="img"
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1d026c3-567d-45f2-bae3-4ce55b434b8b"
              alt="export"
              sx={{ width: 14.52, height: 15.28, opacity: 0.38 }}
            />
          }
          sx={{
            bgcolor: "#fff",
            color: "rgba(0,0,0,0.38)",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 500,
            fontSize: 13,
            lineHeight: "19.5px",
            borderRadius: 1,
            boxShadow: "none",
            px: 2.5,
            py: 0.5,
            minWidth: 0,
            height: 32,
            "&:hover": {
              bgcolor: "#f5f5f5",
              boxShadow: "none",
            },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Export
        </Button>
        <Button
          variant="contained"
          disableElevation
          startIcon={
            <Box
              component="img"
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4b1442b-a91e-4fd8-8685-1617b2325c5a"
              alt="plus"
              sx={{ width: 20, height: 20 }}
            />
          }
          sx={{
            bgcolor: "#7C50F7",
            color: "#fff",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 500,
            fontSize: 15,
            lineHeight: "22.5px",
            borderRadius: 1,
            px: 5.5,
            py: 1,
            minWidth: 0,
            height: 40,
            "&:hover": {
              bgcolor: "#6939e4",
              boxShadow: "none",
            },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Apply Config
        </Button>
      </Box>
    </Box>
  );
}
