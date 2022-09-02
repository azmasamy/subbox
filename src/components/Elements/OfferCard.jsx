import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../../style/offers.css';

export default function OfferCard({ offer }) {
  return (
    <Card sx={{ minWidth: 400, maxWidth: 400, margin: 1 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          {offer.expiryDate}
        </Typography>
        <Typography variant='h5' component='div'>
          {offer.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          {offer.provider}
        </Typography>
        <Typography variant='body2'>{offer.description}</Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
}
