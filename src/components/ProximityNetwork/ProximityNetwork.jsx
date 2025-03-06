import { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  Box,
  Chip,
  IconButton,
  Alert,
  Snackbar
} from '@mui/material';
import {
  LocationOn,
  Message,
  PersonAdd,
  Visibility,
  VisibilityOff
} from '@mui/icons-material';

const ProximityNetwork = () => {
  const [nearbyUsers, setNearbyUsers] = useState([]);
  const [isLocationEnabled, setIsLocationEnabled] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  // Simulated nearby users data
  const mockNearbyUsers = [
    {
      id: 1,
      name: 'Alex Thompson',
      title: 'Software Engineer',
      distance: '50m away',
      skills: ['React', 'Node.js', 'AWS'],
      interests: ['Tech Startups', 'AI/ML', 'Remote Work'],
      isAnonymous: false
    },
    {
      id: 2,
      name: 'Anonymous User',
      title: 'Product Designer',
      distance: '100m away',
      skills: ['UI/UX', 'Figma', 'User Research'],
      interests: ['Design Systems', 'Accessibility'],
      isAnonymous: true
    }
  ];

  useEffect(() => {
    // Simulating location permission request
    const requestLocationPermission = async () => {
      try {
        const permission = await navigator.permissions.query({ name: 'geolocation' });
        if (permission.state === 'granted') {
          setIsLocationEnabled(true);
          setNearbyUsers(mockNearbyUsers);
        } else {
          setSnackbarMessage('Please enable location services to find nearby professionals');
          setShowSnackbar(true);
        }
      } catch (error) {
        console.error('Error requesting location permission:', error);
      }
    };

    requestLocationPermission();
  }, []);

  const handleConnect = (userId) => {
    setSnackbarMessage('Connection request sent!');
    setShowSnackbar(true);
  };

  const handleMessage = (userId) => {
    setSnackbarMessage('Opening chat...');
    setShowSnackbar(true);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Nearby Professionals
      </Typography>
      
      {!isLocationEnabled && (
        <Alert severity="info" sx={{ mb: 2 }}>
          Enable location services to discover professionals around you
        </Alert>
      )}

      <Grid container spacing={3}>
        {nearbyUsers.map((user) => (
          <Grid item xs={12} md={4} key={user.id}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar
                    sx={{
                      width: 56,
                      height: 56,
                      mr: 2,
                      bgcolor: user.isAnonymous ? 'grey.500' : 'primary.main'
                    }}
                  >
                    {user.isAnonymous ? <VisibilityOff /> : user.name[0]}
                  </Avatar>
                  <Box>
                    <Typography variant="h6">
                      {user.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {user.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
                      <LocationOn fontSize="small" color="action" />
                      <Typography variant="caption" color="text.secondary">
                        {user.distance}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Typography variant="subtitle2" gutterBottom>
                  Skills
                </Typography>
                <Box sx={{ mb: 2 }}>
                  {user.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      size="small"
                      sx={{ mr: 0.5, mb: 0.5 }}
                    />
                  ))}
                </Box>

                <Typography variant="subtitle2" gutterBottom>
                  Interests
                </Typography>
                <Box sx={{ mb: 2 }}>
                  {user.interests.map((interest) => (
                    <Chip
                      key={interest}
                      label={interest}
                      size="small"
                      variant="outlined"
                      sx={{ mr: 0.5, mb: 0.5 }}
                    />
                  ))}
                </Box>

                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button
                    variant="contained"
                    startIcon={<PersonAdd />}
                    fullWidth
                    onClick={() => handleConnect(user.id)}
                  >
                    Connect
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<Message />}
                    fullWidth
                    onClick={() => handleMessage(user.id)}
                  >
                    Message
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Snackbar
        open={showSnackbar}
        autoHideDuration={4000}
        onClose={() => setShowSnackbar(false)}
        message={snackbarMessage}
      />
    </Container>
  );
};

export default ProximityNetwork;