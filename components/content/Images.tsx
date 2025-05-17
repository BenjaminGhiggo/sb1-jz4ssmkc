import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import useTheme from '@/hooks/useTheme';
import { Heart, MessageSquare, Share2 } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Images() {
  const { colors, fonts, getShadow } = useTheme();
  
  return (
    <View style={styles.container}>
      {/* Basic Image */}
      <View style={styles.imageContainer}>
        <Text style={[styles.imageLabel, { color: colors.text.secondary, ...fonts.medium }]}>
          Standard Image
        </Text>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=800' }}
          style={styles.standardImage}
          resizeMode="cover"
        />
      </View>
      
      {/* Rounded Image */}
      <View style={styles.imageContainer}>
        <Text style={[styles.imageLabel, { color: colors.text.secondary, ...fonts.medium }]}>
          Rounded Image
        </Text>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&w=800' }}
          style={[styles.roundedImage, getShadow('small')]}
          resizeMode="cover"
        />
      </View>
      
      {/* Circle / Avatar Image */}
      <View style={styles.avatarsContainer}>
        <Text style={[styles.imageLabel, { color: colors.text.secondary, ...fonts.medium }]}>
          Avatar / Circle Images
        </Text>
        <View style={styles.avatarsRow}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800' }}
            style={[styles.avatarImage, { borderColor: colors.secondary }]}
            resizeMode="cover"
          />
          <Image
            source={{ uri: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800' }}
            style={[styles.avatarImage, { borderColor: colors.primary }]}
            resizeMode="cover"
          />
          <Image
            source={{ uri: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800' }}
            style={[styles.avatarImage, { borderColor: colors.accent }]}
            resizeMode="cover"
          />
        </View>
      </View>
      
      {/* Image with Overlay Text */}
      <View style={styles.imageContainer}>
        <Text style={[styles.imageLabel, { color: colors.text.secondary, ...fonts.medium }]}>
          Image with Overlay
        </Text>
        <View style={[styles.overlayImageContainer, getShadow('medium')]}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800' }}
            style={styles.overlayImage}
            resizeMode="cover"
          />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.8)']}
            style={styles.overlayGradient}
          >
            <Text style={[styles.overlayTitle, { color: colors.white, ...fonts.bold }]}>
              Beautiful Mountain View
            </Text>
            <Text style={[styles.overlaySubtitle, { color: colors.white, ...fonts.regular }]}>
              Travel & Nature Photography
            </Text>
          </LinearGradient>
        </View>
      </View>
      
      {/* Image Card with Actions */}
      <View style={styles.imageContainer}>
        <Text style={[styles.imageLabel, { color: colors.text.secondary, ...fonts.medium }]}>
          Image Card with Actions
        </Text>
        <View style={[styles.imageCard, { backgroundColor: colors.surface, borderColor: colors.border }, getShadow('small')]}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=800' }}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <View style={styles.cardContent}>
            <Text style={[styles.cardTitle, { color: colors.text.primary, ...fonts.medium }]}>
              Sunset at the Beach
            </Text>
            <Text style={[styles.cardDescription, { color: colors.text.secondary, ...fonts.regular }]}>
              Beautiful beach sunset with colorful sky and calm water.
            </Text>
            <View style={[styles.cardActions, { borderTopColor: colors.border }]}>
              <Pressable style={styles.cardAction}>
                <Heart size={18} color={colors.error.light} />
                <Text style={[styles.actionText, { color: colors.text.secondary, ...fonts.regular }]}>
                  24
                </Text>
              </Pressable>
              <Pressable style={styles.cardAction}>
                <MessageSquare size={18} color={colors.text.secondary} />
                <Text style={[styles.actionText, { color: colors.text.secondary, ...fonts.regular }]}>
                  3
                </Text>
              </Pressable>
              <Pressable style={styles.cardAction}>
                <Share2 size={18} color={colors.text.secondary} />
              </Pressable>
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
  },
  imageContainer: {
    marginBottom: 24,
  },
  imageLabel: {
    fontSize: 14,
    marginBottom: 8,
  },
  standardImage: {
    width: '100%',
    height: 200,
  },
  roundedImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
  avatarsContainer: {
    marginBottom: 24,
  },
  avatarsRow: {
    flexDirection: 'row',
    gap: 16,
  },
  avatarImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
  },
  overlayImageContainer: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  overlayImage: {
    width: '100%',
    height: '100%',
  },
  overlayGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    justifyContent: 'flex-end',
    padding: 16,
  },
  overlayTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  overlaySubtitle: {
    fontSize: 14,
  },
  imageCard: {
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 180,
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    marginBottom: 16,
  },
  cardActions: {
    flexDirection: 'row',
    borderTopWidth: 1,
    paddingTop: 12,
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
});