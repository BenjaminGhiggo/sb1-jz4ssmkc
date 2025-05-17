import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import useTheme from '@/hooks/useTheme';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

export default function RadioButtons() {
  const { colors, sizes, fonts } = useTheme();
  const [selectedOption, setSelectedOption] = useState('option2');
  const [selectedSize, setSelectedSize] = useState('medium');
  const [selectedDelivery, setSelectedDelivery] = useState('');
  
  // Animation for radio button
  const scale = useSharedValue(1);
  
  const animateRadio = () => {
    scale.value = withTiming(0.8, { duration: 100 });
    setTimeout(() => {
      scale.value = withTiming(1, { duration: 200 });
    }, 100);
  };
  
  const radioAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });
  
  const handleRadioPress = (value: string, setter: React.Dispatch<React.SetStateAction<string>>) => {
    animateRadio();
    setter(value);
  };
  
  // Basic Radio Group
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  
  // Colored Radio Group
  const sizeOptions = [
    { value: 'small', label: 'Small', color: colors.accent },
    { value: 'medium', label: 'Medium', color: colors.primary },
    { value: 'large', label: 'Large', color: colors.secondary },
  ];
  
  // Radio Group with Descriptions
  const deliveryOptions = [
    { 
      value: 'standard', 
      label: 'Standard Delivery', 
      description: 'Estimated 3-5 business days',
      price: '$0.00'
    },
    { 
      value: 'express', 
      label: 'Express Delivery', 
      description: 'Estimated 1-2 business days',
      price: '$9.99'
    },
    { 
      value: 'overnight', 
      label: 'Overnight Delivery', 
      description: 'Next business day',
      price: '$19.99'
    },
  ];
  
  return (
    <View style={styles.container}>
      {/* Basic Radio Group */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Basic Radio Buttons
        </Text>
        
        {options.map((option) => (
          <View key={option.value} style={styles.radioRow}>
            <Animated.View 
              style={[
                option.value === selectedOption && radioAnimatedStyle
              ]}
            >
              <Pressable
                style={[
                  styles.radioOuter,
                  {
                    borderColor: option.value === selectedOption ? colors.primary : colors.border,
                  }
                ]}
                onPress={() => handleRadioPress(option.value, setSelectedOption)}
              >
                {option.value === selectedOption && (
                  <View 
                    style={[
                      styles.radioInner,
                      { backgroundColor: colors.primary }
                    ]} 
                  />
                )}
              </Pressable>
            </Animated.View>
            <Text 
              style={[
                styles.radioLabel, 
                { color: colors.text.primary, ...fonts.regular }
              ]}
            >
              {option.label}
            </Text>
          </View>
        ))}
      </View>
      
      {/* Colored Radio Group */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Colored Radio Buttons
        </Text>
        
        {sizeOptions.map((option) => (
          <View key={option.value} style={styles.radioRow}>
            <Animated.View 
              style={[
                option.value === selectedSize && radioAnimatedStyle
              ]}
            >
              <Pressable
                style={[
                  styles.radioOuter,
                  {
                    borderColor: option.value === selectedSize ? option.color : colors.border,
                  }
                ]}
                onPress={() => handleRadioPress(option.value, setSelectedSize)}
              >
                {option.value === selectedSize && (
                  <View 
                    style={[
                      styles.radioInner,
                      { backgroundColor: option.color }
                    ]} 
                  />
                )}
              </Pressable>
            </Animated.View>
            <Text 
              style={[
                styles.radioLabel, 
                { 
                  color: option.value === selectedSize ? option.color : colors.text.primary, 
                  ...fonts.regular 
                }
              ]}
            >
              {option.label}
            </Text>
          </View>
        ))}
      </View>
      
      {/* Radio Group with Descriptions */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          With Descriptions
        </Text>
        
        {deliveryOptions.map((option) => (
          <Pressable
            key={option.value}
            style={[
              styles.radioCard,
              {
                backgroundColor: colors.surface,
                borderColor: option.value === selectedDelivery ? colors.primary : colors.border,
              }
            ]}
            onPress={() => handleRadioPress(option.value, setSelectedDelivery)}
          >
            <View style={styles.radioCardContent}>
              <Animated.View 
                style={[
                  option.value === selectedDelivery && radioAnimatedStyle
                ]}
              >
                <View
                  style={[
                    styles.radioOuter,
                    {
                      borderColor: option.value === selectedDelivery ? colors.primary : colors.border,
                    }
                  ]}
                >
                  {option.value === selectedDelivery && (
                    <View 
                      style={[
                        styles.radioInner,
                        { backgroundColor: colors.primary }
                      ]} 
                    />
                  )}
                </View>
              </Animated.View>
              
              <View style={styles.radioCardTextContainer}>
                <Text 
                  style={[
                    styles.radioCardLabel, 
                    { color: colors.text.primary, ...fonts.medium }
                  ]}
                >
                  {option.label}
                </Text>
                <Text 
                  style={[
                    styles.radioCardDescription, 
                    { color: colors.text.secondary, ...fonts.regular }
                  ]}
                >
                  {option.description}
                </Text>
              </View>
              
              <Text 
                style={[
                  styles.radioCardPrice, 
                  { color: colors.text.primary, ...fonts.bold }
                ]}
              >
                {option.price}
              </Text>
            </View>
          </Pressable>
        ))}
      </View>
      
      {/* Disabled Radio Button */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Disabled State
        </Text>
        
        <View style={styles.radioRow}>
          <View
            style={[
              styles.radioOuter,
              {
                borderColor: colors.text.disabled,
                opacity: 0.6
              }
            ]}
          />
          <Text 
            style={[
              styles.radioLabel, 
              { color: colors.text.disabled, ...fonts.regular }
            ]}
          >
            Disabled option
          </Text>
        </View>
        
        <View style={styles.radioRow}>
          <View
            style={[
              styles.radioOuter,
              {
                borderColor: colors.text.disabled,
                opacity: 0.6
              }
            ]}
          >
            <View 
              style={[
                styles.radioInner,
                { backgroundColor: colors.text.disabled }
              ]} 
            />
          </View>
          <Text 
            style={[
              styles.radioLabel, 
              { color: colors.text.disabled, ...fonts.regular }
            ]}
          >
            Disabled selected
          </Text>
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
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 12,
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  radioLabel: {
    marginLeft: 8,
    fontSize: 14,
  },
  radioCard: {
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
  },
  radioCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioCardTextContainer: {
    flex: 1,
    marginLeft: 16,
  },
  radioCardLabel: {
    fontSize: 14,
    marginBottom: 4,
  },
  radioCardDescription: {
    fontSize: 12,
  },
  radioCardPrice: {
    fontSize: 14,
  },
});