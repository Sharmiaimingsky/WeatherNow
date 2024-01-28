import { Typography } from '@mui/material';
import React from 'react';
import { getUTCDatetime } from '../../utilities/DatetimeUtils';

const UTCDatetime = () => {
  const utcFullDate = getUTCDatetime();
  const utcTimeValue = (
    <Typography
      variant="h3"
      component="h3"
      sx={{
        fontWeight: '400',
        fontSize: { xs: '17px', sm: '18px' },
        color: 'rgba(255, 255, 255, .7)',
        lineHeight: 1,
        paddingRight: '46px',
        alignItems: 'center',
        fontFamily: 'Poppins',
      }}
    >
      {utcFullDate} GMT
    </Typography>
  );
  return utcTimeValue;
};

export default UTCDatetime;
