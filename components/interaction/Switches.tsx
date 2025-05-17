import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Switch } from 'react-native';
import useTheme from '@/hooks/useTheme';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

export default function Switches() {
  const { colors, sizes, fonts } = useTheme();
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(true);
  const [switch3, setSwitch3] = useState(false);
  const [switch4, setSwitch4] = useState(true);
  
  // Custom Switch Animation
  const translateX1 = useSharedValue(0);
  const translateX2 = useSharedValue(24);
  
  const toggleCustomSwitch1 = () => {
    const newValue = !switch3;
    setSwitch3(newValue);
    translateX1.value = withTiming(newValue ? 24 : 0, { duration: 200 });
  };
  
  const toggleCustomSwitch2 = () => {
    const newValue = !switch4;
    setSwitch4(newValue);
    translateX2.value = withTiming(newValue ? 24 : 0, { duration: 200 });
  };
  
  const thumbStyle1 = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX1.value }],
    };
  });
  
  const thumbStyle2 = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX2.value }],
    };
  });
  
  return (
    <View style={styles.container}>
      {/* Basic Switches */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Basic Switches
        </Text>
        
        <View style={styles.switchRow}>
          <Switch
            value={switch1}
            onValueChange={setSwitch1}
            trackColor={{ false: colors.border, true: colors.primary }}
            thumbColor={colors.white}
            ios_backgroundColor={colors.border}
          />
          <Text 
            style={[
              styles.switchLabel, 
              { color: colors.text.primary, ...fonts.regular }
            ]}
          >
            Notifications
          </Text>
        </View>
        
        <View style={styles.switchRow}>
          <Switch
            value={switch2}
            onValueChange={setSwitch2}
            trackColor={{ false: colors.border, true: colors.primary }}
            thumbColor={colors.white}
            ios_backgroundColor={colors.border}
          />
          <Text 
            style={[
              styles.switchLabel, 
              { color: colors.text.primary, ...fonts.regular }
            ]}
          >
            Dark Mode
          </Text>
        </View>
      </View>
      
      {/* Custom Switches */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Custom Switches
        </Text>
        
        <View style={styles.switchRow}>
          <Pressable 
            style={[
              styles.customSwitchTrack,
              {
                backgroundColor: switch3 ? colors.secondary : colors.border,
              }
            ]}
            onPress={toggleCustomSwitch1}
          >
            <Animated.View 
              style={[
                styles.customSwitchThumb,
                { backgroundColor: colors.white },
                thumbStyle1
              ]}
            />
          </Pressable>
          <Text 
            style={[
              styles.switchLabel, 
              { color: colors.text.primary, ...fonts.regular }
            ]}
          >
            Location Services
          </Text>
        </View>
        
        <View style={styles.switchRow}>
          <Pressable 
            style={[
              styles.customSwitchTrack,
              {
                backgroundColor: switch4 ? colors.accent : colors.border,
              }
            ]}
            onPress={toggleCustomSwitch2}
          >
            <Animated.View 
              style={[
                styles.customSwitchThumb,
                { backgroundColor: colors.white },
                thumbStyle2
              ]}
            />
          </Pressable>
          <Text 
            style={[
              styles.switchLabel, 
              { color: colors.text.primary, ...fonts.regular }
            ]}
          >
            Sync Data
          </Text>
        </View>
      </View>
      
      {/* Switches with Labels */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          With Descriptions
        </Text>
        
        <View style={[styles.switchCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <View style={styles.switchCardContent}>
            <View style={styles.switchTextContainer}>
              <Text 
                style={[
                  styles.switchCardTitle, 
                  { color: colors.text.primary, ...fonts.medium }
                ]}
              >
                Push Notifications
              </Text>
              <Text 
                style={[
                  styles.switchCardDescription, 
                  { color: colors.text.secondary, ...fonts.regular }
                ]}
              >
                Receive alerts for updates and important messages
              </Text>
            </View>
            
            <Switch
              value={switch1}
              onValueChange={setSwitch1}
              trackColor={{ false: colors.border, true: colors.primary }}
              thumbColor={colors.white}
              ios_backgroundColor={colors.border}
            />
          </View>
        </View>
        
        <View style={[styles.switchCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <View style={styles.switchCardContent}>
            <View style={styles.switchTextContainer}>
              <Text 
                style={[
                  styles.switchCardTitle, 
                  { color: colors.text.primary, ...fonts.medium }
                ]}
              >
                Auto-update Apps
              </Text>
              <Text 
                style={[
                  styles.switchCardDescription, 
                  { color: colors.text.secondary, ...fonts.regular }
                ]}
              >
                Update applications automatically when new versions are available
              </Text>
            </View>
            
            <Switch
              value={switch2}
              onValueChange={setSwitch2}
              trackColor={{ false: colors.border, true: colors.primary }}
              thumbColor={colors.white}
              ios_backgroundColor={colors.border}
            />
          </View>
        </View>
      </View>
      
      {/* Disabled Switch */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Disabled State
        </Text>
        
        <View style={styles.switchRow}>
          <View 
            style={[
              styles.customSwitchTrack,
              {
                backgroundColor: colors.text.disabled,
                opacity: 0.6
              }
            ]}
          >
            <View 
              style={[
                styles.customSwitchThumb,
                { 
                  backgroundColor: colors.white,
                  opacity: 0.7
                },
              ]}
            />
          </View>
          <Text 
            style={[
              styles.switchLabel, 
              { color: colors.text.disabled, ...fonts.regular }
            ]}
          >
            Disabled option
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
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  switchLabel: {
    marginLeft: 16,
    fontSize: 14,
  },
  customSwitchTrack: {
    width: 48,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  customSwitchThumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  switchCard: {
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
  },
  switchCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchTextContainer: {
    flex: 1,
    marginRight: 16,
  },
  switchCardTitle: {
    fontSize: 14,
    marginBottom: 4,
  },
  switchCardDescription: {
    fontSize: 12,
  },
});