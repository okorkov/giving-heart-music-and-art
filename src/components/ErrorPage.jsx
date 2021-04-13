import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function ErrorPage() {
  return (
    <div className="navbar-item" style={{justifyContent: 'center', textAlign: 'center', paddingTop: '10rem'}}>
      <Typography variant="h1" color="textSecondary" size='18'>
        Page Not Found
      </Typography>
    </div>
  )
}