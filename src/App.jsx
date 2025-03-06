import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CircularProgress, Box } from '@mui/material';

const Onboarding = lazy(() => import('./components/Onboarding/Onboarding'));
const Home = lazy(() => import('./components/Home/Home'));
const ProximityNetwork = lazy(() => import('./components/ProximityNetwork/ProximityNetwork'));
const Profile = lazy(() => import('./components/Profile/Profile'));
const SkillsDevelopment = lazy(() => import('./components/Skills/SkillsDevelopment'));
const Community = lazy(() => import('./components/Community/Community'));

const LoadingFallback = () => (
  <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
    <CircularProgress />
  </Box>);

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="/home" element={<Home />} />
            <Route path="/proximity" element={<ProximityNetwork />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/skills" element={<SkillsDevelopment />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  )
}

export default App
