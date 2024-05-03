import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Card, CardContent, Typography, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 
import backgroundImage from '../img/open-book-concept-fairy-tale-fiction-storytelling.jpg'; 

function SignupForm() {
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: ''
  });
  const [registrationMessage, setRegistrationMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérifier si les champs sont remplis ou pas
    if (!user.first_name || !user.last_name || !user.email) {
      setRegistrationMessage('Veuillez remplir tous les champs obligatoires.');
      return; 
    }

    try {
      await axios.post('http://localhost:8080/signup', user);
      setRegistrationMessage('User registered successfully');
      navigate('/users'); 
    } catch (error) {
      setRegistrationMessage('Error registering user');
      console.error('Error registering user:', error);
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      style={{margin:'-8px'}}
    >
      <Container component="main" maxWidth="xs">
        <Card sx={{ boxShadow: 3 }}>
          <CardContent>
            <Typography component="h1" variant="h5" style={{ marginTop: '20px' }}>
            Découvrez un Monde de <u>Newsletters</u> Personnalisées 👾     
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="first_name"
                label="Prénom"
                name="first_name"
                autoComplete="first_name"
                autoFocus
                value={user.first_name}
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="last_name"
                label="Nom"
                name="last_name"
                autoComplete="last_name"
                autoFocus
                value={user.last_name}
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Adresse Email"
                name="email"
                autoComplete="email"
                value={user.email}
                onChange={handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{backgroundColor:'#d3874f'}}
              >
                S'inscrire
              </Button>
              {registrationMessage && (
                <Typography variant="body2" color={registrationMessage.includes('successfully') ? 'success' : 'error' }>{registrationMessage}</Typography>
              )}
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default SignupForm;