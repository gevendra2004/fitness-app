import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Typography display="flex" gap="20px" sx={{ fontSize: { lg: '20px', xs: '10px' } }}>
      <p>Instagram</p>
      <p>GitHub</p>
      <p>FaceBook</p>
      <p>About Us</p>
      <p>Contact Us</p>
    </Typography>
    <Typography variant="h5" sx={{ fontSize: { lg: '16px', xs: '8px' } }} mt="41px" textAlign="center" pb="40px">© 2024 Copyright: Gevstack team</Typography>

  </Box>
);

export default Footer;
