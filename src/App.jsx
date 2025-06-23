import React, { useState } from 'react';
import {
  Box, Typography, Tabs, Tab, Alert, Button, CircularProgress
} from '@mui/material';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import { validateStep1, validateStep2 } from './utils/validation';
import { registerUser } from './services/registerService';
import { FormProvider, useForm } from './context/FormContext';
import DarkModeToggle from './components/DarkModeToggle';
import './App.css';

const AppContent = () => {
  const [darkMode, setDarkMode] = useState(false);

  const {
    formData, setFormData,
    step, setStep,
    errors, setErrors,
    successMsg, setSuccessMsg,
    loading, setLoading
  } = useForm();


const handleNext = async () => {
  if (step === 0) {
    const errs = validateStep1(formData);
    if (Object.keys(errs).length > 0) return setErrors(errs);
    setErrors({});
    setStep(1);
  } else {
    const errs = validateStep2(formData);
    if (Object.keys(errs).length > 0) return setErrors(errs);
    setErrors({});
    setLoading(true);
    try {
      await registerUser(formData);

      // ✅ Show success message
      setSuccessMsg('🎉 Registration Successful!');

      // ✅ Show success in Step 2 before navigating back
      setTimeout(() => {
        setFormData({
          fullName: '', email: '', phone: '',
          password: '', confirmPassword: ''
        });
        setStep(0);
        setSuccessMsg(''); // clear after going back
      }, 3000); // wait 3 seconds
    } catch (err) {
      setErrors({ submit: err.message || 'Registration failed' });
    } finally {
      setLoading(false);
    }
  }
};


  return (
    <div className={`registration-wrapper ${darkMode ? 'dark' : ''}`}>
      {/* LEFT PANEL */}
      <Box className="left-panel">
        <h2>Welcome</h2>
        <p>You're just moments away from unlocking new possibilities!!</p>
        <h3>Registration</h3>
      </Box>

      {/* RIGHT PANEL */}
      <Box className="right-panel">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h5" className="form-title">Two-Step Registration</Typography>
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </Box>

        <Tabs value={step} variant="fullWidth" sx={{ marginBottom: 2 }} disabled>
          <Tab label="Personal Information" />
          <Tab label="Security" />
        </Tabs>

        <Box className="form-animated">
          {step === 0 ? (
            <Step1 formData={formData} setFormData={setFormData} errors={errors} />
          ) : (
            <Step2 formData={formData} setFormData={setFormData} errors={errors} />
          )}
        </Box>

        {errors.submit && (
          <Alert severity="error" sx={{ mt: 2 }}>{errors.submit}</Alert>
        )}

        <Box
          sx={{
            mt: 3,
            display: 'flex',
            justifyContent: step === 0 ? 'flex-end' : 'space-between',
          }}
        >
          {step === 1 && (
            <Button
              variant="outlined"
              onClick={() => {
                setStep(0);
                setSuccessMsg(''); 
              }}
              disabled={loading}
              sx={{ textTransform: 'capitalize' }}
            >
              Back
            </Button>
          )}

          <Button
            variant="contained"
            onClick={handleNext}
            disabled={loading}
            sx={{ textTransform: 'capitalize', minWidth: 120 }}
          >
            {loading ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              step === 0 ? 'Next' : 'Submit'
            )}
          </Button>
        </Box>


        {successMsg && (
  <Alert severity="success" sx={{ mt: 2 }}>
    {successMsg}
  </Alert>
)}

      </Box>
    </div>
  );
};

const App = () => (
  <FormProvider>
    <AppContent />
  </FormProvider>
);

export default App;
