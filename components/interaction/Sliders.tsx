import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import useTheme from '@/hooks/useTheme';

export default function Sliders() {
  const { colors, sizes, fonts } = useTheme();
  const [sliderValue1, setSliderValue1] = useState(40);
  const [sliderValue2, setSliderValue2] = useState(75);
  const [sliderValue3, setSliderValue3] = useState(50);
  
  // Simple Slider
  const translateX1 = useSharedValue(sliderValue1 * 2.5);
  
  const updateSliderValue1 = (value: number) => {
    setSliderValue1(Math.round(value / 2.5));
  };
  
  const gestureHandler1 = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.startX = translateX1.value;
    },
    onActive: (event, ctx) => {
      let newValue = ctx.startX + event.translationX;
      
      // Clamp values
      if (newValue < 0) newValue = 0;
      if (newValue > 250) newValue = 250;
      
      translateX1.value = newValue;
      runOnJS(updateSliderValue1)(newValue);
    },
  });
  
  const sliderStyle1 = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX1.value }],
    };
  });
  
  const progressStyle1 = useAnimatedStyle(() => {
    return {
      width: translateX1.value,
    };
  });
  
  // Range Slider
  const translateX2 = useSharedValue(sliderValue2 * 2.5);
  
  const updateSliderValue2 = (value: number) => {
    setSliderValue2(Math.round(value / 2.5));
  };
  
  const gestureHandler2 = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.startX = translateX2.value;
    },
    onActive: (event, ctx) => {
      let newValue = ctx.startX + event.translationX;
      
      // Clamp values
      if (newValue < 0) newValue = 0;
      if (newValue > 250) newValue = 250;
      
      translateX2.value = newValue;
      runOnJS(updateSliderValue2)(newValue);
    },
  });
  
  const sliderStyle2 = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX2.value }],
    };
  });
  
  const progressStyle2 = useAnimatedStyle(() => {
    return {
      width: translateX2.value,
    };
  });
  
  // Steps Slider
  const translateX3 = useSharedValue(sliderValue3 * 2.5);
  const steps = [0, 25, 50, 75, 100];
  const stepPositions = steps.map(step => step * 2.5);
  
  const updateSliderValue3 = (value: number) => {
    // Find the closest step
    const closestStepIndex = stepPositions.reduce((prevIndex, curr, currIndex, arr) => {
      return Math.abs(curr - value) < Math.abs(arr[prevIndex] - value) ? currIndex : prevIndex;
    }, 0);
    
    setSliderValue3(steps[closestStepIndex]);
    return stepPositions[closestStepIndex];
  };
  
  const gestureHandler3 = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.startX = translateX3.value;
    },
    onActive: (event, ctx) => {
      let newValue = ctx.startX + event.translationX;
      
      // Clamp values
      if (newValue < 0) newValue = 0;
      if (newValue > 250) newValue = 250;
      
      translateX3.value = newValue;
    },
    onEnd: () => {
      const snappedValue = runOnJS(updateSliderValue3)(translateX3.value);
      translateX3.value = withTiming(snappedValue, { duration: 200 });
    },
  });
  
  const sliderStyle3 = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX3.value }],
    };
  });
  
  const progressStyle3 = useAnimatedStyle(() => {
    return {
      width: translateX3.value,
    };
  });
  
  return (
    <View style={styles.container}>
      {/* Basic Slider */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Basic Slider
        </Text>
        
        <View style={styles.sliderContainer}>
          <View 
            style={[
              styles.sliderTrack, 
              { backgroundColor: colors.border }
            ]}
          >
            <Animated.View 
              style={[
                styles.sliderProgress, 
                { backgroundColor: colors.primary },
                progressStyle1
              ]}
            />
            
            <PanGestureHandler onGestureEvent={gestureHandler1}>
              <Animated.View 
                style={[
                  styles.sliderThumb, 
                  { backgroundColor: colors.primary },
                  sliderStyle1
                ]}
              />
            </PanGestureHandler>
          </View>
          
          <View style={styles.sliderValueContainer}>
            <Text style={[styles.sliderValue, { color: colors.text.primary, ...fonts.medium }]}>
              {sliderValue1}
            </Text>
          </View>
        </View>
      </View>
      
      {/* Range Slider with Labels */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          With Labels
        </Text>
        
        <View style={styles.sliderContainer}>
          <View style={styles.labelsContainer}>
            <Text style={[styles.sliderLabel, { color: colors.text.secondary, ...fonts.regular }]}>
              0%
            </Text>
            <Text style={[styles.sliderLabel, { color: colors.text.secondary, ...fonts.regular }]}>
              100%
            </Text>
          </View>
          
          <View 
            style={[
              styles.sliderTrack, 
              { backgroundColor: colors.border }
            ]}
          >
            <Animated.View 
              style={[
                styles.sliderProgress, 
                { backgroundColor: colors.accent },
                progressStyle2
              ]}
            />
            
            <PanGestureHandler onGestureEvent={gestureHandler2}>
              <Animated.View 
                style={[
                  styles.sliderThumb, 
                  { backgroundColor: colors.accent },
                  sliderStyle2
                ]}
              >
                <View 
                  style={[
                    styles.thumbValueBubble,
                    { backgroundColor: colors.accent }
                  ]}
                >
                  <Text style={[styles.thumbValue, { color: colors.white, ...fonts.regular }]}>
                    {sliderValue2}%
                  </Text>
                </View>
              </Animated.View>
            </PanGestureHandler>
          </View>
          
          <View style={styles.sliderValueContainer}>
            <Text style={[styles.sliderDescription, { color: colors.text.secondary, ...fonts.regular }]}>
              Opacity: {sliderValue2}%
            </Text>
          </View>
        </View>
      </View>
      
      {/* Steps Slider */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          With Steps
        </Text>
        
        <View style={styles.sliderContainer}>
          <View 
            style={[
              styles.sliderTrack, 
              { backgroundColor: colors.border }
            ]}
          >
            <Animated.View 
              style={[
                styles.sliderProgress, 
                { backgroundColor: colors.secondary },
                progressStyle3
              ]}
            />
            
            {/* Step markers */}
            {steps.map((step, index) => (
              <View 
                key={index}
                style={[
                  styles.stepMarker,
                  { 
                    backgroundColor: step <= sliderValue3 ? colors.secondary : colors.border,
                    left: step * 2.5 - 2 // Adjust for marker width
                  }
                ]}
              />
            ))}
            
            <PanGestureHandler onGestureEvent={gestureHandler3}>
              <Animated.View 
                style={[
                  styles.sliderThumb, 
                  { backgroundColor: colors.secondary },
                  sliderStyle3
                ]}
              />
            </PanGestureHandler>
          </View>
          
          <View style={styles.stepLabelsContainer}>
            {steps.map((step, index) => (
              <Text 
                key={index}
                style={[
                  styles.stepLabel, 
                  { 
                    color: step === sliderValue3 ? colors.secondary : colors.text.secondary,
                    ...fonts.regular,
                    ...(step === sliderValue3 && fonts.medium),
                    left: step * 2.5 - 10 // Adjust for label width
                  }
                ]}
              >
                {step}
              </Text>
            ))}
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
  sliderContainer: {
    height: 60,
    position: 'relative',
  },
  sliderTrack: {
    height: 4,
    width: 250,
    borderRadius: 2,
    position: 'relative',
    marginTop: 8,
  },
  sliderProgress: {
    height: 4,
    borderRadius: 2,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  sliderThumb: {
    width: 16,
    height: 16,
    borderRadius: 8,
    position: 'absolute',
    top: -6,
    left: -8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderValueContainer: {
    marginTop: 12,
  },
  sliderValue: {
    fontSize: 14,
  },
  sliderDescription: {
    fontSize: 14,
  },
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 250,
    marginBottom: 4,
  },
  sliderLabel: {
    fontSize: 12,
  },
  thumbValueBubble: {
    position: 'absolute',
    top: -30,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  thumbValue: {
    fontSize: 12,
  },
  stepMarker: {
    width: 4,
    height: 12,
    borderRadius: 2,
    position: 'absolute',
    top: -4,
  },
  stepLabelsContainer: {
    width: 250,
    position: 'relative',
    marginTop: 16,
    height: 20,
  },
  stepLabel: {
    fontSize: 12,
    position: 'absolute',
  },
});