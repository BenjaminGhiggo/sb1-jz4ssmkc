import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import useTheme from '@/hooks/useTheme';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
} from 'react-native-reanimated';

export default function Spinners() {
  const { colors, sizes, fonts } = useTheme();
  
  // Animation values
  const rotation1 = useSharedValue(0);
  const rotation2 = useSharedValue(0);
  const rotation3 = useSharedValue(0);
  const pulse = useSharedValue(1);
  const dot1Opacity = useSharedValue(0.3);
  const dot2Opacity = useSharedValue(0.3);
  const dot3Opacity = useSharedValue(0.3);
  
  useEffect(() => {
    // Spinning animation
    rotation1.value = withRepeat(
      withTiming(360, { duration: 1000, easing: Easing.linear }),
      -1, // Infinite repeat
      false // Don't reverse
    );
    
    rotation2.value = withRepeat(
      withTiming(360, { duration: 1500, easing: Easing.bezier(0.1, 0.7, 1.0, 0.1) }),
      -1,
      false
    );
    
    rotation3.value = withRepeat(
      withTiming(360, { duration: 800, easing: Easing.linear }),
      -1,
      false
    );
    
    // Pulsing animation
    pulse.value = withRepeat(
      withTiming(1.2, { duration: 800, easing: Easing.inOut(Easing.ease) }),
      -1,
      true // Reverse
    );
    
    // Dots animation sequence
    function animateDots() {
      dot1Opacity.value = withTiming(1, { duration: 400 });
      setTimeout(() => {
        dot1Opacity.value = withTiming(0.3, { duration: 400 });
        dot2Opacity.value = withTiming(1, { duration: 400 });
      }, 400);
      setTimeout(() => {
        dot2Opacity.value = withTiming(0.3, { duration: 400 });
        dot3Opacity.value = withTiming(1, { duration: 400 });
      }, 800);
      setTimeout(() => {
        dot3Opacity.value = withTiming(0.3, { duration: 400 });
      }, 1200);
    }
    
    // Start the dots animation and repeat it
    animateDots();
    const interval = setInterval(animateDots, 1600);
    
    return () => clearInterval(interval);
  }, []);
  
  const rotationStyle1 = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation1.value}deg` }],
    };
  });
  
  const rotationStyle2 = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation2.value}deg` }],
    };
  });
  
  const rotationStyle3 = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation3.value}deg` }],
    };
  });
  
  const pulseStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: pulse.value }],
    };
  });
  
  const dot1Style = useAnimatedStyle(() => {
    return {
      opacity: dot1Opacity.value,
    };
  });
  
  const dot2Style = useAnimatedStyle(() => {
    return {
      opacity: dot2Opacity.value,
    };
  });
  
  const dot3Style = useAnimatedStyle(() => {
    return {
      opacity: dot3Opacity.value,
    };
  });
  
  return (
    <View style={styles.container}>
      {/* Built-in Activity Indicators */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Activity Indicators
        </Text>
        
        <View style={styles.spinnerRow}>
          <View style={styles.spinnerContainer}>
            <ActivityIndicator size="small" color={colors.primary} />
            <Text style={[styles.spinnerLabel, { color: colors.text.secondary, ...fonts.regular }]}>
              Small
            </Text>
          </View>
          
          <View style={styles.spinnerContainer}>
            <ActivityIndicator size="large" color={colors.secondary} />
            <Text style={[styles.spinnerLabel, { color: colors.text.secondary, ...fonts.regular }]}>
              Large
            </Text>
          </View>
          
          <View style={styles.spinnerContainer}>
            <ActivityIndicator size="large" color={colors.accent} />
            <Text style={[styles.spinnerLabel, { color: colors.text.secondary, ...fonts.regular }]}>
              Accent
            </Text>
          </View>
        </View>
      </View>
      
      {/* Custom Spinners */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Custom Spinners
        </Text>
        
        <View style={styles.spinnerRow}>
          {/* Circular Spinner */}
          <View style={styles.spinnerContainer}>
            <Animated.View style={[styles.spinnerOuterCircle, rotationStyle1]}>
              <View 
                style={[
                  styles.spinnerInnerCircle, 
                  { borderTopColor: colors.primary, borderRightColor: colors.primary }
                ]}
              />
            </Animated.View>
            <Text style={[styles.spinnerLabel, { color: colors.text.secondary, ...fonts.regular }]}>
              Circular
            </Text>
          </View>
          
          {/* Double Ring Spinner */}
          <View style={styles.spinnerContainer}>
            <Animated.View style={[styles.spinnerOuterRing, rotationStyle2]}>
              <View 
                style={[
                  styles.spinnerOuterRingContent, 
                  { borderTopColor: colors.secondary, borderRightColor: colors.secondary }
                ]}
              />
            </Animated.View>
            <Animated.View style={[styles.spinnerInnerRing, { transform: [{ rotate: '45deg' }] }]}>
              <View 
                style={[
                  styles.spinnerInnerRingContent, 
                  { borderTopColor: colors.accent, borderRightColor: colors.accent }
                ]}
              />
            </Animated.View>
            <Text style={[styles.spinnerLabel, { color: colors.text.secondary, ...fonts.regular }]}>
              Double Ring
            </Text>
          </View>
          
          {/* Pulse Spinner */}
          <View style={styles.spinnerContainer}>
            <Animated.View 
              style={[
                styles.pulseCircle, 
                { backgroundColor: colors.primary + '40' },
                pulseStyle
              ]}
            />
            <View 
              style={[
                styles.pulseCore, 
                { backgroundColor: colors.primary }
              ]}
            />
            <Text style={[styles.spinnerLabel, { color: colors.text.secondary, ...fonts.regular }]}>
              Pulse
            </Text>
          </View>
        </View>
      </View>
      
      {/* Loading Text Animations */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Loading Text
        </Text>
        
        <View style={styles.spinnerRow}>
          {/* Dots Loading */}
          <View style={styles.spinnerContainer}>
            <View style={styles.dotsContainer}>
              <Animated.View 
                style={[
                  styles.dot, 
                  { backgroundColor: colors.primary },
                  dot1Style
                ]}
              />
              <Animated.View 
                style={[
                  styles.dot, 
                  { backgroundColor: colors.primary },
                  dot2Style
                ]}
              />
              <Animated.View 
                style={[
                  styles.dot, 
                  { backgroundColor: colors.primary },
                  dot3Style
                ]}
              />
            </View>
            <Text style={[styles.spinnerLabel, { color: colors.text.secondary, ...fonts.regular }]}>
              Dots
            </Text>
          </View>
          
          {/* Spinner with Text */}
          <View style={styles.spinnerContainer}>
            <View style={styles.spinnerWithTextContainer}>
              <Animated.View style={[styles.smallSpinner, rotationStyle3]}>
                <View 
                  style={[
                    styles.smallSpinnerContent, 
                    { borderTopColor: colors.secondary, borderRightColor: colors.secondary }
                  ]}
                />
              </Animated.View>
              <Text style={[styles.loadingText, { color: colors.text.primary, ...fonts.medium }]}>
                Loading...
              </Text>
            </View>
            <Text style={[styles.spinnerLabel, { color: colors.text.secondary, ...fonts.regular }]}>
              With Text
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 16,
  },
  spinnerRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  spinnerContainer: {
    alignItems: 'center',
    marginBottom: 16,
    minWidth: 80,
  },
  spinnerLabel: {
    fontSize: 12,
    marginTop: 8,
  },
  spinnerOuterCircle: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinnerInnerCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: 'transparent',
  },
  spinnerOuterRing: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  spinnerOuterRingContent: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: 'transparent',
  },
  spinnerInnerRing: {
    width: 26,
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinnerInnerRingContent: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 3,
    borderColor: 'transparent',
  },
  pulseCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    position: 'absolute',
  },
  pulseCore: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  spinnerWithTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  smallSpinner: {
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  smallSpinnerContent: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  loadingText: {
    fontSize: 14,
  },
});