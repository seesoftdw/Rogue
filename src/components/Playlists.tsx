// Release.tsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface ReleaseProps {
  title: string;
  artist: string;
  imgSrc: string;
}

const Release: React.FC<ReleaseProps> = ({ title, artist, imgSrc }) => {
  return (
    <Card sx={{boxShadow:'none',border:'none'}}>
      <CardMedia
        component="img"
        height="150"
        image={imgSrc}
        alt={title}
      />
      <CardContent>
        <Typography variant="body1" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          {artist}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Release;
