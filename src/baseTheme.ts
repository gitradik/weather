import { createTheme } from '@mui/material/styles';

export const baseTheme = createTheme({
  status: {
    warning: '#FFFF19',
  },
  palette: {
    primary: {
      light: '#949492',
      main: '#4e4d4a',
      dark: '#464542',
      contrastText: '#fff'
    },
    secondary: {
      light: '#FF8A66',
      main: '#ff3d00',
      dark: '#CC3000',
      contrastText: '#fff'
    },
    focusArea: {
      main: '#00bcd4',
    },
    text: {
      primary: '#000000',
      secondary: '#666',
    },
  },      
  typography: {
    button: {
      textTransform: 'none'
    },
    subtitle1: {
      fontSize: '1.2rem',
    },
    subtitle2: {
      fontSize: '0.95rem',
    },
  }
});

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      warning: React.CSSProperties['color'];
    };
  }

  interface PaletteColor {
    rr?: string;
  }
  interface SimplePaletteColorOptions {
    rr?: string;
  }
  interface Palette {
    focusArea: Palette['primary'];
  }
  interface PaletteOptions {
    focusArea: PaletteOptions['primary'];
  }

  interface ThemeOptions {
    status: {
      warning: React.CSSProperties['color'];
    };
  }
}
