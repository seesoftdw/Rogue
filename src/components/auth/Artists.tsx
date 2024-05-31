// Artist.tsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface ArtistProps {
  name: string;
  imgSrc: string;
  link: string;
}

const Artists: React.FC<ArtistProps> = ({ name, imgSrc, link }) => {
  return (
    <Card sx={{ boxShadow: 'none', border: 'none', width: '100%' }}>
      <Link to={link} style={{textDecoration:'none', color:'black'}}>
        <CardMedia
          component="img"
          image={imgSrc}
          alt={name}
          sx={{ boxShadow: 'none', width: { lg: '261px', md: '100%', sm: '100%', xs: '77%' }, height: { lg: '261px', md: '200px', sm: '200px', xs: '300px' }, ml: { lg: 0, md: 0, sm: 0, xs: '12%' } }}
        />
        <CardContent sx={{ pl: 0 }}>
          <Typography
            sx={{ fontWeight: 600, fontSize: { lg: '16px', md: '12px', sm: '13px', xs: '13px' } }}
            variant="body1"
            component="div"
          >
            {name}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default Artists;
