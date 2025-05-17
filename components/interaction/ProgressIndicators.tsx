import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useTheme from '@/hooks/useTheme';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
} from 'react-native-reanimated';

export default function ProgressIndicators() {
  const { colors, sizes, fonts } = useTheme();
  
  // Linear Progress
  const width1 = useSharedValue(0);
  const width2 = useSharedValue(60);
  const width3 = useSharedValue(0);
  
  // Circular Progress
  const rotation = useSharedValue(0);
  const circumference = 2 * Math.PI * 38; // Circle circumference (2πr)
  const circleProgress = useSharedValue(0);
  
  useEffect(() => {
    // Animate Linear Progress
    width1.value = withTiming(70, { duration: 2000 });
    
    // Animate indeterminate progress
    width3.value = withRepeat(
      withTiming(100, { duration: 1500, easing: Easing.inOut(Easing.ease) }),
      -1, // Infinite repeat
      true // Reverse
    );
    
    // Animate circular progress
    rotation.value = withRepeat(
      withTiming(360, { duration: 1500, easing: Easing.linear }),
      -1, // Infinite repeat
      false // Don't reverse
    );
    
    circleProgress.value = withTiming(75, { duration: 2000 });
  }, []);
  
  const progressStyle1 = useAnimatedStyle(() => {
    return {
      width: `${width1.value}%`,
    };
  });
  
  const progressStyle3 = useAnimatedStyle(() => {
    return {
      width: `${width3.value}%`,
    };
  });
  
  const rotationStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });
  
  const circleProgressStyle = useAnimatedStyle(() => {
    const strokeDashoffset = circumference * (1 - circleProgress.value / 100);
    return {
      strokeDashoffset,
    };
  });
  
  return (
    <View style={styles.container}>
      {/* Linear Progress */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Linear Progress
        </Text>
        
        <View style={styles.progressContainer}>
          <View style={[styles.progressTrack, { backgroundColor: colors.border }]}>
            <Animated.View 
              style={[
                styles.progressFill, 
                { backgroundColor: colors.primary },
                progressStyle1
              ]} 
            />
          </View>
          <Text style={[styles.progressText, { color: colors.text.primary, ...fonts.regular }]}>
            70% Complete
          </Text>
        </View>
        
        <View style={styles.progressContainer}>
          <View style={[styles.progressTrack, { backgroundColor: colors.border }]}>
            <View 
              style={[
                styles.progressFill, 
                { backgroundColor: colors.success.light, width: '60%' }
              ]} 
            />
          </View>
          <Text style={[styles.progressText, { color: colors.text.primary, ...fonts.regular }]}>
            60% Complete
          </Text>
        </View>
        
        <View style={styles.progressContainer}>
          <View style={[styles.progressTrack, { backgroundColor: colors.border }]}>
            <Animated.View 
              style={[
                styles.progressFill, 
                { backgroundColor: colors.secondary },
                progressStyle3
              ]} 
            />
          </View>
          <Text style={[styles.progressText, { color: colors.text.primary, ...fonts.regular }]}>
            Loading...
          </Text>
        </View>
      </View>
      
      {/* Circular Progress */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Circular Progress
        </Text>
        
        <View style={styles.circularContainer}>
          {/* Determinate Circular Progress */}
          <View style={styles.circularProgressContainer}>
            <Svg width={100} height={100} viewBox="0 0 100 100">
              <Circle
                cx="50"
                cy="50"
                r="38"
                stroke={colors.border}
                strokeWidth="8"
                fill="transparent"
              />
              <AnimatedCircle
                cx="50"
                cy="50"
                r="38"
                stroke={colors.primary}
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={circumference}
                style={circleProgressStyle}
                strokeLinecap="round"
              />
            </Svg>
            <Text style={[styles.circleText, { color: colors.text.primary, ...fonts.bold }]}>
              75%
            </Text>
            <Text style={[styles.circleLabel, { color: colors.text.secondary, ...fonts.regular }]}>
              Progress
            </Text>
          </View>
          
          {/* Indeterminate Circular Progress */}
          <View style={styles.circularProgressContainer}>
            <Animated.View style={[styles.spinnerContainer, rotationStyle]}>
              <Svg width={100} height={100} viewBox="0 0 100 100">
                <Circle
                  cx="50"
                  cy="50"
                  r="38"
                  stroke={colors.border}
                  strokeWidth="8"
                  fill="transparent"
                />
                <Circle
                  cx="50"
                  cy="50"
                  r="38"
                  stroke={colors.accent}
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={`${circumference * 0.25} ${circumference * 0.75}`}
                  strokeLinecap="round"
                />
              </Svg>
            </Animated.View>
            <Text style={[styles.circleLabel, { color: colors.text.secondary, ...fonts.regular }]}>
              Loading...
            </Text>
          </View>
        </View>
      </View>
      
      {/* Progress Steps */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Progress Steps
        </Text>
        
        <View style={styles.stepsContainer}>
          {/* Step 1 - Completed */}
          <View style={styles.stepItem}>
            <View 
              style={[
                styles.stepCircle, 
                { backgroundColor: colors.success.light, borderColor: colors.success.light }
              ]}
            >
              <Text style={[styles.stepNumber, { color: colors.white, ...fonts.medium }]}>
                1
              </Text>
            </View>
            <Text style={[styles.stepText, { color: colors.text.primary, ...fonts.medium }]}>
              Account
            </Text>
          </View>
          
          {/* Connector Line 1 - Completed */}
          <View style={[styles.connector, { backgroundColor: colors.success.light }]} />
          
          {/* Step 2 - Current */}
          <View style={styles.stepItem}>
            <View 
              style={[
                styles.stepCircle, 
                { backgroundColor: colors.primary, borderColor: colors.primary }
              ]}
            >
              <Text style={[styles.stepNumber, { color: colors.white, ...fonts.medium }]}>
                2
              </Text>
            </View>
            <Text style={[styles.stepText, { color: colors.text.primary, ...fonts.medium }]}>
              Address
            </Text>
          </View>
          
          {/* Connector Line 2 - Incomplete */}
          <View style={[styles.connector, { backgroundColor: colors.border }]} />
          
          {/* Step 3 - Incomplete */}
          <View style={styles.stepItem}>
            <View 
              style={[
                styles.stepCircle, 
                { backgroundColor: 'transparent', borderColor: colors.border }
              ]}
            >
              <Text style={[styles.stepNumber, { color: colors.text.secondary, ...fonts.medium }]}>
                3
              </Text>
            </View>
            <Text style={[styles.stepText, { color: colors.text.secondary, ...fonts.regular }]}>
              Payment
            </Text>
          </View>
          
          {/* Connector Line 3 - Incomplete */}
          <View style={[styles.connector, { backgroundColor: colors.border }]} />
          
          {/* Step 4 - Incomplete */}
          <View style={styles.stepItem}>
            <View 
              style={[
                styles.stepCircle, 
                { backgroundColor: 'transparent', borderColor: colors.border }
              ]}
            >
              <Text style={[styles.stepNumber, { color: colors.text.secondary, ...fonts.medium }]}>
                4
              </Text>
            </View>
            <Text style={[styles.stepText, { color: colors.text.secondary, ...fonts.regular }]}>
              Confirm
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

// Import Circle and Svg components for React Native
function Svg({ width, height, viewBox, children }) {
  return (
    <View
      style={{
        width,
        height,
      }}
    >
      {children}
    </View>
  );
}

function Circle({ cx, cy, r, stroke, strokeWidth, fill, strokeDasharray, strokeLinecap }) {
  return (
    <View
      style={{
        position: 'absolute',
        width: r * 2,
        height: r * 2,
        left: cx - r,
        top: cy - r,
        borderRadius: r,
        borderWidth: strokeWidth,
        borderColor: stroke,
        backgroundColor: fill === 'transparent' ? 'transparent' : fill,
        ...(strokeDasharray && {
          borderStyle: 'dashed',
          borderWidth: strokeWidth,
        }),
        ...(strokeLinecap === 'round' && {
          borderRadius: r,
        }),
      }}
    />
  );
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

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
  progressContainer: {
    marginBottom: 16,
  },
  progressTrack: {
    height: 8,
    borderRadius: 4,
    width: '100%',
  },
  progressFill: {
    height: 8,
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    marginTop: 8,
  },
  circularContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  circularProgressContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  spinnerContainer: {
    width: 100,
    height: 100,
  },
  circleText: {
    position: 'absolute',
    fontSize: 22,
  },
  circleLabel: {
    fontSize: 12,
    marginTop: 8,
  },
  stepsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepItem: {
    alignItems: 'center',
  },
  stepCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepNumber: {
    fontSize: 14,
  },
  stepText: {
    fontSize: 12,
    marginTop: 4,
  },
  connector: {
    width: 30,
    height: 2,
  },
});