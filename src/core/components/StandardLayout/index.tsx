import React from 'react';
import { Box } from '@mui/material';

type StandardLayoutProps = {
  children: React.ReactElement;
};

export function StandardLayout({ children }: StandardLayoutProps) {
  return (
    <Box 
      sx={{
        margin: 'auto',
        p: 2,
        maxWidth: 750,
        flexGrow: 1,
      }}>
      {children}
    </Box>
  );
}
