import { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Avatar,
  AvatarGroup,
  Chip,
  IconButton,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider
} from '@mui/material';
import {
  Group,
  Add,
  VisibilityOff,
  Message,
  PersonAdd,
  Public,
  Lock
} from '@mui/icons-material';

const Community = () => {
  const [circles, setCircles] = useState([
    {
      id: 1,
      name: 'Tech Innovators',
      description: 'A space for discussing emerging technologies and innovation',
      members: 128,
      isAnonymous: false,
      topics: ['AI/ML', 'Blockchain', 'IoT'],
      recentDiscussions: 15
    },
    {
      id: 2,
      name: 'Anonymous Career Growth',
      description: 'Share career experiences and advice anonymously',
      members: 256,
      isAnonymous: true,
      topics: ['Career Advice', 'Workplace', 'Leadership'],
      recentDiscussions: 32
    }
  ]);

  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [newCircle, setNewCircle] = useState({
    name: '',
    description: '',
    isAnonymous: false
  });

  const handleCreateCircle = () => {
    // TODO: Implement circle creation logic
    setShowCreateDialog(false);
  };

  const handleJoinCircle = (circleId) => {
    // TODO: Implement circle joining logic
    console.log('Joining circle:', circleId);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4">
          Community Circles
        </Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => setShowCreateDialog(true)}
        >
          Create Circle
        </Button>
      </Box>

      <Grid container spacing={3}>
        {circles.map((circle) => (
          <Grid item xs={12} md={6} key={circle.id}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar
                    sx={{
                      width: 56,
                      height: 56,
                      mr: 2,
                      bgcolor: circle.isAnonymous ? 'grey.500' : 'primary.main'
                    }}
                  >
                    {circle.isAnonymous ? <VisibilityOff /> : <Group />}
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6">
                      {circle.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {circle.isAnonymous ? (
                        <Chip
                          size="small"
                          icon={<VisibilityOff />}
                          label="Anonymous"
                          color="default"
                        />
                      ) : (
                        <Chip
                          size="small"
                          icon={<Public />}
                          label="Public"
                          color="primary"
                        />
                      )}
                      <Typography variant="body2" color="text.secondary">
                        {circle.members} members
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Typography variant="body2" color="text.secondary" paragraph>
                  {circle.description}
                </Typography>

                <Box sx={{ mb: 2 }}>
                  {circle.topics.map((topic) => (
                    <Chip
                      key={topic}
                      label={topic}
                      size="small"
                      sx={{ mr: 0.5, mb: 0.5 }}
                    />
                  ))}
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2" color="text.secondary">
                    {circle.recentDiscussions} recent discussions
                  </Typography>
                  <Button
                    variant="outlined"
                    startIcon={<PersonAdd />}
                    onClick={() => handleJoinCircle(circle.id)}
                  >
                    Join Circle
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={showCreateDialog} onClose={() => setShowCreateDialog(false)}>
        <DialogTitle>Create New Circle</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Circle Name"
            fullWidth
            value={newCircle.name}
            onChange={(e) => setNewCircle({ ...newCircle, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Description"
            fullWidth
            multiline
            rows={3}
            value={newCircle.description}
            onChange={(e) => setNewCircle({ ...newCircle, description: e.target.value })}
          />
          <Box sx={{ mt: 2 }}>
            <Button
              variant={newCircle.isAnonymous ? 'contained' : 'outlined'}
              startIcon={<VisibilityOff />}
              onClick={() => setNewCircle({ ...newCircle, isAnonymous: !newCircle.isAnonymous })}
              sx={{ mr: 1 }}
            >
              {newCircle.isAnonymous ? 'Anonymous' : 'Make Anonymous'}
            </Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowCreateDialog(false)}>Cancel</Button>
          <Button onClick={handleCreateCircle} variant="contained">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Community;