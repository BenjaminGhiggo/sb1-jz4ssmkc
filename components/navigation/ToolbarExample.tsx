import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import useTheme from '@/hooks/useTheme';
import { Share2, Download, Heart, Bookmark, MoreVertical, Copy, Trash2, Edit2 } from 'lucide-react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

export default function ToolbarExample() {
  const { colors, sizes, fonts, getShadow } = useTheme();
  const [favorited, setFavorited] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [moreMenuVisible, setMoreMenuVisible] = useState(false);
  
  // Animation values
  const buttonScale = useSharedValue(1);
  const moreMenuOpacity = useSharedValue(0);
  const moreMenuScale = useSharedValue(0.8);
  
  const animateButtonPress = () => {
    buttonScale.value = withTiming(0.9, { duration: 100 });
    setTimeout(() => {
      buttonScale.value = withTiming(1, { duration: 200 });
    }, 100);
  };
  
  const toggleFavorite = () => {
    animateButtonPress();
    setFavorited(prev => !prev);
  };
  
  const toggleBookmark = () => {
    animateButtonPress();
    setBookmarked(prev => !prev);
  };
  
  const toggleMoreMenu = () => {
    if (moreMenuVisible) {
      // Close menu
      moreMenuOpacity.value = withTiming(0, { duration: 200 });
      moreMenuScale.value = withTiming(0.8, { duration: 200 });
      setTimeout(() => setMoreMenuVisible(false), 200);
    } else {
      // Open menu
      setMoreMenuVisible(true);
      moreMenuOpacity.value = withTiming(1, { duration: 200 });
      moreMenuScale.value = withTiming(1, { duration: 200 });
    }
  };
  
  const buttonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: buttonScale.value }],
    };
  });
  
  const moreMenuAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: moreMenuOpacity.value,
      transform: [{ scale: moreMenuScale.value }],
    };
  });
  
  const renderMenuItem = (Icon: any, label: string, onPress: () => void) => {
    return (
      <Pressable 
        style={({ pressed }) => [
          styles.menuItem,
          pressed && { backgroundColor: colors.primary + '10' }
        ]}
        onPress={() => {
          onPress();
          toggleMoreMenu();
        }}
      >
        <Icon size={18} color={colors.text.primary} />
        <Text style={[styles.menuItemText, { color: colors.text.primary, ...fonts.regular }]}>
          {label}
        </Text>
      </Pressable>
    );
  };
  
  return (
    <View style={styles.exampleContainer}>
      {/* Basic Toolbar */}
      <View 
        style={[
          styles.toolbarContainer, 
          { 
            backgroundColor: colors.surface,
            borderColor: colors.border,
            ...getShadow('small')
          }
        ]}
      >
        <View style={styles.titleContainer}>
          <Text style={[styles.toolbarTitle, { color: colors.text.primary, ...fonts.medium }]}>
            Document Title
          </Text>
        </View>
        
        <View style={styles.actionButtons}>
          <Pressable 
            style={styles.actionButton} 
            onPress={() => animateButtonPress()}
          >
            <Animated.View style={buttonAnimatedStyle}>
              <Share2 size={20} color={colors.text.primary} />
            </Animated.View>
          </Pressable>
          
          <Pressable 
            style={styles.actionButton} 
            onPress={() => animateButtonPress()}
          >
            <Animated.View style={buttonAnimatedStyle}>
              <Download size={20} color={colors.text.primary} />
            </Animated.View>
          </Pressable>
          
          <Pressable 
            style={styles.actionButton} 
            onPress={toggleFavorite}
          >
            <Animated.View style={buttonAnimatedStyle}>
              <Heart 
                size={20} 
                color={favorited ? colors.error.light : colors.text.primary}
                fill={favorited ? colors.error.light : 'none'}
              />
            </Animated.View>
          </Pressable>
          
          <Pressable 
            style={styles.actionButton} 
            onPress={toggleBookmark}
          >
            <Animated.View style={buttonAnimatedStyle}>
              <Bookmark 
                size={20} 
                color={bookmarked ? colors.primary : colors.text.primary}
                fill={bookmarked ? colors.primary : 'none'}
              />
            </Animated.View>
          </Pressable>
        </View>
      </View>
      
      {/* Toolbar with More Menu */}
      <View 
        style={[
          styles.toolbarContainer, 
          { 
            backgroundColor: colors.surface,
            borderColor: colors.border,
            marginTop: 16,
            ...getShadow('small')
          }
        ]}
      >
        <View style={styles.titleContainer}>
          <Text style={[styles.toolbarTitle, { color: colors.text.primary, ...fonts.medium }]}>
            With Dropdown Menu
          </Text>
        </View>
        
        <View style={styles.actionButtons}>
          <Pressable 
            style={styles.actionButton} 
            onPress={toggleFavorite}
          >
            <Animated.View style={buttonAnimatedStyle}>
              <Heart 
                size={20} 
                color={favorited ? colors.error.light : colors.text.primary}
                fill={favorited ? colors.error.light : 'none'}
              />
            </Animated.View>
          </Pressable>
          
          <Pressable 
            style={styles.actionButton} 
            onPress={toggleMoreMenu}
          >
            <MoreVertical size={20} color={colors.text.primary} />
          </Pressable>
          
          {/* More Menu Dropdown */}
          {moreMenuVisible && (
            <Animated.View 
              style={[
                styles.moreMenu, 
                { 
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                  ...getShadow('medium')
                },
                moreMenuAnimatedStyle
              ]}
            >
              {renderMenuItem(Copy, 'Copy', () => console.log('Copy'))}
              {renderMenuItem(Edit2, 'Edit', () => console.log('Edit'))}
              {renderMenuItem(Share2, 'Share', () => console.log('Share'))}
              {renderMenuItem(Trash2, 'Delete', () => console.log('Delete'))}
            </Animated.View>
          )}
        </View>
      </View>
      
      {/* Colored Toolbar */}
      <View 
        style={[
          styles.toolbarContainer, 
          { 
            backgroundColor: colors.primary,
            borderColor: colors.primary,
            marginTop: 16,
            ...getShadow('small')
          }
        ]}
      >
        <View style={styles.titleContainer}>
          <Text style={[styles.toolbarTitle, { color: colors.white, ...fonts.medium }]}>
            Colored Toolbar
          </Text>
        </View>
        
        <View style={styles.actionButtons}>
          <Pressable 
            style={styles.actionButton} 
            onPress={() => animateButtonPress()}
          >
            <Animated.View style={buttonAnimatedStyle}>
              <Share2 size={20} color={colors.white} />
            </Animated.View>
          </Pressable>
          
          <Pressable 
            style={styles.actionButton} 
            onPress={() => animateButtonPress()}
          >
            <Animated.View style={buttonAnimatedStyle}>
              <Download size={20} color={colors.white} />
            </Animated.View>
          </Pressable>
          
          <Pressable 
            style={styles.actionButton} 
            onPress={toggleFavorite}
          >
            <Animated.View style={buttonAnimatedStyle}>
              <Heart 
                size={20} 
                color={colors.white}
                fill={favorited ? colors.white : 'none'}
              />
            </Animated.View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  exampleContainer: {
    width: '100%',
    position: 'relative',
  },
  toolbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
  },
  titleContainer: {
    flex: 1,
  },
  toolbarTitle: {
    fontSize: 16,
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  actionButton: {
    padding: 8,
    marginLeft: 8,
  },
  moreMenu: {
    position: 'absolute',
    top: 40,
    right: 0,
    width: 150,
    borderRadius: 8,
    borderWidth: 1,
    overflow: 'hidden',
    zIndex: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  menuItemText: {
    marginLeft: 8,
    fontSize: 14,
  },
});