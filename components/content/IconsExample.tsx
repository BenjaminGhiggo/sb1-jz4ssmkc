import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useTheme from '@/hooks/useTheme';
import { 
  Home, User, Settings, Bell, Search, Heart, Mail, Phone, 
  Calendar, CreditCard, FileText, Map, Image, Music, 
  Send, MessageSquare, Camera
} from 'lucide-react-native';

export default function IconsExample() {
  const { colors, fonts } = useTheme();
  
  return (
    <View style={styles.container}>
      {/* Basic Icons */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Basic Icons
        </Text>
        
        <View style={styles.iconsGrid}>
          <View style={styles.iconItem}>
            <Home color={colors.text.primary} size={24} />
            <Text style={[styles.iconLabel, { color: colors.text.secondary, ...fonts.regular }]}>
              Home
            </Text>
          </View>
          
          <View style={styles.iconItem}>
            <User color={colors.text.primary} size={24} />
            <Text style={[styles.iconLabel, { color: colors.text.secondary, ...fonts.regular }]}>
              User
            </Text>
          </View>
          
          <View style={styles.iconItem}>
            <Settings color={colors.text.primary} size={24} />
            <Text style={[styles.iconLabel, { color: colors.text.secondary, ...fonts.regular }]}>
              Settings
            </Text>
          </View>
          
          <View style={styles.iconItem}>
            <Bell color={colors.text.primary} size={24} />
            <Text style={[styles.iconLabel, { color: colors.text.secondary, ...fonts.regular }]}>
              Bell
            </Text>
          </View>
        </View>
      </View>
      
      {/* Colored Icons */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Colored Icons
        </Text>
        
        <View style={styles.iconsGrid}>
          <View style={styles.iconItem}>
            <Heart color={colors.error.light} size={24} />
            <Text style={[styles.iconLabel, { color: colors.text.secondary, ...fonts.regular }]}>
              Heart
            </Text>
          </View>
          
          <View style={styles.iconItem}>
            <Mail color={colors.primary} size={24} />
            <Text style={[styles.iconLabel, { color: colors.text.secondary, ...fonts.regular }]}>
              Mail
            </Text>
          </View>
          
          <View style={styles.iconItem}>
            <Phone color={colors.secondary} size={24} />
            <Text style={[styles.iconLabel, { color: colors.text.secondary, ...fonts.regular }]}>
              Phone
            </Text>
          </View>
          
          <View style={styles.iconItem}>
            <Search color={colors.accent} size={24} />
            <Text style={[styles.iconLabel, { color: colors.text.secondary, ...fonts.regular }]}>
              Search
            </Text>
          </View>
        </View>
      </View>
      
      {/* Icon Sizes */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Icon Sizes
        </Text>
        
        <View style={styles.sizesContainer}>
          <View style={styles.iconItem}>
            <User color={colors.primary} size={16} />
            <Text style={[styles.iconLabel, { color: colors.text.secondary, ...fonts.regular }]}>
              16px
            </Text>
          </View>
          
          <View style={styles.iconItem}>
            <User color={colors.primary} size={24} />
            <Text style={[styles.iconLabel, { color: colors.text.secondary, ...fonts.regular }]}>
              24px
            </Text>
          </View>
          
          <View style={styles.iconItem}>
            <User color={colors.primary} size={32} />
            <Text style={[styles.iconLabel, { color: colors.text.secondary, ...fonts.regular }]}>
              32px
            </Text>
          </View>
          
          <View style={styles.iconItem}>
            <User color={colors.primary} size={48} />
            <Text style={[styles.iconLabel, { color: colors.text.secondary, ...fonts.regular }]}>
              48px
            </Text>
          </View>
        </View>
      </View>
      
      {/* Icons with Backgrounds */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Icons with Backgrounds
        </Text>
        
        <View style={styles.iconsGrid}>
          <View style={styles.iconItem}>
            <View style={[styles.iconCircle, { backgroundColor: colors.primary + '15' }]}>
              <Calendar color={colors.primary} size={20} />
            </View>
            <Text style={[styles.iconLabel, { color: colors.text.secondary, ...fonts.regular }]}>
              Calendar
            </Text>
          </View>
          
          <View style={styles.iconItem}>
            <View style={[styles.iconCircle, { backgroundColor: colors.secondary + '15' }]}>
              <CreditCard color={colors.secondary} size={20} />
            </View>
            <Text style={[styles.iconLabel, { color: colors.text.secondary, ...fonts.regular }]}>
              Payment
            </Text>
          </View>
          
          <View style={styles.iconItem}>
            <View style={[styles.iconCircle, { backgroundColor: colors.accent + '15' }]}>
              <FileText color={colors.accent} size={20} />
            </View>
            <Text style={[styles.iconLabel, { color: colors.text.secondary, ...fonts.regular }]}>
              Documents
            </Text>
          </View>
          
          <View style={styles.iconItem}>
            <View style={[styles.iconCircle, { backgroundColor: colors.error.light + '15' }]}>
              <Map color={colors.error.light} size={20} />
            </View>
            <Text style={[styles.iconLabel, { color: colors.text.secondary, ...fonts.regular }]}>
              Location
            </Text>
          </View>
        </View>
      </View>
      
      {/* More Icons Examples */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          More Icons
        </Text>
        
        <View style={styles.iconsGrid}>
          <View style={styles.iconItem}>
            <Image color={colors.text.primary} size={24} />
            <Text style={[styles.iconLabel, { color: colors.text.secondary, ...fonts.regular }]}>
              Image
            </Text>
          </View>
          
          <View style={styles.iconItem}>
            <Music color={colors.text.primary} size={24} />
            <Text style={[styles.iconLabel, { color: colors.text.secondary, ...fonts.regular }]}>
              Music
            </Text>
          </View>
          
          <View style={styles.iconItem}>
            <Send color={colors.text.primary} size={24} />
            <Text style={[styles.iconLabel, { color: colors.text.secondary, ...fonts.regular }]}>
              Send
            </Text>
          </View>
          
          <View style={styles.iconItem}>
            <MessageSquare color={colors.text.primary} size={24} />
            <Text style={[styles.iconLabel, { color: colors.text.secondary, ...fonts.regular }]}>
              Message
            </Text>
          </View>
          
          <View style={styles.iconItem}>
            <Camera color={colors.text.primary} size={24} />
            <Text style={[styles.iconLabel, { color: colors.text.secondary, ...fonts.regular }]}>
              Camera
            </Text>
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
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 16,
  },
  iconsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 24,
  },
  iconItem: {
    alignItems: 'center',
    width: 64,
  },
  iconLabel: {
    fontSize: 12,
    marginTop: 8,
    textAlign: 'center',
  },
  sizesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});