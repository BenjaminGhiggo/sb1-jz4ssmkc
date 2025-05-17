import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import useTheme from '@/hooks/useTheme';
import { Home, User, Settings, HelpCircle, LogOut, Menu, ChevronRight, X } from 'lucide-react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

export default function DrawerExample() {
  const { colors, sizes, fonts, getShadow } = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  // Animation values
  const translateX = useSharedValue(-300);
  const backdropOpacity = useSharedValue(0);
  
  const toggleDrawer = () => {
    if (drawerOpen) {
      // Close drawer
      translateX.value = withTiming(-300, { duration: 300 });
      backdropOpacity.value = withTiming(0, { duration: 300 });
      setTimeout(() => setDrawerOpen(false), 300);
    } else {
      // Open drawer
      setDrawerOpen(true);
      translateX.value = withTiming(0, { duration: 300 });
      backdropOpacity.value = withTiming(0.5, { duration: 300 });
    }
  };
  
  const drawerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });
  
  const backdropStyle = useAnimatedStyle(() => {
    return {
      opacity: backdropOpacity.value,
      display: backdropOpacity.value === 0 ? 'none' : 'flex',
    };
  });
  
  const drawerItems = [
    { icon: Home, label: 'Home' },
    { icon: User, label: 'Profile' },
    { icon: Settings, label: 'Settings' },
    { icon: HelpCircle, label: 'Help & Support' },
    { icon: LogOut, label: 'Logout' },
  ];
  
  const renderDrawerItem = (Icon: any, label: string, index: number) => {
    return (
      <Pressable 
        key={index}
        style={({ pressed }) => [
          styles.drawerItem,
          pressed && { backgroundColor: colors.primary + '10' }
        ]}
        onPress={() => {
          // Close drawer after item press
          toggleDrawer();
        }}
      >
        <Icon size={22} color={colors.text.primary} />
        <Text style={[styles.drawerItemText, { color: colors.text.primary, ...fonts.medium }]}>
          {label}
        </Text>
        <ChevronRight size={16} color={colors.text.secondary} />
      </Pressable>
    );
  };
  
  return (
    <View style={styles.exampleContainer}>
      {/* Header with menu button */}
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
        <Pressable style={styles.menuButton} onPress={toggleDrawer}>
          <Menu size={24} color={colors.text.primary} />
        </Pressable>
        <Text style={[styles.headerTitle, { color: colors.text.primary, ...fonts.medium }]}>
          Drawer Example
        </Text>
        <View style={styles.placeholder} />
      </View>
      
      {/* Content placeholder */}
      <View style={[styles.contentPlaceholder, { backgroundColor: colors.background }]}>
        <Text style={[styles.placeholderText, { color: colors.text.secondary, ...fonts.regular }]}>
          Tap menu button to open drawer
        </Text>
      </View>
      
      {/* Drawer backdrop */}
      {drawerOpen && (
        <Animated.View 
          style={[
            styles.backdrop, 
            { backgroundColor: 'black' },
            backdropStyle
          ]}
          onTouchEnd={toggleDrawer}
        />
      )}
      
      {/* Drawer */}
      {drawerOpen && (
        <Animated.View 
          style={[
            styles.drawer, 
            { 
              backgroundColor: colors.surface,
              ...getShadow('large')
            },
            drawerStyle
          ]}
        >
          <View style={styles.drawerHeader}>
            <View style={styles.drawerUser}>
              <View 
                style={[
                  styles.userAvatar, 
                  { backgroundColor: colors.primary }
                ]}
              >
                <Text style={[styles.userInitial, { color: colors.white }]}>A</Text>
              </View>
              <View style={styles.userInfo}>
                <Text style={[styles.userName, { color: colors.text.primary, ...fonts.bold }]}>
                  Alex Johnson
                </Text>
                <Text style={[styles.userEmail, { color: colors.text.secondary, ...fonts.regular }]}>
                  alex.johnson@example.com
                </Text>
              </View>
            </View>
            <Pressable style={styles.closeButton} onPress={toggleDrawer}>
              <X size={20} color={colors.text.primary} />
            </Pressable>
          </View>
          
          <ScrollView style={styles.drawerContent}>
            {drawerItems.map((item, index) => renderDrawerItem(item.icon, item.label, index))}
          </ScrollView>
          
          <View style={[styles.drawerFooter, { borderTopColor: colors.border }]}>
            <Text style={[styles.footerText, { color: colors.text.secondary, ...fonts.regular }]}>
              App Version 1.0.0
            </Text>
          </View>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  exampleContainer: {
    width: '100%',
    position: 'relative',
    height: 300,
    borderRadius: 8,
    overflow: 'hidden',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 18,
  },
  menuButton: {
    padding: 8,
    borderRadius: 20,
  },
  placeholder: {
    width: 40,
  },
  contentPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 240,
  },
  placeholderText: {
    fontSize: 16,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  drawer: {
    position: 'absolute',
    width: 300,
    height: '100%',
    left: 0,
    top: 0,
    zIndex: 2,
  },
  drawerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  drawerUser: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInitial: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userInfo: {
    marginLeft: 16,
  },
  userName: {
    fontSize: 16,
  },
  userEmail: {
    fontSize: 14,
  },
  closeButton: {
    padding: 8,
  },
  drawerContent: {
    flex: 1,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  drawerItemText: {
    fontSize: 16,
    marginLeft: 16,
    flex: 1,
  },
  drawerFooter: {
    padding: 16,
    borderTopWidth: 1,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
  },
});