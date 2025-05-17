import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import useTheme from '@/hooks/useTheme';
import { Home, User, Settings, Search, Bell } from 'lucide-react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring } from 'react-native-reanimated';

export default function TabBarExample() {
  const { colors, sizes, fonts, getShadow } = useTheme();
  const [activeTab, setActiveTab] = useState('home');

  const tabScale = useSharedValue(1);

  const animateTabPress = () => {
    tabScale.value = withTiming(0.9, { duration: 50 });
    setTimeout(() => {
      tabScale.value = withTiming(1, { duration: 200 });
    }, 50);
  };

  const tabAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: tabScale.value }],
    };
  });

  const handleTabPress = (tab: string) => {
    animateTabPress();
    setActiveTab(tab);
  };

  const renderTabIcon = (name: string, active: boolean) => {
    const color = active ? colors.primary : colors.text.secondary;
    const size = 22;

    switch (name) {
      case 'home':
        return <Home size={size} color={color} />;
      case 'search':
        return <Search size={size} color={color} />;
      case 'notifications':
        return <Bell size={size} color={color} />;
      case 'profile':
        return <User size={size} color={color} />;
      case 'settings':
        return <Settings size={size} color={color} />;
      default:
        return <Home size={size} color={color} />;
    }
  };

  return (
    <View style={styles.exampleContainer}>
      {/* Standard Tab Bar */}
      <View
        style={[
          styles.tabBarContainer,
          {
            backgroundColor: colors.surface,
            borderTopColor: colors.border,
            ...getShadow('small'),
          },
        ]}
      >
        {['home', 'search', 'notifications', 'profile', 'settings'].map((tab) => (
          <Pressable
            key={tab}
            style={styles.tabItem}
            onPress={() => handleTabPress(tab)}
          >
            <Animated.View
              style={[
                styles.tabContent,
                tab === activeTab && tabAnimatedStyle,
              ]}
            >
              {renderTabIcon(tab, tab === activeTab)}
              <Text
                style={[
                  styles.tabLabel,
                  {
                    color: tab === activeTab ? colors.primary : colors.text.secondary,
                    ...fonts.regular,
                  },
                ]}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Text>
            </Animated.View>
          </Pressable>
        ))}
      </View>

      {/* Colored Tab Bar */}
      <View
        style={[
          styles.tabBarContainer,
          {
            backgroundColor: colors.primary,
            marginTop: 24,
            ...getShadow('small'),
          },
        ]}
      >
        {['home', 'search', 'profile', 'settings'].map((tab) => {
          const isActive = tab === activeTab;
          return (
            <Pressable
              key={tab}
              style={styles.tabItem}
              onPress={() => handleTabPress(tab)}
            >
              <Animated.View
                style={[
                  styles.tabContent,
                  tab === activeTab && tabAnimatedStyle,
                ]}
              >
                {renderTabIcon(
                  tab,
                  false // Override to use white color for all icons
                )}
                <Text
                  style={[
                    styles.tabLabel,
                    {
                      color: isActive ? colors.white : 'rgba(255, 255, 255, 0.7)',
                      ...fonts.regular,
                    },
                  ]}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </Text>
              </Animated.View>
            </Pressable>
          );
        })}
      </View>

      {/* Icon-only Tab Bar */}
      <View
        style={[
          styles.tabBarContainer,
          {
            backgroundColor: colors.surface,
            marginTop: 24,
            paddingVertical: 12,
            ...getShadow('small'),
          },
        ]}
      >
        {['home', 'search', 'notifications', 'profile', 'settings'].map((tab) => (
          <Pressable
            key={tab}
            style={styles.iconTabItem}
            onPress={() => handleTabPress(tab)}
          >
            <Animated.View
              style={[
                styles.iconTabContent,
                tab === activeTab && tabAnimatedStyle,
                tab === activeTab && {
                  backgroundColor: colors.primary + '20', // 20% opacity
                  borderRadius: 20,
                },
              ]}
            >
              {renderTabIcon(tab, tab === activeTab)}
            </Animated.View>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  exampleContainer: {
    width: '100%',
  },
  tabBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
  iconTabItem: {
    flex: 1,
    alignItems: 'center',
  },
  tabContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  iconTabContent: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 4,
  },
});