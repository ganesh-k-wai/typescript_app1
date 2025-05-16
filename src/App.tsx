import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

// Import components
import NetworkSettingsScreen from "./screens/NetworkSettingsScreen";

// Create theme with Poppins font
const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
      `,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ height: "100vh", overflow: "hidden" }}>
        <NetworkSettingsScreen />
      </div>
    </ThemeProvider>
  );
}

export default App;
