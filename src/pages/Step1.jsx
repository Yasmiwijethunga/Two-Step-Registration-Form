import React from 'react';
import { TextField, Grid } from '@mui/material';

const customInputStyles = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '15px',
    backgroundColor: '#f0f4f8',
    '& fieldset': {
      borderColor: '#ccc',
    },
    '&:hover fieldset': {
      borderColor: '#4b2ae0',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#24c6dc',
      borderWidth: '2px',
    },
  },
};

const Step1 = ({ formData, setFormData, errors }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Full Name"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          error={!!errors.fullName}
          helperText={errors.fullName}
          sx={customInputStyles}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          error={!!errors.email}
          helperText={errors.email}
          sx={customInputStyles}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Phone (Optional)"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          sx={customInputStyles}
        />
      </Grid>
    </Grid>
  );
};

export default Step1;
