import {
  Box,
  Typography,
  Divider,
  TextField,
  InputAdornment,
} from "@mui/material";

export default function GeneveBridge() {
  return (
    <Box
      sx={{
        bgcolor: "rgba(244,243,255,1)",
        borderRadius: "4px",
        p: "10px",
        width: "100%",
        minHeight: "806px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          minHeight: "24px",
        }}
      > */}
      {/* <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "24px",
            color: "rgba(36,36,36,1)",
            textAlign: "left",
            alignSelf: "stretch",
          }}
        >
          Geneve Bridge
        </Typography> */}
      {/* <Box
          sx={{
            width: 24,
            height: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: "rotate(180deg)",
          }}
        >
          <img
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7988ef12-3d66-4ba0-aafb-b43ee1e1ae23"
            alt=""
            style={{ width: 10, height: 5, opacity: 0.56 }}
          />
        </Box> */}
      {/* </Box> */}
      <Box
        sx={{
          bgcolor: "rgba(219,214,254,1)",
          borderRadius: "4px",
          p: "5px",
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
            IPV4 Routing*
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
            CIDR Address
          </Typography>
          <Box sx={{ width: "100%", position: "relative" }}>
            <TextField
              fullWidth
              placeholder="Enter IPV4 Subnet"
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
                IPV4 Subnet
              </Typography>
            </Box>
          </Box>
        </Box>
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
            IP Address Range
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              gap: "12px",
            }}
          >
            <Box sx={{ width: "50%", position: "relative" }}>
              <TextField
                fullWidth
                placeholder="Enter Start IPV4 Address"
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
                    textAlign: "left",
                  }}
                >
                  Start IPV4 Address
                </Typography>
              </Box>
            </Box>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "24px",
                color: "rgba(36,36,36,1)",
                textAlign: "left",
                alignSelf: "center",
              }}
            >
              to
            </Typography>
            <Box sx={{ width: "50%", position: "relative" }}>
              <TextField
                fullWidth
                placeholder="Enter End IPV4 Address"
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
                  endAdornment: (
                    <InputAdornment position="end" sx={{ pr: 0 }}>
                      <img
                        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/27dca040-85f8-4433-8257-def9ff78b9fe"
                        alt=""
                        style={{ width: 20, height: 20, opacity: 0.56 }}
                      />
                    </InputAdornment>
                  ),
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
                    textAlign: "left",
                  }}
                >
                  End IPV4 Address
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
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
            IPV6 Routing
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
            CIDR Address
          </Typography>
          <Box sx={{ width: "100%", position: "relative" }}>
            <TextField
              fullWidth
              placeholder="Enter IPV6 Subnet"
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
                IPV6 Subnet
              </Typography>
            </Box>
          </Box>
        </Box>
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
            IP Address Range
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              gap: "12px",
            }}
          >
            <Box sx={{ width: "50%", position: "relative" }}>
              <TextField
                fullWidth
                placeholder="Enter Start IPV6 Address"
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
                    textAlign: "left",
                  }}
                >
                  Start IPV6 Address
                </Typography>
              </Box>
            </Box>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "24px",
                color: "rgba(36,36,36,1)",
                textAlign: "left",
                alignSelf: "center",
              }}
            >
              to
            </Typography>
            <Box sx={{ width: "50%", position: "relative" }}>
              <TextField
                fullWidth
                placeholder="Enter End IPV6 Address"
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
                  endAdornment: (
                    <InputAdornment position="end" sx={{ pr: 0 }}>
                      <img
                        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7244c086-fe9f-4929-b810-c01796a094ea"
                        alt=""
                        style={{ width: 20, height: 20, opacity: 0.56 }}
                      />
                    </InputAdornment>
                  ),
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
                    textAlign: "left",
                  }}
                >
                  End IPV6 Address
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: "rgba(244,243,255,1)",
          borderRadius: "4px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <Box sx={{ width: "100%", position: "relative" }}>
          <TextField
            fullWidth
            placeholder="10"
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
                textAlign: "left",
              }}
            >
              Maximum Transfer Unit (Bytes)
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
