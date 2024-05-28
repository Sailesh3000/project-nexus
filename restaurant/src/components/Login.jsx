import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ToggleButton, ToggleButtonGroup } from "@mui/material/";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import Navbar from "./Navbar"
import "./Home.css"

function Login() {
    const [formType, setFormType] = useState('Login');
    const [formValues, setFormValues] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    });
    const [formErrors, setFormErrors] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    });

    const [message, setMessage] = useState('');

    const handleFormChange = (event, newFormType) => {
        if (newFormType !== null) {
            setFormType(newFormType);
            setFormValues({
                username: '',
                password: '',
                confirmPassword: '',
            });
            setFormErrors({
                username: '',
                password: '',
                confirmPassword: '',
            });
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const validateForm = () => {
        let errors = {};
        if (!formValues.username) {
            errors.username = 'Username is required';
        }
        if (!formValues.password) {
            errors.password = 'Password is required';
        }
        if (formType === 'SignUp' && formValues.password !== formValues.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (event) => {
         event.preventDefault();
        if (validateForm()) {
            try {
                const response = await fetch(`http://localhost:3000/${formType.toLowerCase()}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formValues),
                });

                const result = await response.json();
                if (response.ok) {
                    setMessage(result.message);
                } else {
                    setMessage(result.message);
                }
            } catch (error) {
                setMessage('Error: ' + error.message);
            }
        }
    };

    return (
        <>
        <Navbar />
        <div className='home-container'>
            <div className='form-container overlay'>
                <Box sx={{ 
                    width: '450px',
                    backgroundImage: 'linear-gradient(135deg, rgba(0, 0, 0, 0.452), rgba(0, 0, 0, 0.565))',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)', 
                    borderRadius: '20px',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                    height: '550px',
                    }}>
                        <ToggleButtonGroup
                            value={formType}
                            onChange={handleFormChange}
                            exclusive
                            aria-label="Platform"
                            sx={{ 
                                '& .MuiToggleButton-root': {
                                    fontSize: '20px',
                                    width: '227px',
                                    backgroundColor: '#03a9f4',
                                    color: 'white',
                                    '&.Mui-selected': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                        }
                                    },
                                    '&:hover': {
                                        backgroundColor: '#039be5',
                                    }
                                }
                            }}
                        >
                            <ToggleButton value="Login"><Typography>Login</Typography></ToggleButton>
                            <ToggleButton value="SignUp"><Typography>Signup</Typography></ToggleButton>
                        </ToggleButtonGroup>
                        <form onSubmit={handleSubmit}>
                            <Typography variant='h4' color="white" gutterBottom sx={{marginTop: '45px'}}>
                                {formType.toUpperCase()}
                            </Typography>
                            <TextField
                                required
                                name="username"
                                label="Username"
                                value={formValues.username}
                                onChange={handleInputChange}
                                error={!!formErrors.username}
                                helperText={formErrors.username}
                                InputLabelProps={{ style: { color: 'white' } }}
                                InputProps={{
                                    style: { color: 'white' },
                                    sx: {
                                        '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                                        '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' }
                                    }
                                }}
                                sx={{ width: '350px', marginTop: '50px' }}
                            />
                            <TextField
                                required
                                name="password"
                                label="Password"
                                type="password"
                                value={formValues.password}
                                onChange={handleInputChange}
                                error={!!formErrors.password}
                                helperText={formErrors.password}
                                sx={{ marginTop: '25px', width: '350px' }}
                                InputLabelProps={{ style: { color: 'white' } }}
                                InputProps={{
                                    style: { color: 'white' },
                                    sx: {
                                        '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                                        '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' }
                                    }
                                }}
                            />
                            {formType === 'SignUp' && (
                                <TextField
                                    required
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    type="password"
                                    value={formValues.confirmPassword}
                                    onChange={handleInputChange}
                                    error={!!formErrors.confirmPassword}
                                    helperText={formErrors.confirmPassword}
                                    sx={{ marginTop: '25px', width: '350px' }}
                                    InputLabelProps={{ style: { color: 'white' } }}
                                    InputProps={{
                                        style: { color: 'white' },
                                        sx: {
                                            '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                                            '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' }
                                        }
                                    }}
                                />
                            )}
                            <div className="mt-12">
                                <Button variant="contained" size="medium" type="submit">
                                    {formType}
                                </Button>
                            </div>
                            {message && (
                        <Typography variant="body1" color="white" sx={{ marginTop: '20px' }}>
                            {message}
                        </Typography>
                            )}
                        </form>
                </Box>
            </div>
        </div>
        </>
    );
}

export default Login;
