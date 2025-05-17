import React from "react";
import {
  Box,
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
import XFRM from "../components/XFRM.tsx";
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";

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
      }}
    >
      {/* Top Navbar */}
      <TopBar />

      <Box sx={{ display: "flex", flexGrow: 1, height: "calc(100% - 50px)" }}>
        {/* Side Navbar */}
        <SideBar />

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
                    minHeight: "48px",
                    "& .MuiAccordionSummary-content": {
                      margin: "12px 0",
                    },
                  }}
                >
                  <Typography sx={{ fontWeight: 500 }}>
                    Geneve Bridge
                  </Typography>
                </AccordionSummary>

                <AccordionDetails sx={{ pb: 2 }}>
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
                </AccordionSummary>
                <AccordionDetails sx={{ pb: 2 }}>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <XFRM />
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
