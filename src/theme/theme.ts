import { useColorScheme } from 'react-native';
import { MD3LightTheme, MD3DarkTheme, useTheme } from 'react-native-paper';

export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#6A9FDC',
    secondary: '#DCA06A',
    gradient: 'linear-gradient(0deg, #6A9FDC 15.8%, #DCA06A 100%)',
    primaryDark: '#4A809A',
    primaryLight: '#DEF4FF',
    secondaryDark: '#9A704A',
    error: '#ED4337',
    success: '#3ACD40',
    warning: '#F3CD43',
    black: '#24272B',
    black75: '#55585B',
    black50: '#95979A',
    black25: '#CACBCD',
    black10: '#EBEDEF',
    black5: '#F7F9FA',
  },
};

export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#6A9FDC',
    secondary: '#DCA06A',
    gradient: 'linear-gradient(0deg, #6A9FDC 15.8%, #DCA06A 100%)',
    primaryDark: '#4A809A',
    primaryLight: '#DEF4FF',
    secondaryDark: '#9A704A',
    error: '#ED4337',
    success: '#3ACD40',
    warning: '#F3CD43',
    black: '#24272B',
    black75: '#55585B',
    black50: '#95979A',
    black25: '#CACBCD',
    black10: '#EBEDEF',
    black5: '#F7F9FA',
  },
};

const isDarkMode = useColorScheme() === 'dark';

const theme = isDarkMode ? darkTheme : lightTheme;

export type AppTheme = typeof theme;
export const useAppTheme = () => useTheme<AppTheme>(theme);
