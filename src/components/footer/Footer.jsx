import React from 'react';
import { Box, Container, Typography, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'primary.main',
        color: 'white',
        mt: 5,
        py: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">About us</Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab vitae consectetur placeat nesciunt neque unde libero pariatur quo quasi eum?
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Contacts</Typography>
            <Typography variant="body2">
              Email: abubakrdev69@gmail.com
            </Typography>
            <Typography variant="body2">
              Telefon: +998 (90) 097 33 06
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Remarkable Adventure</Typography>
            <Link href="#" color="inherit">Home</Link><br />
            <Link href="#" color="inherit">Services</Link><br />
            <Link href="#" color="inherit">Call</Link>
          </Grid>
        </Grid>
        <Box mt={3} textAlign="center">
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} I know you love me!
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
