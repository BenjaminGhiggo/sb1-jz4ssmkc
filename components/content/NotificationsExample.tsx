import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import useTheme from '@/hooks/useTheme';
import { MessageSquare, Bell, User, Package, Heart, X } from 'lucide-react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  withSequence,
  Easing,
  interpolate,
  Extrapolate
} from 'react-native-reanimated';

export default function NotificationsExample() {
  const { colors, fonts, getShadow } = useTheme();
  
  // Notification visibility states
  const [toastVisible, setToastVisible] = useState(false);
  const [badgeCount, setBadgeCount] = useState(2);
  
  const [messageBadgeVisible, setMessageBadgeVisible] = useState(true);
  const [notificationBadgeVisible, setNotificationBadgeVisible] = useState(true);
  
  // Animation values
  const buttonScale = useSharedValue(1);
  const toastTranslateY = useSharedValue(100);
  const toastOpacity = useSharedValue(0);
  const badgeScale = useSharedValue(1);
  
  const animateButtonPress = () => {
    buttonScale.value = withSequence(
      withTiming(0.95, { duration: 100 }),
      withTiming(1, { duration: 100 })
    );
  };
  
  const animateBadge = () => {
    badgeScale.value = withSequence(
      withTiming(1.2, { duration: 150 }),
      withTiming(1, { duration: 150 })
    );
  };
  
  const showToastNotification = () => {
    animateButtonPress();
    setToastVisible(true);
    
    toastTranslateY.value = withTiming(0, {
      duration: 500,
      easing: Easing.out(Easing.back(1.5)),
    });
    toastOpacity.value = withTiming(1, { duration: 300 });
    
    // Auto-hide toast after 3 seconds
    setTimeout(() => {
      hideToastNotification();
    }, 3000);
  };
  
  const hideToastNotification = () => {
    toastTranslateY.value = withTiming(100, { duration: 300 });
    toastOpacity.value = withTiming(0, { duration: 300 });
    
    setTimeout(() => {
      setToastVisible(false);
    }, 300);
  };
  
  const incrementBadge = () => {
    animateButtonPress();
    animateBadge();
    setBadgeCount(prev => prev + 1);
  };
  
  const toggleMessageBadge = () => {
    animateButtonPress();
    setMessageBadgeVisible(prev => !prev);
  };
  
  const toggleNotificationBadge = () => {
    animateButtonPress();
    setNotificationBadgeVisible(prev => !prev);
  };
  
  const buttonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: buttonScale.value }],
    };
  });
  
  const toastAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: toastTranslateY.value }],
      opacity: toastOpacity.value,
    };
  });
  
  const badgeAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: badgeScale.value }],
    };
  });
  
  return (
    <View style={styles.container}>
      {/* Notification Trigger Buttons */}
      <View style={styles.buttonContainer}>
        <Animated.View style={buttonAnimatedStyle}>
          <Pressable
            style={[
              styles.button,
              { backgroundColor: colors.primary }
            ]}
            onPress={showToastNotification}
          >
            <Text style={[styles.buttonText, { color: colors.white, ...fonts.medium }]}>
              Show Toast
            </Text>
          </Pressable>
        </Animated.View>
        
        <Animated.View style={buttonAnimatedStyle}>
          <Pressable
            style={[
              styles.button,
              { backgroundColor: colors.secondary }
            ]}
            onPress={incrementBadge}
          >
            <Text style={[styles.buttonText, { color: colors.white, ...fonts.medium }]}>
              Add Badge Count
            </Text>
          </Pressable>
        </Animated.View>
        
        <Animated.View style={buttonAnimatedStyle}>
          <Pressable
            style={[
              styles.button,
              { backgroundColor: colors.accent }
            ]}
            onPress={toggleMessageBadge}
          >
            <Text style={[styles.buttonText, { color: colors.white, ...fonts.medium }]}>
              Toggle Message Badge
            </Text>
          </Pressable>
        </Animated.View>
        
        <Animated.View style={buttonAnimatedStyle}>
          <Pressable
            style={[
              styles.button,
              { backgroundColor: colors.error.light }
            ]}
            onPress={toggleNotificationBadge}
          >
            <Text style={[styles.buttonText, { color: colors.white, ...fonts.medium }]}>
              Toggle Notification Badge
            </Text>
          </Pressable>
        </Animated.View>
      </View>
      
      {/* Toast Notification */}
      {toastVisible && (
        <Animated.View 
          style={[
            styles.toast,
            { backgroundColor: colors.surface },
            getShadow('medium'),
            toastAnimatedStyle
          ]}
        >
          <Heart size={20} color={colors.error.light} />
          <Text style={[styles.toastText, { color: colors.text.primary, ...fonts.regular }]}>
            Emily liked your photo
          </Text>
          <Pressable onPress={hideToastNotification}>
            <X size={18} color={colors.text.secondary} />
          </Pressable>
        </Animated.View>
      )}
      
      {/* Badge Examples */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Notification Badges
        </Text>
        
        <View style={styles.badgesContainer}>
          {/* Badge with count */}
          <View style={styles.badgeItem}>
            <View style={styles.iconWithBadge}>
              <Bell size={24} color={colors.text.primary} />
              <Animated.View 
                style={[
                  styles.badge,
                  styles.countBadge,
                  { backgroundColor: colors.error.light },
                  badgeAnimatedStyle
                ]}
              >
                <Text style={[styles.badgeText, { color: colors.white, ...fonts.medium }]}>
                  {badgeCount}
                </Text>
              </Animated.View>
            </View>
            <Text style={[styles.badgeLabel, { color: colors.text.secondary, ...fonts.regular }]}>
              Count Badge
            </Text>
          </View>
          
          {/* Dot badge - Messages */}
          <View style={styles.badgeItem}>
            <View style={styles.iconWithBadge}>
              <MessageSquare size={24} color={colors.text.primary} />
              {messageBadgeVisible && (
                <View 
                  style={[
                    styles.badge,
                    styles.dotBadge,
                    { backgroundColor: colors.primary }
                  ]}
                />
              )}
            </View>
            <Text style={[styles.badgeLabel, { color: colors.text.secondary, ...fonts.regular }]}>
              Dot Badge
            </Text>
          </View>
          
          {/* Dot badge - Notifications */}
          <View style={styles.badgeItem}>
            <View style={styles.iconWithBadge}>
              <Bell size={24} color={colors.text.primary} />
              {notificationBadgeVisible && (
                <View 
                  style={[
                    styles.badge,
                    styles.dotBadge,
                    { backgroundColor: colors.error.light }
                  ]}
                />
              )}
            </View>
            <Text style={[styles.badgeLabel, { color: colors.text.secondary, ...fonts.regular }]}>
              Alert Badge
            </Text>
          </View>
        </View>
      </View>
      
      {/* Notification List */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Notification List
        </Text>
        
        <View style={[styles.notificationsList, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          {/* User Notification */}
          <View style={[styles.notification, styles.notificationBorder, { borderBottomColor: colors.border }]}>
            <View style={[styles.notificationIcon, { backgroundColor: colors.primary + '15' }]}>
              <User size={20} color={colors.primary} />
            </View>
            <View style={styles.notificationContent}>
              <Text style={[styles.notificationText, { color: colors.text.primary, ...fonts.regular }]}>
                <Text style={fonts.medium}>John Smith</Text> started following you
              </Text>
              <Text style={[styles.notificationTime, { color: colors.text.secondary, ...fonts.regular }]}>
                5 minutes ago
              </Text>
            </View>
          </View>
          
          {/* Like Notification */}
          <View style={[styles.notification, styles.notificationBorder, { borderBottomColor: colors.border }]}>
            <View style={[styles.notificationIcon, { backgroundColor: colors.error.light + '15' }]}>
              <Heart size={20} color={colors.error.light} />
            </View>
            <View style={styles.notificationContent}>
              <Text style={[styles.notificationText, { color: colors.text.primary, ...fonts.regular }]}>
                <Text style={fonts.medium}>Sarah</Text> and <Text style={fonts.medium}>5 others</Text> liked your photo
              </Text>
              <Text style={[styles.notificationTime, { color: colors.text.secondary, ...fonts.regular }]}>
                20 minutes ago
              </Text>
            </View>
          </View>
          
          {/* Order Notification */}
          <View style={[styles.notification]}>
            <View style={[styles.notificationIcon, { backgroundColor: colors.success.light + '15' }]}>
              <Package size={20} color={colors.success.light} />
            </View>
            <View style={styles.notificationContent}>
              <Text style={[styles.notificationText, { color: colors.text.primary, ...fonts.regular }]}>
                Your order <Text style={fonts.medium}>#12345</Text> has been shipped
              </Text>
              <Text style={[styles.notificationTime, { color: colors.text.secondary, ...fonts.regular }]}>
                2 hours ago
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
  },
  buttonContainer: {
    gap: 12,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
  },
  toast: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    zIndex: 10,
  },
  toastText: {
    flex: 1,
    fontSize: 14,
    marginHorizontal: 12,
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 16,
  },
  badgesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  badgeItem: {
    alignItems: 'center',
  },
  iconWithBadge: {
    position: 'relative',
    padding: 8,
  },
  badge: {
    position: 'absolute',
    borderWidth: 2,
    borderColor: 'white',
  },
  countBadge: {
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    right: 0,
  },
  dotBadge: {
    width: 10,
    height: 10,
    borderRadius: 5,
    top: 8,
    right: 6,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  badgeLabel: {
    fontSize: 12,
    marginTop: 8,
  },
  notificationsList: {
    borderRadius: 8,
    borderWidth: 1,
    overflow: 'hidden',
  },
  notification: {
    flexDirection: 'row',
    padding: 16,
  },
  notificationBorder: {
    borderBottomWidth: 1,
  },
  notificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  notificationText: {
    fontSize: 14,
    marginBottom: 4,
  },
  notificationTime: {
    fontSize: 12,
  },
});