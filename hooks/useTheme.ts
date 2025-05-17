import { useColorScheme } from 'react-native';
import { COLORS, FONTS, SIZES, SHADOWS } from '../constants/theme';

export default function useTheme() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  
  // Helper function to get the appropriate color based on the theme
  const getColor = (colorKey: keyof typeof COLORS) => {
    if (typeof COLORS[colorKey] === 'object' && 'light' in COLORS[colorKey] && 'dark' in COLORS[colorKey]) {
      return isDark ? COLORS[colorKey].dark : COLORS[colorKey].light;
    }
    return COLORS[colorKey];
  };
  
  // For text colors which have more complex structure
  const getTextColor = (type: 'primary' | 'secondary' | 'disabled' = 'primary') => {
    return isDark ? COLORS.text.dark[type] : COLORS.text.light[type];
  };
  
  // Get border color
  const getBorderColor = () => {
    return isDark ? COLORS.border.dark : COLORS.border.light;
  };
  
  // Get background color
  const getBackgroundColor = () => {
    return isDark ? COLORS.background.dark : COLORS.background.light;
  };
  
  // Get surface color
  const getSurfaceColor = () => {
    return isDark ? COLORS.surface.dark : COLORS.surface.light;
  };
  
  // Get shadow style
  const getShadow = (size: 'small' | 'medium' | 'large' = 'medium') => {
    return isDark ? SHADOWS.dark[size] : SHADOWS.light[size];
  };
  
  return {
    isDark,
    colors: {
      primary: getColor('primary'),
      secondary: getColor('secondary'),
      accent: getColor('accent'),
      success: getColor('success'),
      warning: getColor('warning'),
      error: getColor('error'),
      background: getBackgroundColor(),
      surface: getSurfaceColor(),
      text: {
        primary: getTextColor('primary'),
        secondary: getTextColor('secondary'),
        disabled: getTextColor('disabled'),
      },
      border: getBorderColor(),
      black: COLORS.black,
      white: COLORS.white,
    },
    fonts: FONTS,
    sizes: SIZES,
    getShadow,
  };
}