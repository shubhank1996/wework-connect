import { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Divider
} from '@mui/material';
import {
  School,
  PlayCircleOutline,
  WorkspacePremium,
  Star,
  Assessment,
  Timeline
} from '@mui/icons-material';

const SkillsDevelopment = () => {
  const [userSkills] = useState({
    currentLearning: [
      {
        id: 1,
        name: 'Advanced React Patterns',
        progress: 65,
        totalModules: 8,
        completedModules: 5
      },
      {
        id: 2,
        name: 'Cloud Architecture Fundamentals',
        progress: 40,
        totalModules: 10,
        completedModules: 4
      }
    ],
    certificates: [
      {
        id: 1,
        name: 'Full Stack Development',
        issuer: 'Tech Academy',
        date: '2024-02-15',
        score: 92
      },
      {
        id: 2,
        name: 'UI/UX Design Principles',
        issuer: 'Design Institute',
        date: '2024-01-20',
        score: 88
      }
    ],
    skillAssessments: [
      {
        id: 1,
        skill: 'JavaScript',
        level: 'Advanced',
        lastAssessed: '2024-02-01',
        score: 85
      },
      {
        id: 2,
        skill: 'System Design',
        level: 'Intermediate',
        lastAssessed: '2024-01-25',
        score: 78
      }
    ]
  });

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Skills Development Hub
      </Typography>

      <Grid container spacing={3}>
        {/* Current Learning Progress */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Current Learning Progress
              </Typography>
              {userSkills.currentLearning.map((course) => (
                <Box key={course.id} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="subtitle1">{course.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {course.completedModules}/{course.totalModules} Modules
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={course.progress}
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                    <Button
                      startIcon={<PlayCircleOutline />}
                      size="small"
                    >
                      Continue Learning
                    </Button>
                  </Box>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Quick Actions */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Quick Actions
              </Typography>
              <List>
                <ListItem button>
                  <ListItemIcon>
                    <Assessment />
                  </ListItemIcon>
                  <ListItemText
                    primary="Take Skill Assessment"
                    secondary="Evaluate your expertise"
                  />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <Timeline />
                  </ListItemIcon>
                  <ListItemText
                    primary="View Learning Path"
                    secondary="Personalized recommendations"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Certificates */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Certificates & Achievements
              </Typography>
              {userSkills.certificates.map((cert) => (
                <Box key={cert.id} sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <WorkspacePremium color="primary" sx={{ mr: 1 }} />
                    <Typography variant="subtitle1">{cert.name}</Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {cert.issuer} • {new Date(cert.date).toLocaleDateString()}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <Star sx={{ color: 'gold', mr: 0.5 }} />
                    <Typography variant="body2">
                      Score: {cert.score}%
                    </Typography>
                  </Box>
                  <Divider sx={{ mt: 2 }} />
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Skill Assessments */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Skill Assessments
              </Typography>
              {userSkills.skillAssessments.map((assessment) => (
                <Box key={assessment.id} sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="subtitle1">{assessment.skill}</Typography>
                    <Chip
                      label={assessment.level}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                      Last assessed: {new Date(assessment.lastAssessed).toLocaleDateString()}
                    </Typography>
                    <Typography variant="body2">
                      Score: {assessment.score}%
                    </Typography>
                  </Box>
                  <Divider sx={{ mt: 2 }} />
                </Box>
              ))}
              <Button
                variant="outlined"
                fullWidth
                startIcon={<Assessment />}
                sx={{ mt: 2 }}
              >
                Take New Assessment
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SkillsDevelopment;