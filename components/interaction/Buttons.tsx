import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import useTheme from '@/hooks/useTheme';
import { Plus, Mail, ArrowRight } from 'lucide-react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

export default function Buttons() {
  const { colors, sizes, fonts, getShadow } = useTheme();
  
  // Animation values
  const buttonScale = useSharedValue(1);
  
  const animateButtonPress = () => {
    buttonScale.value = withTiming(0.95, { duration: 100 });
    setTimeout(() => {
      buttonScale.value = withTiming(1, { duration: 200 });
    }, 100);
  };
  
  const buttonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: buttonScale.value }],
    };
  });
  
  return (
    <View style={styles.container}>
      {/* Primary Buttons */}
      <View style={styles.rowContainer}>
        <Animated.View style={buttonAnimatedStyle}>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: colors.primary },
              pressed && { opacity: 0.9 }
            ]}
            onPress={animateButtonPress}
          >
            <Text style={[styles.buttonText, { color: colors.white, ...fonts.medium }]}>
              Primary
            </Text>
          </Pressable>
        </Animated.View>
        
        <Animated.View style={buttonAnimatedStyle}>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: colors.secondary },
              pressed && { opacity: 0.9 }
            ]}
            onPress={animateButtonPress}
          >
            <Text style={[styles.buttonText, { color: colors.white, ...fonts.medium }]}>
              Secondary
            </Text>
          </Pressable>
        </Animated.View>
      </View>
      
      {/* Outlined Buttons */}
      <View style={styles.rowContainer}>
        <Animated.View style={buttonAnimatedStyle}>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              { 
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderColor: colors.primary
              },
              pressed && { backgroundColor: colors.primary + '10' }
            ]}
            onPress={animateButtonPress}
          >
            <Text style={[styles.buttonText, { color: colors.primary, ...fonts.medium }]}>
              Outlined
            </Text>
          </Pressable>
        </Animated.View>
        
        <Animated.View style={buttonAnimatedStyle}>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              { 
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderColor: colors.error.light
              },
              pressed && { backgroundColor: colors.error.light + '10' }
            ]}
            onPress={animateButtonPress}
          >
            <Text style={[styles.buttonText, { color: colors.error.light, ...fonts.medium }]}>
              Danger
            </Text>
          </Pressable>
        </Animated.View>
      </View>
      
      {/* Icon Buttons */}
      <View style={styles.rowContainer}>
        <Animated.View style={buttonAnimatedStyle}>
          <Pressable
            style={({ pressed }) => [
              styles.iconButton,
              { backgroundColor: colors.primary },
              pressed && { opacity: 0.9 }
            ]}
            onPress={animateButtonPress}
          >
            <Plus size={20} color={colors.white} />
            <Text style={[styles.buttonText, { color: colors.white, ...fonts.medium, marginLeft: 8 }]}>
              Add New
            </Text>
          </Pressable>
        </Animated.View>
        
        <Animated.View style={buttonAnimatedStyle}>
          <Pressable
            style={({ pressed }) => [
              styles.iconButton,
              { 
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderColor: colors.border
              },
              pressed && { backgroundColor: colors.text.secondary + '10' }
            ]}
            onPress={animateButtonPress}
          >
            <Mail size={20} color={colors.text.primary} />
            <Text style={[styles.buttonText, { color: colors.text.primary, ...fonts.medium, marginLeft: 8 }]}>
              Contact
            </Text>
          </Pressable>
        </Animated.View>
      </View>
      
      {/* Rounded and Gradient Buttons */}
      <View style={styles.rowContainer}>
        <Animated.View style={buttonAnimatedStyle}>
          <Pressable
            style={({ pressed }) => [
              styles.roundButton,
              { backgroundColor: colors.accent },
              getShadow('small'),
              pressed && { opacity: 0.9 }
            ]}
            onPress={animateButtonPress}
          >
            <ArrowRight size={20} color={colors.white} />
          </Pressable>
        </Animated.View>
        
        <Animated.View style={buttonAnimatedStyle}>
          <Pressable
            style={({ pressed }) => [
              styles.gradientButton,
              pressed && { opacity: 0.9 }
            ]}
            onPress={animateButtonPress}
          >
            <LinearGradient
              colors={[colors.primary, colors.secondary]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradient}
            >
              <Text style={[styles.buttonText, { color: colors.white, ...fonts.medium }]}>
                Gradient
              </Text>
            </LinearGradient>
          </Pressable>
        </Animated.View>
      </View>
      
      {/* Disabled Buttons */}
      <View style={styles.rowContainer}>
        <Pressable
          style={[
            styles.button,
            { backgroundColor: colors.text.disabled }
          ]}
          onPress={() => {}}
          disabled={true}
        >
          <Text style={[styles.buttonText, { color: colors.white, ...fonts.medium, opacity: 0.7 }]}>
            Disabled
          </Text>
        </Pressable>
        
        <Pressable
          style={[
            styles.button,
            { 
              backgroundColor: 'transparent',
              borderWidth: 1,
              borderColor: colors.text.disabled
            }
          ]}
          onPress={() => {}}
          disabled={true}
        >
          <Text style={[styles.buttonText, { color: colors.text.disabled, ...fonts.medium }]}>
            Disabled
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    minWidth: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
  },
  iconButton: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    minWidth: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientButton: {
    borderRadius: 8,
    minWidth: '48%',
    overflow: 'hidden',
  },
  gradient: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});