import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import useTheme from '@/hooks/useTheme';
import { Heart, MessageSquare, Share2, Star, MapPin, Calendar, ChevronRight, User, Clock } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

export default function CardsExample() {
  const { colors, fonts, getShadow } = useTheme();
  
  // Animation for card press
  const cardScale = useSharedValue(1);
  
  const animateCardPress = () => {
    cardScale.value = withTiming(0.98, { duration: 100 });
    setTimeout(() => {
      cardScale.value = withTiming(1, { duration: 200 });
    }, 100);
  };
  
  const cardAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: cardScale.value }],
    };
  });
  
  return (
    <View style={styles.container}>
      {/* Basic Card */}
      <Animated.View style={[cardAnimatedStyle]}>
        <Pressable
          style={({ pressed }) => [
            styles.card,
            { backgroundColor: colors.surface, borderColor: colors.border },
            getShadow('small'),
            pressed && { opacity: 0.9 }
          ]}
          onPress={animateCardPress}
        >
          <Text style={[styles.cardTitle, { color: colors.text.primary, ...fonts.medium }]}>
            Basic Card
          </Text>
          <Text style={[styles.cardDescription, { color: colors.text.secondary, ...fonts.regular }]}>
            This is a simple card with basic styling. Cards are used to group related content and actions.
          </Text>
        </Pressable>
      </Animated.View>
      
      {/* Image Card */}
      <Animated.View style={[cardAnimatedStyle, { marginTop: 24 }]}>
        <Pressable
          style={({ pressed }) => [
            styles.card,
            { backgroundColor: colors.surface, borderColor: colors.border },
            getShadow('medium'),
            pressed && { opacity: 0.9 }
          ]}
          onPress={animateCardPress}
        >
          <Image
            source={{ uri: 'https://images.pexels.com/photos/3225529/pexels-photo-3225529.jpeg?auto=compress&cs=tinysrgb&w=800' }}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <View style={styles.cardContent}>
            <Text style={[styles.cardTitle, { color: colors.text.primary, ...fonts.medium }]}>
              Mountain Retreat
            </Text>
            <Text style={[styles.cardDescription, { color: colors.text.secondary, ...fonts.regular }]}>
              Peaceful mountain getaway with stunning views and modern amenities.
            </Text>
            
            <View style={[styles.cardActions, { borderTopColor: colors.border }]}>
              <Pressable style={styles.cardAction}>
                <Heart size={18} color={colors.error.light} />
                <Text style={[styles.actionText, { color: colors.text.secondary, ...fonts.regular }]}>
                  128
                </Text>
              </Pressable>
              <Pressable style={styles.cardAction}>
                <MessageSquare size={18} color={colors.text.secondary} />
                <Text style={[styles.actionText, { color: colors.text.secondary, ...fonts.regular }]}>
                  47
                </Text>
              </Pressable>
              <Pressable style={styles.cardAction}>
                <Share2 size={18} color={colors.text.secondary} />
              </Pressable>
            </View>
          </View>
        </Pressable>
      </Animated.View>
      
      {/* Product Card */}
      <Animated.View style={[cardAnimatedStyle, { marginTop: 24 }]}>
        <Pressable
          style={({ pressed }) => [
            styles.productCard,
            { backgroundColor: colors.surface, borderColor: colors.border },
            getShadow('small'),
            pressed && { opacity: 0.9 }
          ]}
          onPress={animateCardPress}
        >
          <Image
            source={{ uri: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800' }}
            style={styles.productImage}
            resizeMode="cover"
          />
          <View style={styles.productCardContent}>
            <View style={styles.productRating}>
              <Star size={14} color={colors.accent} />
              <Text style={[styles.ratingText, { color: colors.text.primary, ...fonts.medium }]}>
                4.8
              </Text>
              <Text style={[styles.reviewText, { color: colors.text.secondary, ...fonts.regular }]}>
                (256 reviews)
              </Text>
            </View>
            
            <Text style={[styles.productTitle, { color: colors.text.primary, ...fonts.medium }]}>
              Wireless Headphones
            </Text>
            
            <Text style={[styles.productDescription, { color: colors.text.secondary, ...fonts.regular }]}>
              Premium noise-cancelling wireless headphones with 30-hour battery life.
            </Text>
            
            <View style={styles.productFooter}>
              <Text style={[styles.productPrice, { color: colors.text.primary, ...fonts.bold }]}>
                $129.99
              </Text>
              
              <View style={[styles.addToCartButton, { backgroundColor: colors.primary }]}>
                <Text style={[styles.buttonText, { color: colors.white, ...fonts.medium }]}>
                  Add to Cart
                </Text>
              </View>
            </View>
          </View>
        </Pressable>
      </Animated.View>
      
      {/* Event Card */}
      <Animated.View style={[cardAnimatedStyle, { marginTop: 24 }]}>
        <Pressable
          style={({ pressed }) => [
            styles.eventCard,
            { backgroundColor: colors.surface, borderColor: colors.border },
            getShadow('small'),
            pressed && { opacity: 0.9 }
          ]}
          onPress={animateCardPress}
        >
          <View style={styles.eventDateContainer}>
            <Text style={[styles.eventMonth, { color: colors.error.light, ...fonts.medium }]}>
              JUN
            </Text>
            <Text style={[styles.eventDay, { color: colors.text.primary, ...fonts.bold }]}>
              15
            </Text>
          </View>
          
          <View style={styles.eventContent}>
            <Text style={[styles.eventTitle, { color: colors.text.primary, ...fonts.medium }]}>
              Summer Music Festival
            </Text>
            
            <View style={styles.eventDetailsRow}>
              <Clock size={14} color={colors.text.secondary} />
              <Text style={[styles.eventDetailsText, { color: colors.text.secondary, ...fonts.regular }]}>
                8:00 PM - 11:00 PM
              </Text>
            </View>
            
            <View style={styles.eventDetailsRow}>
              <MapPin size={14} color={colors.text.secondary} />
              <Text style={[styles.eventDetailsText, { color: colors.text.secondary, ...fonts.regular }]}>
                Central Park, New York
              </Text>
            </View>
            
            <View style={styles.eventAttendees}>
              <View style={styles.attendeeImages}>
                <Image
                  source={{ uri: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800' }}
                  style={[styles.attendeeImage, { borderColor: colors.surface }]}
                />
                <Image
                  source={{ uri: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800' }}
                  style={[styles.attendeeImage, styles.attendeeImageOverlap, { borderColor: colors.surface }]}
                />
                <Image
                  source={{ uri: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800' }}
                  style={[styles.attendeeImage, styles.attendeeImageOverlap, { borderColor: colors.surface }]}
                />
              </View>
              <Text style={[styles.attendeeCount, { color: colors.text.secondary, ...fonts.regular }]}>
                +42 attending
              </Text>
            </View>
          </View>
        </Pressable>
      </Animated.View>
      
      {/* Gradient Card */}
      <Animated.View style={[cardAnimatedStyle, { marginTop: 24 }]}>
        <Pressable
          style={({ pressed }) => [
            styles.gradientCard,
            getShadow('medium'),
            pressed && { opacity: 0.9 }
          ]}
          onPress={animateCardPress}
        >
          <LinearGradient
            colors={[colors.primary, colors.secondary]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
          >
            <View style={styles.gradientCardContent}>
              <View style={styles.gradientCardIcon}>
                <User size={24} color={colors.white} />
              </View>
              
              <Text style={[styles.gradientCardTitle, { color: colors.white, ...fonts.bold }]}>
                Premium Membership
              </Text>
              
              <Text style={[styles.gradientCardDescription, { color: colors.white, ...fonts.regular }]}>
                Upgrade to access exclusive content and premium features
              </Text>
              
              <View style={[styles.gradientButton, { backgroundColor: colors.white }]}>
                <Text style={[styles.gradientButtonText, { color: colors.primary, ...fonts.medium }]}>
                  Upgrade Now
                </Text>
                <ChevronRight size={16} color={colors.primary} />
              </View>
            </View>
          </LinearGradient>
        </Pressable>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  card: {
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
  },
  cardTitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
  cardImage: {
    width: '100%',
    height: 180,
  },
  cardContent: {
    padding: 16,
  },
  cardActions: {
    flexDirection: 'row',
    borderTopWidth: 1,
    paddingTop: 12,
    marginTop: 12,
  },
  cardAction: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  actionText: {
    fontSize: 14,
    marginLeft: 6,
  },
  productCard: {
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: 200,
  },
  productCardContent: {
    padding: 16,
  },
  productRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingText: {
    fontSize: 14,
    marginLeft: 4,
  },
  reviewText: {
    fontSize: 12,
    marginLeft: 4,
  },
  productTitle: {
    fontSize: 18,
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  productFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productPrice: {
    fontSize: 18,
  },
  addToCartButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 14,
  },
  eventCard: {
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
    padding: 16,
  },
  eventDateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  eventMonth: {
    fontSize: 14,
  },
  eventDay: {
    fontSize: 24,
  },
  eventContent: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  eventDetailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  eventDetailsText: {
    fontSize: 12,
    marginLeft: 6,
  },
  eventAttendees: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  attendeeImages: {
    flexDirection: 'row',
  },
  attendeeImage: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 2,
  },
  attendeeImageOverlap: {
    marginLeft: -10,
  },
  attendeeCount: {
    fontSize: 12,
    marginLeft: 8,
  },
  gradientCard: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  gradient: {
    borderRadius: 12,
  },
  gradientCardContent: {
    padding: 20,
    alignItems: 'center',
  },
  gradientCardIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  gradientCardTitle: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  gradientCardDescription: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    marginBottom: 20,
    opacity: 0.9,
  },
  gradientButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  gradientButtonText: {
    fontSize: 14,
    marginRight: 4,
  },
});