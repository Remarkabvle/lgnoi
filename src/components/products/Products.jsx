import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'Milk', description: 'This is a great product.', image: 'https://source.unsplash.com/random' },
  { id: 2, name: 'Bread', description: 'This is another great product.', image: 'https://source.unsplash.com/random' },
  { id: 3, name: 'Eggs ', description: 'This is yet another great product.', image: 'https://source.unsplash.com/random' },
  { id: 4, name: 'Apples ', description: 'This is a great product.', image: 'https://source.unsplash.com/random' },
  { id: 5, name: 'Chicken Breasts  ', description: 'This is another great product.', image: 'https://source.unsplash.com/random' },
  { id: 6, name: 'Cereal ', description: 'This is yet another great product.', image: 'https://source.unsplash.com/random' },
  { id: 7, name: 'Pasta ', description: 'This is a great product.', image: 'https://source.unsplash.com/random' },
  { id: 8, name: 'Toilet Paper ', description: 'This is another great product.', image: 'https://source.unsplash.com/random' },
  { id: 9, name: 'Apples ', description: 'This is yet another great product.', image: 'https://source.unsplash.com/random' },
];

const Products = () => {
  return (
    <Container sx={{ my: 5 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Our Products
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              sx={{ height: '100%' }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6" component="h3">
                  {product.name}
                </Typography>
                <Typography variant="body1">
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
