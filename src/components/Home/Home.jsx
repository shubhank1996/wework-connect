import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Avatar,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  LinearProgress
} from '@mui/material';
import {
  LocationOn,
  Message,
  Group,
  School,
  Person,
  Dashboard as DashboardIcon
} from '@mui/icons-material';

const Home = () => {
  const navigate = useNavigate();
  const [selectedNav, setSelectedNav] = useState('home');

  const navigationItems = [
    { icon: <DashboardIcon />, label: 'Home', value: 'home', path: '/home' },
    { icon: <LocationOn />, label: 'Proximity', value: 'proximity', path: '/proximity' },
    { icon: <Group />, label: 'Community', value: 'community', path: '/community' },
    { icon: <School />, label: 'Skills', value: 'skills', path: '/skills' },
    { icon: <Person />, label: 'Profile', value: 'profile', path: '/profile' }
  ];

  const nearbyProfessionals = [
    {
      id: 1,
      name: 'Alex Thompson',
      title: 'Software Engineer',
      distance: '50m away',
      skills: ['React', 'Node.js']
    },
    {
      id: 2,
      name: 'Maya Chen',
      title: 'UX Designer',
      distance: '100m away',
      skills: ['UI/UX', 'Figma']
    }
  ];

  const activeCommunities = [
    {
      id: 1,
      name: 'Tech Innovators',
      members: 128,
      newPosts: 5
    },
    {
      id: 2,
      name: 'Career Growth',
      members: 256,
      newPosts: 12
    }
  ];

  const skillsProgress = [
    {
      name: 'Advanced React Patterns',
      progress: 65,
      remaining: '2 modules left'
    },
    {
      name: 'Cloud Architecture',
      progress: 40,
      remaining: '4 modules left'
    }
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            WeWork Connect
          </Typography>
          {navigationItems.map((item) => (
            <IconButton
              key={item.value}
              color={selectedNav === item.value ? 'secondary' : 'inherit'}
              onClick={() => {
                setSelectedNav(item.value);
                navigate(item.path);
              }}
            >
              {item.icon}
            </IconButton>
          ))}
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* Spacing for fixed AppBar */}

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          {/* Nearby Professionals */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Nearby Professionals
                </Typography>
                <List>
                  {nearbyProfessionals.map((pro) => (
                    <ListItem key={pro.id}>
                      <ListItemAvatar>
                        <Avatar>{pro.name[0]}</Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={pro.name}
                        secondary={
                          <Box>
                            <Typography variant="body2" color="text.secondary">
                              {pro.title} • {pro.distance}
                            </Typography>
                            <Box sx={{ mt: 1 }}>
                              {pro.skills.map((skill) => (
                                <Chip
                                  key={skill}
                                  label={skill}
                                  size="small"
                                  sx={{ mr: 0.5 }}
                                />
                              ))}
                            </Box>
                          </Box>
                        }
                      />
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<Message />}
                      >
                        Connect
                      </Button>
                    </ListItem>
                  ))}
                </List>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => navigate('/proximity')}
                >
                  View All Nearby Professionals
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Active Communities */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Active Communities
                </Typography>
                <List>
                  {activeCommunities.map((community) => (
                    <ListItem key={community.id}>
                      <ListItemAvatar>
                        <Avatar>
                          <Group />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={community.name}
                        secondary={`${community.members} members • ${community.newPosts} new posts`}
                      />
                      <Button
                        variant="outlined"
                        size="small"
                      >
                        View
                      </Button>
                    </ListItem>
                  ))}
                </List>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => navigate('/community')}
                >
                  Explore All Communities
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Skills Progress */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Skills Development
                </Typography>
                <Grid container spacing={2}>
                  {skillsProgress.map((skill) => (
                    <Grid item xs={12} md={6} key={skill.name}>
                      <Card variant="outlined">
                        <CardContent>
                          <Typography variant="subtitle1" gutterBottom>
                            {skill.name}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Box sx={{ flexGrow: 1 }}>
                              <LinearProgress
                                variant="determinate"
                                value={skill.progress}
                                sx={{ height: 8, borderRadius: 4 }}
                              />
                            </Box>
                            <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>
                              {skill.progress}%
                            </Typography>
                          </Box>
                          <Typography variant="body2" color="text.secondary">
                            {skill.remaining}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => navigate('/skills')}
                  sx={{ mt: 2 }}
                >
                  View All Skills
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;