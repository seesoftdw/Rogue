// Release.tsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface ReleaseProps {
  title: string;
  artist: string;
  imgSrc: string;
}

const Playlists: React.FC<ReleaseProps> = ({ title, artist, imgSrc }) => {
  return (
    <Card sx={{ boxShadow: 'none', border: 'none', width: '100%' }}>
      <CardMedia
        height="261px"
        component="img"
        image={imgSrc}
        alt={title}
        sx={{ boxShadow: 'none', width: { lg: '261px', md: '100%', sm: '100%', xs: '77%' }, height: { lg: '261px', md: '200px', sm: '200px', xs: '300px' }, ml: { lg: 0, md: 0, sm: 0, xs: '12%' } }}
      />
      <CardContent sx={{ pl: 0 }}>
        <Typography variant="body1" component="div" sx={{ fontWeight: 600, fontSize: { lg: '16px', md: '12px', sm: '13px', xs: '13px' } }}>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div" sx={{ pl: 0 }}>
          {artist}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Playlists;
