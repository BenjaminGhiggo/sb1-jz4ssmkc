import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import useTheme from '@/hooks/useTheme';
import { ChevronRight, Navigation, Zap, Palette, LayoutGrid } from 'lucide-react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

type ComponentCardProps = {
  title: string;
  description: string;
  iconName: string;
  color: string;
  onPress: () => void;
};

export default function ComponentCard({ 
  title, 
  description, 
  iconName, 
  color, 
  onPress 
}: ComponentCardProps) {
  const { colors, sizes, fonts, getShadow } = useTheme();
  const scale = useSharedValue(1);
  
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });
  
  const renderIcon = () => {
    switch (iconName) {
      case 'navigation':
        return <Navigation size={24} color={colors.white} />;
      case 'zap':
        return <Zap size={24} color={colors.white} />;
      case 'palette':
        return <Palette size={24} color={colors.white} />;
      case 'layout-grid':
        return <LayoutGrid size={24} color={colors.white} />;
      default:
        return <Navigation size={24} color={colors.white} />;
    }
  };
  
  const handlePressIn = () => {
    scale.value = withTiming(0.97, { duration: 100 });
  };
  
  const handlePressOut = () => {
    scale.value = withTiming(1, { duration: 200 });
  };
  
  return (
    <Animated.View style={animatedStyles}>
      <Pressable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={({ pressed }) => [
          styles.container,
          {
            backgroundColor: colors.surface,
            borderWidth: 1,
            borderColor: colors.border,
            ...getShadow('small'),
          },
        ]}
      >
        <View style={[styles.iconContainer, { backgroundColor: color }]}>
          {renderIcon()}
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.title, { color: colors.text.primary, ...fonts.medium }]}>
            {title}
          </Text>
          <Text 
            style={[styles.description, { color: colors.text.secondary, ...fonts.regular }]}
            numberOfLines={2}
          >
            {description}
          </Text>
        </View>
        <View style={styles.arrowContainer}>
          <ChevronRight size={20} color={colors.text.secondary} />
        </View>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  title: {
    fontSize: 16,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
  },
  arrowContainer: {
    marginLeft: 8,
  },
});