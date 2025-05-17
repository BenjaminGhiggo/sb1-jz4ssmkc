import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const COLORS = {
  // Primary palette
  primary: {
    light: '#6C63FF', 
    dark: '#8E8AFF'
  },
  // Secondary palette
  secondary: {
    light: '#00C9A7',
    dark: '#1AFFD1'
  },
  // Accent palette
  accent: {
    light: '#FF8E53', 
    dark: '#FFA97A'
  },
  // Status colors
  success: {
    light: '#4CAF50',
    dark: '#66BB6A'
  },
  warning: {
    light: '#FFC107',
    dark: '#FFCA28'
  },
  error: {
    light: '#F44336',
    dark: '#EF5350'
  },
  // Neutral colors
  black: '#000000',
  white: '#FFFFFF',
  background: {
    light: '#F8F9FA',
    dark: '#121212'
  },
  surface: {
    light: '#FFFFFF',
    dark: '#1E1E1E'
  },
  text: {
    light: {
      primary: '#212121',
      secondary: '#757575',
      disabled: '#BDBDBD'
    },
    dark: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
      disabled: '#757575'
    }
  },
  border: {
    light: '#E0E0E0',
    dark: '#424242'
  }
};

export const SIZES = {
  // font sizes
  xxs: 10,
  xs: 12,
  s: 14,
  m: 16,
  l: 18,
  xl: 20,
  xxl: 24,
  xxxl: 30,
  title: 32,
  
  // spacing (based on 8px system)
  base: 8,
  xs: 4,
  s: 8,
  m: 16,
  l: 24,
  xl: 32,
  xxl: 40,
  
  // radius
  radiusXs: 4,
  radiusS: 8,
  radiusM: 12,
  radiusL: 16,
  radiusXl: 24,
  
  // screen dimensions
  width,
  height
};

export const FONTS = {
  regular: {
    fontFamily: 'Inter-Regular',
    fontWeight: 'normal' as const,
  },
  medium: {
    fontFamily: 'Inter-Medium',
    fontWeight: '500' as const,
  },
  bold: {
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold' as const,
  },
  light: {
    fontFamily: 'Inter-Light',
    fontWeight: '300' as const,
  },
};

export const SHADOWS = {
  light: {
    small: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,
      elevation: 1,
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    large: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,
      elevation: 8,
    },
  },
  dark: {
    small: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.25,
      shadowRadius: 1.0,
      elevation: 1,
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.35,
      shadowRadius: 3.84,
      elevation: 5,
    },
    large: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.40,
      shadowRadius: 5.46,
      elevation: 10,
    },
  }
};