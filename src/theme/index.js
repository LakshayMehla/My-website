'use client';

import { useMemo } from 'react';
import merge from 'lodash/merge';
import PropTypes from 'prop-types';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

// system
import { palette } from './palette';
import { shadows } from './shadows';
import { typography } from './typography';
// options
import RTL from './options/right-to-left';
import { customShadows } from './custom-shadows';
import { componentsOverrides } from './overrides';
import { createPresets } from './options/presets';
import { createContrast } from './options/contrast';
import NextAppDirEmotionCacheProvider from './next-emotion-cache';

// ----------------------------------------------------------------------

export default function ThemeProvider({ children }) {
  // Default settings for portfolio
  const defaultSettings = {
    themeMode: 'light',
    themeDirection: 'ltr',
    themeContrast: 'default',
    themeColorPresets: 'default',
  };

  const presets = createPresets(defaultSettings.themeColorPresets);
  const contrast = createContrast(defaultSettings.themeContrast, defaultSettings.themeMode);

  const memoizedValue = useMemo(
    () => ({
      palette: {
        ...palette(defaultSettings.themeMode),
        ...presets.palette,
        ...contrast.palette,
      },
      customShadows: {
        ...customShadows(defaultSettings.themeMode),
        ...presets.customShadows,
      },
      direction: defaultSettings.themeDirection,
      shadows: shadows(defaultSettings.themeMode),
      shape: { borderRadius: 8 },
      typography,
    }),
    [
      defaultSettings.themeMode,
      defaultSettings.themeDirection,
      presets.palette,
      presets.customShadows,
      contrast.palette,
    ]
  );

  const theme = createTheme(memoizedValue);
  theme.components = merge(componentsOverrides(theme), contrast.components);

  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'css' }}>
      <MuiThemeProvider theme={theme}>
        <RTL themeDirection={defaultSettings.themeDirection}>
          <CssBaseline />
          {children}
        </RTL>
      </MuiThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
