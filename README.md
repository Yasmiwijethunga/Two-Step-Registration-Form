## Two-Step Registration Form (Frontend)
    This is a frontend-only React application for a two-step registration process.

## Features 

- Two-step registration form (Step 1: Personal Info, Step 2: Security)
- Client-side form validation with inline error messages
- Dark mode toggle
- Loading indicator during form submission
- Success message upon registration
- Modular folder structure with clean code practices
- Responsive design with modern styling

## Project Structure 
    src/
├── api/ # Axios instance setup
├── components/ # UI components like toggle
├── context/ # React Context for form state
├── pages/ # Step1 and Step2 forms
├── services/ # API call for registration
├── utils/ # Validation logic
├── App.jsx # Main application logic
├── App.css # Styling

## Setup Instructions

    1. **Clone the Repository**
   ```bash
   git clone https://github.com/Yasmiwijethunga/Two-Step-Registration-Form

   cd Two-Step-registration-form

## Install Dependencies
    npm install

## Create .env File
    REACT_APP_API_BASE_URL=https://jsonplaceholder.typicode.com

## Run the app
    npm start
    Then app will run at http://localhost:3000/


----Assumptions/Decisions------

No backend provided, so a fake API (jsonplaceholder.typicode.com) is used to simulate a POST request.

No data is actually stored or authenticated.

Password visibility and error handling are handled at the frontend only.

Dark mode is applied using conditional CSS classes.



-----Technologies Used-----

React (Hooks + Context API)

Material-UI (MUI) for UI components

Axios for API calls

CSS for styling

.env for environment configuration