import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography, Container, Box } from '@mui/material';
import backgroundImage from '../img/open-book-concept-fairy-tale-fiction-storytelling.jpg'; // Importez l'image d'arrière-plan

function SignupForm() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    // Traitez ici la logique de soumission du formulaire, comme appeler une API.
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`, // Utilisez l'image d'arrière-plan importée
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Assurez-vous que le conteneur prend toute la hauteur de la vue
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
            Découvrez un Monde de Newsletters Personnalisées 👾     
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
                id="name"
                label="Nom"
                name="name"
                autoComplete="name"
                autoFocus
                value={user.name}
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
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                autoComplete="current-password"
                value={user.password}
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
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default SignupForm;
