import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(0);
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <FormContext.Provider
      value={{
        formData, setFormData,
        errors, setErrors,
        step, setStep,
        successMsg, setSuccessMsg,
        loading, setLoading
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);
