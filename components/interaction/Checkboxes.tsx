import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import useTheme from '@/hooks/useTheme';
import { Check } from 'lucide-react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

export default function Checkboxes() {
  const { colors, sizes, fonts } = useTheme();
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(true);
  const [checkedA, setCheckedA] = useState(false);
  const [checkedB, setCheckedB] = useState(true);
  const [checkedC, setCheckedC] = useState(false);
  
  // Animation for checkbox
  const scale = useSharedValue(1);
  
  const animateCheckbox = () => {
    scale.value = withTiming(0.8, { duration: 100 });
    setTimeout(() => {
      scale.value = withTiming(1, { duration: 200 });
    }, 100);
  };
  
  const checkboxAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });
  
  const toggleCheckbox = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    animateCheckbox();
    setter(prev => !prev);
  };
  
  return (
    <View style={styles.container}>
      {/* Basic Checkboxes */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Basic Checkboxes
        </Text>
        
        <View style={styles.checkboxRow}>
          <Animated.View style={checkboxAnimatedStyle}>
            <Pressable
              style={[
                styles.checkbox,
                {
                  backgroundColor: checked1 ? colors.primary : 'transparent',
                  borderColor: checked1 ? colors.primary : colors.border,
                }
              ]}
              onPress={() => toggleCheckbox(setChecked1)}
            >
              {checked1 && <Check size={16} color={colors.white} />}
            </Pressable>
          </Animated.View>
          <Text 
            style={[
              styles.checkboxLabel, 
              { color: colors.text.primary, ...fonts.regular }
            ]}
          >
            Option 1
          </Text>
        </View>
        
        <View style={styles.checkboxRow}>
          <Animated.View style={checkboxAnimatedStyle}>
            <Pressable
              style={[
                styles.checkbox,
                {
                  backgroundColor: checked2 ? colors.primary : 'transparent',
                  borderColor: checked2 ? colors.primary : colors.border,
                }
              ]}
              onPress={() => toggleCheckbox(setChecked2)}
            >
              {checked2 && <Check size={16} color={colors.white} />}
            </Pressable>
          </Animated.View>
          <Text 
            style={[
              styles.checkboxLabel, 
              { color: colors.text.primary, ...fonts.regular }
            ]}
          >
            Option 2 (pre-selected)
          </Text>
        </View>
      </View>
      
      {/* Colored Checkboxes */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Colored Checkboxes
        </Text>
        
        <View style={styles.checkboxRow}>
          <Animated.View style={checkboxAnimatedStyle}>
            <Pressable
              style={[
                styles.checkbox,
                {
                  backgroundColor: checked3 ? colors.secondary : 'transparent',
                  borderColor: checked3 ? colors.secondary : colors.border,
                }
              ]}
              onPress={() => toggleCheckbox(setChecked3)}
            >
              {checked3 && <Check size={16} color={colors.white} />}
            </Pressable>
          </Animated.View>
          <Text 
            style={[
              styles.checkboxLabel, 
              { color: colors.text.primary, ...fonts.regular }
            ]}
          >
            Secondary Color
          </Text>
        </View>
        
        <View style={styles.checkboxRow}>
          <Animated.View style={checkboxAnimatedStyle}>
            <Pressable
              style={[
                styles.checkbox,
                {
                  backgroundColor: checked4 ? colors.accent : 'transparent',
                  borderColor: checked4 ? colors.accent : colors.border,
                }
              ]}
              onPress={() => toggleCheckbox(setChecked4)}
            >
              {checked4 && <Check size={16} color={colors.white} />}
            </Pressable>
          </Animated.View>
          <Text 
            style={[
              styles.checkboxLabel, 
              { color: colors.text.primary, ...fonts.regular }
            ]}
          >
            Accent Color
          </Text>
        </View>
      </View>
      
      {/* Checkbox Group */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Checkbox Group
        </Text>
        <Text style={[styles.groupLabel, { color: colors.text.secondary, ...fonts.regular }]}>
          Select your interests:
        </Text>
        
        <View style={styles.checkboxRow}>
          <Animated.View style={checkboxAnimatedStyle}>
            <Pressable
              style={[
                styles.checkbox,
                {
                  backgroundColor: checkedA ? colors.primary : 'transparent',
                  borderColor: checkedA ? colors.primary : colors.border,
                }
              ]}
              onPress={() => toggleCheckbox(setCheckedA)}
            >
              {checkedA && <Check size={16} color={colors.white} />}
            </Pressable>
          </Animated.View>
          <Text 
            style={[
              styles.checkboxLabel, 
              { color: colors.text.primary, ...fonts.regular }
            ]}
          >
            Technology
          </Text>
        </View>
        
        <View style={styles.checkboxRow}>
          <Animated.View style={checkboxAnimatedStyle}>
            <Pressable
              style={[
                styles.checkbox,
                {
                  backgroundColor: checkedB ? colors.primary : 'transparent',
                  borderColor: checkedB ? colors.primary : colors.border,
                }
              ]}
              onPress={() => toggleCheckbox(setCheckedB)}
            >
              {checkedB && <Check size={16} color={colors.white} />}
            </Pressable>
          </Animated.View>
          <Text 
            style={[
              styles.checkboxLabel, 
              { color: colors.text.primary, ...fonts.regular }
            ]}
          >
            Design
          </Text>
        </View>
        
        <View style={styles.checkboxRow}>
          <Animated.View style={checkboxAnimatedStyle}>
            <Pressable
              style={[
                styles.checkbox,
                {
                  backgroundColor: checkedC ? colors.primary : 'transparent',
                  borderColor: checkedC ? colors.primary : colors.border,
                }
              ]}
              onPress={() => toggleCheckbox(setCheckedC)}
            >
              {checkedC && <Check size={16} color={colors.white} />}
            </Pressable>
          </Animated.View>
          <Text 
            style={[
              styles.checkboxLabel, 
              { color: colors.text.primary, ...fonts.regular }
            ]}
          >
            Business
          </Text>
        </View>
      </View>
      
      {/* Disabled Checkbox */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Disabled State
        </Text>
        
        <View style={styles.checkboxRow}>
          <View
            style={[
              styles.checkbox,
              {
                backgroundColor: 'transparent',
                borderColor: colors.text.disabled,
                opacity: 0.6
              }
            ]}
          />
          <Text 
            style={[
              styles.checkboxLabel, 
              { color: colors.text.disabled, ...fonts.regular }
            ]}
          >
            Disabled option
          </Text>
        </View>
        
        <View style={styles.checkboxRow}>
          <View
            style={[
              styles.checkbox,
              {
                backgroundColor: colors.text.disabled,
                borderColor: colors.text.disabled,
                opacity: 0.6
              }
            ]}
          >
            <Check size={16} color={colors.white} />
          </View>
          <Text 
            style={[
              styles.checkboxLabel, 
              { color: colors.text.disabled, ...fonts.regular }
            ]}
          >
            Disabled checked
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
  groupLabel: {
    fontSize: 14,
    marginBottom: 8,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 14,
  },
});