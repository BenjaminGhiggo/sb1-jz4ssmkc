import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import useTheme from '@/hooks/useTheme';
import { ChevronLeft, Bell, Search, Menu } from 'lucide-react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

export default function HeaderBar() {
  const { colors, sizes, fonts, getShadow } = useTheme();

  // Example for button animation
  const backScale = useSharedValue(1);
  const notificationScale = useSharedValue(1);
  const searchScale = useSharedValue(1);
  const menuScale = useSharedValue(1);

  const animateButton = (button: Animated.SharedValue<number>) => {
    button.value = withTiming(0.9, { duration: 100 });
    setTimeout(() => {
      button.value = withTiming(1, { duration: 200 });
    }, 100);
  };

  const backAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: backScale.value }],
    };
  });

  const notificationAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: notificationScale.value }],
    };
  });

  const searchAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: searchScale.value }],
    };
  });

  const menuAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: menuScale.value }],
    };
  });

  return (
    <View style={styles.exampleContainer}>
      {/* Standard header with back button */}
      <View 
        style={[
          styles.headerContainer, 
          { 
            backgroundColor: colors.surface, 
            borderBottomColor: colors.border,
            ...getShadow('small')
          }
        ]}
      >
        <Animated.View style={backAnimatedStyle}>
          <Pressable 
            style={styles.iconButton} 
            onPress={() => animateButton(backScale)}
          >
            <ChevronLeft color={colors.text.primary} size={24} />
          </Pressable>
        </Animated.View>
        <Text style={[styles.headerTitle, { color: colors.text.primary, ...fonts.medium }]}>
          Basic Header
        </Text>
        <View style={styles.placeholder} />
      </View>

      {/* Header with multiple action buttons */}
      <View 
        style={[
          styles.headerContainer, 
          { 
            backgroundColor: colors.surface, 
            borderBottomColor: colors.border,
            marginTop: 16,
            ...getShadow('small') 
          }
        ]}
      >
        <Text style={[styles.headerTitle, { color: colors.text.primary, ...fonts.medium }]}>
          Multiple Actions
        </Text>
        <View style={styles.actionButtons}>
          <Animated.View style={searchAnimatedStyle}>
            <Pressable 
              style={styles.iconButton} 
              onPress={() => animateButton(searchScale)}
            >
              <Search color={colors.text.primary} size={20} />
            </Pressable>
          </Animated.View>
          <Animated.View style={notificationAnimatedStyle}>
            <Pressable 
              style={styles.iconButton} 
              onPress={() => animateButton(notificationScale)}
            >
              <Bell color={colors.text.primary} size={20} />
            </Pressable>
          </Animated.View>
          <Animated.View style={menuAnimatedStyle}>
            <Pressable 
              style={styles.iconButton} 
              onPress={() => animateButton(menuScale)}
            >
              <Menu color={colors.text.primary} size={20} />
            </Pressable>
          </Animated.View>
        </View>
      </View>

      {/* Colored header */}
      <View 
        style={[
          styles.headerContainer, 
          { 
            backgroundColor: colors.primary, 
            marginTop: 16,
            ...getShadow('small') 
          }
        ]}
      >
        <Animated.View style={backAnimatedStyle}>
          <Pressable 
            style={styles.iconButton} 
            onPress={() => animateButton(backScale)}
          >
            <ChevronLeft color={colors.white} size={24} />
          </Pressable>
        </Animated.View>
        <Text style={[styles.headerTitle, { color: colors.white, ...fonts.medium }]}>
          Colored Header
        </Text>
        <Animated.View style={menuAnimatedStyle}>
          <Pressable 
            style={styles.iconButton} 
            onPress={() => animateButton(menuScale)}
          >
            <Menu color={colors.white} size={20} />
          </Pressable>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  exampleContainer: {
    width: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  headerTitle: {
    fontSize: 18,
  },
  iconButton: {
    padding: 8,
    borderRadius: 20,
  },
  placeholder: {
    width: 40,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 8,
  },
});