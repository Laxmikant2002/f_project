import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import CoverPage from "./screens/CoverPage";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import AdminDashboardScreen from "./screens/AdminDashboard";
import VoterListScreen from "./screens/VoterList";
import ResultScreen from "./screens/Result";
import SecurityAuditScreen from "./screens/SecurityAudit";
import Feedback from "./screens/Feedback";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#4a148c',
    },
    secondary: {
      main: '#ff6f00',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
        {/* Authenticated Routes */}
        <Route element={<Navbar />}>
          <Route path="/home" element={<Home />} />
          <Route path="/admin-dashboard" element={<AdminDashboardScreen />} />
          <Route path="/voter-list" element={<VoterListScreen />} />
          <Route path="/results" element={<ResultScreen />} />
          <Route path="/security-audit" element={<SecurityAuditScreen />} />
          <Route path="/feedback" element={<Feedback />} />
        </Route>
        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;