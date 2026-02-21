import 'src/global.css';

import { useEffect } from 'react';

import { Box } from '@mui/material';

import { usePathname } from 'src/routes/hooks';

import { ThemeProvider } from 'src/theme/theme-provider';

import { APP_DIRECTION } from './utils/constants';

// ----------------------------------------------------------------------

type AppProps = {
  children: React.ReactNode;
};

export default function App({ children }: AppProps) {
  useScrollToTop();
  return (
    <ThemeProvider
      themeOverrides={{
        direction: APP_DIRECTION,
        palette: {
          mode: 'dark',
        },
      }}
    >
      <Box sx={{ direction: APP_DIRECTION }}>{children}</Box>
    </ThemeProvider>
  );
}

// ----------------------------------------------------------------------

function useScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
