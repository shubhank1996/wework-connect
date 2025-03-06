import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import LinearProgress from '@mui/material/LinearProgress';

const steps = [
  'Welcome',
  'Basic Information',
  'Professional Details',
  'Skills & Interests',
  'Privacy Settings'
];

const Onboarding = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    title: '',
    company: '',
    skills: [],
    interests: [],
    privacySettings: {
      profileVisibility: 'public',
      allowProximityAlerts: true,
      showLearningProgress: true
    }
  });

  const handleNext = () => {
    setActiveStep((prevStep) => {
      const nextStep = prevStep + 1;
      setProgress((nextStep / (steps.length - 1)) * 100);
      return nextStep;
    });
  };

  const handleBack = () => {
    setActiveStep((prevStep) => {
      const nextStep = prevStep - 1;
      setProgress((nextStep / (steps.length - 1)) * 100);
      return nextStep;
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="h4" gutterBottom>
              Welcome to WeWork Connect
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Let's set up your professional profile and connect you with amazing opportunities
            </Typography>
          </Box>
        );
      case 1:
        return (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Professional Title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                required
              />
            </Grid>
          </Grid>
        );
      case 3:
        return (
          <Box sx={{ py: 2 }}>
            <Typography variant="h6" gutterBottom>
              Add your skills and interests
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              This helps us connect you with relevant professionals and opportunities
            </Typography>
            {/* Skills and interests selection will be implemented here */}
          </Box>
        );
      case 4:
        return (
          <Box sx={{ py: 2 }}>
            <Typography variant="h6" gutterBottom>
              Privacy Settings
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Control how others see and interact with your profile
            </Typography>
            {/* Privacy settings configuration will be implemented here */}
          </Box>
        );
      default:
        return null;
    }
  };

  const handleFinish = () => {
    // TODO: Submit profile data to backend
    navigate('/home');
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{ mb: 4 }}
        />
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ mt: 4 }}>
          {activeStep === steps.length ? (
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Profile setup complete!
              </Typography>
              <Button
                variant="contained"
                onClick={handleFinish}
                sx={{ mt: 2 }}
              >
                Get Started
              </Button>
            </Box>
          ) : (
            <>
              {renderStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default Onboarding;