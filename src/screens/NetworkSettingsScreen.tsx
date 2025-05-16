import React from "react";
import {
  Box,
  Paper,
  Typography,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import TextField from "@mui/material/TextField";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GeneveBridge from "../components/GeneveBridge";

const NetworkSettingsScreen: React.FC = () => {
  const [tabValue, setTabValue] = React.useState(0);
  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",

        flexDirection: "column",

        height: "100vh",

        width: "100vw",

        bgcolor: "#fff",

        // overflow: 'hidden'
      }}
    >
      {/* Top Navbar */}

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

      <Box sx={{ display: "flex", flexGrow: 1, height: "calc(100% - 50px)" }}>
        {/* Side Navbar */}

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

        {/* Main content area */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            overflow: "hidden",
          }}
        >
          <Box sx={{ p: 4, flexGrow: 1, overflow: "auto" }}>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Stack spacing={2}>
                  <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                  >
                    <Typography color="text.primary">Settings</Typography>

                    <Typography color="text.primary">Networking</Typography>

                    <Typography color="text.primary">
                      Current Setting
                    </Typography>
                  </Breadcrumbs>
                </Stack>
              </Box>

              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: "20px",

                  fontWeight: "bold",

                  color: "#4f535c",

                  padding: "0 0 8px",
                }}
              >
                Common Settings
              </Typography>
            </Box>

            <Box sx={{ width: "100%", mb: 1 }}>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                aria-label="network settings tabs"
                sx={{
                  borderBottom: 1,

                  borderColor: "divider",

                  "& .MuiTab-root": {
                    textTransform: "none",

                    fontSize: "14px",

                    fontWeight: 500,

                    color: "#6B7280",

                    "&.Mui-selected": {
                      color: "#7C50F7",
                    },
                  },

                  "& .MuiTabs-indicator": {
                    backgroundColor: "#7C50F7",
                  },
                }}
              >
                <Tab label="Customer IP Subnets" />

                <Tab label="VPN Configuration" />

                <Tab label="VRF Configuration" />

                <Tab label="---VLAN Connectivity---" />

                <Tab label="Internal IP Subnets" />
              </Tabs>
            </Box>

            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 2 }}
            >
              {/* Name Field */}

              <Box
                component="form"
                sx={{ display: "flex", flexDirection: "column", mt: 1 }}
              >
                <TextField
                  required
                  label="Name"
                  id="outlined-required-input"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#111827",
                  }}
                  fullWidth
                  defaultValue="Enter Name"
                  size="medium"
                />
              </Box>

              {/* Description and Labels Row */}

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "8fr 2fr 2fr",
                  gap: 2,
                  mt: 1,
                }}
              >
                {/* Description Field - 8 columns */}

                <Box>
                  <TextField
                    id="outlined-required-input"
                    defaultValue={"Description"}
                    size="medium"
                    placeholder="Enter Description"
                    variant="outlined"
                    fullWidth
                    label="Description"
                    sx={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "#111827",
                    }}
                  />
                </Box>

                {/* Label 1 - 2 columns */}

                <Box>
                  <TextField
                    id="outlined-required-input"
                    label="Label 1"
                    defaultValue={"-"}
                    variant="outlined"
                    fullWidth
                    size="medium"
                    sx={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "#111827",
                    }}
                  />
                </Box>

                {/* Label 2 - 2 columns */}

                <Box>
                  <TextField
                    label="Label 2"
                    defaultValue={"-"}
                    id="outlined-required-input"
                    variant="outlined"
                    fullWidth
                    size="medium"
                    sx={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "#111827",
                    }}
                  />
                </Box>
              </Box>
            </Box>

            {/* Accordion Sections */}

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Accordion
                sx={{
                  bgcolor: "#F9F9FF",

                  "&:before": {
                    display: "none",
                  },

                  boxShadow: "none",

                  border: "1px solid #E5E7EB",

                  borderRadius: "4px",

                  "&.Mui-expanded": {
                    margin: 0,
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="geneve-bridge-content"
                  id="geneve-bridge-header"
                  sx={{
                    minHeight: "8px",

                    "& .MuiAccordionSummary-content": {
                      margin: "0px 0",
                    },
                    bgcolor: "rgba(244,243,255,1)",
                    borderRadius: "4px",
                    p: "10px",
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    gap: "20px",
                  }}
                >
                  <Typography sx={{ fontWeight: 200 }}>
                    Geneve Bridge
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <GeneveBridge />
                  </Box>
                </AccordionDetails>
              </Accordion>

              <Accordion
                sx={{
                  bgcolor: "#F9F9FF",

                  "&:before": {
                    display: "none",
                  },

                  boxShadow: "none",

                  border: "1px solid #E5E7EB",

                  borderRadius: "4px",

                  "&.Mui-expanded": {
                    margin: 0,
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="xfrm-content"
                  id="xfrm-header"
                  sx={{
                    minHeight: "48px",

                    "& .MuiAccordionSummary-content": {
                      margin: "12px 0",
                    },
                  }}
                >
                  <Typography sx={{ fontWeight: 500 }}>XFRM</Typography>
                </AccordionSummary>{" "}
                <AccordionDetails sx={{ pb: 2 }}>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <GeneveBridge />
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>

          {/* clear save btn  */}

          <Box
            sx={{
              display: "flex",

              justifyContent: "flex-end",

              p: 2,

              borderTop: "1px solid #E5E7EB",

              backgroundColor: "#fff",
            }}
          >
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box
                component="button"
                sx={{
                  padding: "8px 16px",

                  borderRadius: "4px",

                  backgroundColor: "rgba(0,0,0,0.08)",

                  color: "rgba(0,0,0,0.38)",

                  border: "none",

                  fontSize: "14px",

                  fontWeight: 500,

                  cursor: "pointer",

                  "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.12)",
                  },
                }}
              >
                Clear
              </Box>

              <Box
                component="button"
                sx={{
                  padding: "8px 16px",

                  borderRadius: "4px",

                  backgroundColor: "#7C50F7",

                  color: "#fff",

                  border: "none",

                  fontSize: "14px",

                  fontWeight: 500,

                  display: "flex",

                  alignItems: "center",

                  gap: "8px",

                  cursor: "pointer",

                  "&:hover": {
                    backgroundColor: "#6d44d7",
                  },
                }}
              >
                <Box
                  component="img"
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d249b1ba-b429-414e-a3ea-39cb444d20fb"
                  alt="Check"
                  sx={{
                    width: 16,

                    height: 16,
                  }}
                />
                Save
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NetworkSettingsScreen;
