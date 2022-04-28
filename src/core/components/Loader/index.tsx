import React from 'react';
import { CircularProgress, Grid } from '@mui/material';

export type LoaderProps = {
  isLoading: boolean;
  fallback?: React.ReactElement;
  children: React.ReactElement;
};

function DefaultLoaderFallback() {
  return (
    <Grid container alignContent="center" justifyContent="center">
      <Grid item xs={12} textAlign="center">
        <CircularProgress />
      </Grid>
    </Grid>
  );
}

export function Loader({ isLoading = false, fallback = <DefaultLoaderFallback />, children }: LoaderProps) {
  return isLoading ? fallback : children;
}
