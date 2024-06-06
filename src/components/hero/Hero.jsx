import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      sx={{
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Typography variant="h2" component="h1">
        Welcome to My Amazing Website
      </Typography>
    </Box>
  );
};

export default Hero;
