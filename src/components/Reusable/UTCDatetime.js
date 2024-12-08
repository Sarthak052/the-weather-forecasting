import { Typography } from '@mui/material';
import React from 'react';
import { getUTCDatetime } from '../../utilities/DatetimeUtils';

const ISTDatetime = () => {
  const getISTDatetime = () => {
    const utcDate = new Date(getUTCDatetime()); // Get UTC datetime
    const istOffset = 5.5 * 60; // IST offset in minutes (UTC + 5:30)
    
    // Adjust the date object for IST
    utcDate.setMinutes(utcDate.getMinutes() + istOffset);
    
    return utcDate.toISOString().replace('T', ' ').substring(0, 19); // Format as 'YYYY-MM-DD HH:MM:SS'
  };

  const istFullDate = getISTDatetime();
  
  const istTimeValue = (
    <Typography
      variant="h3"
      component="h3"
      sx={{
        fontWeight: '400',
        fontSize: { xs: '10px', sm: '12px' },
        color: 'rgba(255, 255, 255, .7)',
        lineHeight: 1,
        paddingRight: '2px',
        fontFamily: 'Poppins',
      }}
    >
      {istFullDate} IST
    </Typography>
  );

  return istTimeValue;
};

export default ISTDatetime;
