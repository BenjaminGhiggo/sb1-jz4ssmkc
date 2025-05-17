import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import useTheme from '@/hooks/useTheme';
import { ChevronRight, Star, Clock, DollarSign, Check, X, User, MapPin } from 'lucide-react-native';

export default function ListsExample() {
  const { colors, fonts, getShadow } = useTheme();
  
  return (
    <View style={styles.container}>
      {/* Basic List */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Basic List
        </Text>
        
        <View style={[styles.listContainer, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          {['List Item 1', 'List Item 2', 'List Item 3', 'List Item 4'].map((item, index) => (
            <Pressable
              key={index}
              style={({ pressed }) => [
                styles.listItem,
                index < 3 && [styles.listItemBorder, { borderBottomColor: colors.border }],
                pressed && { backgroundColor: colors.primary + '10' }
              ]}
            >
              <Text style={[styles.listItemText, { color: colors.text.primary, ...fonts.regular }]}>
                {item}
              </Text>
              <ChevronRight size={18} color={colors.text.secondary} />
            </Pressable>
          ))}
        </View>
      </View>
      
      {/* List with Icons */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          List with Icons
        </Text>
        
        <View style={[styles.listContainer, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Pressable
            style={({ pressed }) => [
              styles.listItem,
              styles.listItemBorder,
              { borderBottomColor: colors.border },
              pressed && { backgroundColor: colors.primary + '10' }
            ]}
          >
            <View style={[styles.iconContainer, { backgroundColor: colors.primary + '15' }]}>
              <Star size={18} color={colors.primary} />
            </View>
            <View style={styles.listItemContent}>
              <Text style={[styles.listItemText, { color: colors.text.primary, ...fonts.regular }]}>
                Favorites
              </Text>
              <Text style={[styles.listItemSubtext, { color: colors.text.secondary, ...fonts.regular }]}>
                View your favorite items
              </Text>
            </View>
            <ChevronRight size={18} color={colors.text.secondary} />
          </Pressable>
          
          <Pressable
            style={({ pressed }) => [
              styles.listItem,
              styles.listItemBorder,
              { borderBottomColor: colors.border },
              pressed && { backgroundColor: colors.primary + '10' }
            ]}
          >
            <View style={[styles.iconContainer, { backgroundColor: colors.accent + '15' }]}>
              <Clock size={18} color={colors.accent} />
            </View>
            <View style={styles.listItemContent}>
              <Text style={[styles.listItemText, { color: colors.text.primary, ...fonts.regular }]}>
                Recent
              </Text>
              <Text style={[styles.listItemSubtext, { color: colors.text.secondary, ...fonts.regular }]}>
                Recently viewed items
              </Text>
            </View>
            <ChevronRight size={18} color={colors.text.secondary} />
          </Pressable>
          
          <Pressable
            style={({ pressed }) => [
              styles.listItem,
              pressed && { backgroundColor: colors.primary + '10' }
            ]}
          >
            <View style={[styles.iconContainer, { backgroundColor: colors.secondary + '15' }]}>
              <DollarSign size={18} color={colors.secondary} />
            </View>
            <View style={styles.listItemContent}>
              <Text style={[styles.listItemText, { color: colors.text.primary, ...fonts.regular }]}>
                Transactions
              </Text>
              <Text style={[styles.listItemSubtext, { color: colors.text.secondary, ...fonts.regular }]}>
                Manage your payments
              </Text>
            </View>
            <ChevronRight size={18} color={colors.text.secondary} />
          </Pressable>
        </View>
      </View>
      
      {/* List with Images */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          List with Images
        </Text>
        
        <View style={[styles.listContainer, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Pressable
            style={({ pressed }) => [
              styles.listItem,
              styles.listItemBorder,
              { borderBottomColor: colors.border },
              pressed && { backgroundColor: colors.primary + '10' }
            ]}
          >
            <Image
              source={{ uri: 'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=800' }}
              style={styles.listItemImage}
            />
            <View style={styles.listItemContent}>
              <Text style={[styles.listItemText, { color: colors.text.primary, ...fonts.regular }]}>
                Coffee Shop
              </Text>
              <Text style={[styles.listItemSubtext, { color: colors.text.secondary, ...fonts.regular }]}>
                Cozy local coffee place
              </Text>
            </View>
            <View style={styles.badgeContainer}>
              <Text style={[styles.badgeText, { color: colors.primary, ...fonts.medium }]}>
                4.8
              </Text>
              <Star size={12} color={colors.primary} />
            </View>
          </Pressable>
          
          <Pressable
            style={({ pressed }) => [
              styles.listItem,
              styles.listItemBorder,
              { borderBottomColor: colors.border },
              pressed && { backgroundColor: colors.primary + '10' }
            ]}
          >
            <Image
              source={{ uri: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800' }}
              style={styles.listItemImage}
            />
            <View style={styles.listItemContent}>
              <Text style={[styles.listItemText, { color: colors.text.primary, ...fonts.regular }]}>
                Book Store
              </Text>
              <Text style={[styles.listItemSubtext, { color: colors.text.secondary, ...fonts.regular }]}>
                Books and stationery
              </Text>
            </View>
            <View style={styles.badgeContainer}>
              <Text style={[styles.badgeText, { color: colors.primary, ...fonts.medium }]}>
                4.5
              </Text>
              <Star size={12} color={colors.primary} />
            </View>
          </Pressable>
          
          <Pressable
            style={({ pressed }) => [
              styles.listItem,
              pressed && { backgroundColor: colors.primary + '10' }
            ]}
          >
            <Image
              source={{ uri: 'https://images.pexels.com/photos/1305063/pexels-photo-1305063.jpeg?auto=compress&cs=tinysrgb&w=800' }}
              style={styles.listItemImage}
            />
            <View style={styles.listItemContent}>
              <Text style={[styles.listItemText, { color: colors.text.primary, ...fonts.regular }]}>
                Art Gallery
              </Text>
              <Text style={[styles.listItemSubtext, { color: colors.text.secondary, ...fonts.regular }]}>
                Modern art exhibitions
              </Text>
            </View>
            <View style={styles.badgeContainer}>
              <Text style={[styles.badgeText, { color: colors.primary, ...fonts.medium }]}>
                4.7
              </Text>
              <Star size={12} color={colors.primary} />
            </View>
          </Pressable>
        </View>
      </View>
      
      {/* List with Status */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          List with Status
        </Text>
        
        <View style={[styles.listContainer, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Pressable
            style={({ pressed }) => [
              styles.listItem,
              styles.listItemBorder,
              { borderBottomColor: colors.border },
              pressed && { backgroundColor: colors.primary + '10' }
            ]}
          >
            <View style={styles.listItemContent}>
              <Text style={[styles.listItemText, { color: colors.text.primary, ...fonts.regular }]}>
                Item 1
              </Text>
              <Text style={[styles.listItemSubtext, { color: colors.text.secondary, ...fonts.regular }]}>
                Completed on Jun 12, 2023
              </Text>
            </View>
            <View style={[styles.statusBadge, { backgroundColor: colors.success.light + '20', borderColor: colors.success.light }]}>
              <Text style={[styles.statusText, { color: colors.success.light, ...fonts.medium }]}>
                Complete
              </Text>
              <Check size={14} color={colors.success.light} />
            </View>
          </Pressable>
          
          <Pressable
            style={({ pressed }) => [
              styles.listItem,
              styles.listItemBorder,
              { borderBottomColor: colors.border },
              pressed && { backgroundColor: colors.primary + '10' }
            ]}
          >
            <View style={styles.listItemContent}>
              <Text style={[styles.listItemText, { color: colors.text.primary, ...fonts.regular }]}>
                Item 2
              </Text>
              <Text style={[styles.listItemSubtext, { color: colors.text.secondary, ...fonts.regular }]}>
                In progress
              </Text>
            </View>
            <View style={[styles.statusBadge, { backgroundColor: colors.warning.light + '20', borderColor: colors.warning.light }]}>
              <Text style={[styles.statusText, { color: colors.warning.light, ...fonts.medium }]}>
                Pending
              </Text>
              <Clock size={14} color={colors.warning.light} />
            </View>
          </Pressable>
          
          <Pressable
            style={({ pressed }) => [
              styles.listItem,
              pressed && { backgroundColor: colors.primary + '10' }
            ]}
          >
            <View style={styles.listItemContent}>
              <Text style={[styles.listItemText, { color: colors.text.primary, ...fonts.regular }]}>
                Item 3
              </Text>
              <Text style={[styles.listItemSubtext, { color: colors.text.secondary, ...fonts.regular }]}>
                Failed to process
              </Text>
            </View>
            <View style={[styles.statusBadge, { backgroundColor: colors.error.light + '20', borderColor: colors.error.light }]}>
              <Text style={[styles.statusText, { color: colors.error.light, ...fonts.medium }]}>
                Failed
              </Text>
              <X size={14} color={colors.error.light} />
            </View>
          </Pressable>
        </View>
      </View>
      
      {/* List with Contact Info */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Contact List
        </Text>
        
        <View style={[styles.listContainer, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Pressable
            style={({ pressed }) => [
              styles.listItem,
              styles.listItemBorder,
              { borderBottomColor: colors.border },
              pressed && { backgroundColor: colors.primary + '10' }
            ]}
          >
            <View style={[styles.avatarContainer, { backgroundColor: colors.primary + '15' }]}>
              <User size={20} color={colors.primary} />
            </View>
            <View style={styles.listItemContent}>
              <Text style={[styles.listItemText, { color: colors.text.primary, ...fonts.regular }]}>
                John Smith
              </Text>
              <Text style={[styles.listItemSubtext, { color: colors.text.secondary, ...fonts.regular }]}>
                john.smith@example.com
              </Text>
            </View>
            <ChevronRight size={18} color={colors.text.secondary} />
          </Pressable>
          
          <Pressable
            style={({ pressed }) => [
              styles.listItem,
              styles.listItemBorder,
              { borderBottomColor: colors.border },
              pressed && { backgroundColor: colors.primary + '10' }
            ]}
          >
            <Image
              source={{ uri: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800' }}
              style={styles.contactImage}
            />
            <View style={styles.listItemContent}>
              <Text style={[styles.listItemText, { color: colors.text.primary, ...fonts.regular }]}>
                Sarah Johnson
              </Text>
              <Text style={[styles.listItemSubtext, { color: colors.text.secondary, ...fonts.regular }]}>
                sarah.j@example.com
              </Text>
            </View>
            <ChevronRight size={18} color={colors.text.secondary} />
          </Pressable>
          
          <Pressable
            style={({ pressed }) => [
              styles.listItem,
              pressed && { backgroundColor: colors.primary + '10' }
            ]}
          >
            <Image
              source={{ uri: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800' }}
              style={styles.contactImage}
            />
            <View style={styles.listItemContent}>
              <Text style={[styles.listItemText, { color: colors.text.primary, ...fonts.regular }]}>
                Michael Brown
              </Text>
              <View style={styles.locationContainer}>
                <MapPin size={12} color={colors.text.secondary} />
                <Text style={[styles.locationText, { color: colors.text.secondary, ...fonts.regular }]}>
                  New York, USA
                </Text>
              </View>
            </View>
            <ChevronRight size={18} color={colors.text.secondary} />
          </Pressable>
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
    marginBottom: 12,
  },
  listContainer: {
    borderRadius: 8,
    borderWidth: 1,
    overflow: 'hidden',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  listItemBorder: {
    borderBottomWidth: 1,
  },
  listItemText: {
    fontSize: 14,
    flex: 1,
  },
  listItemContent: {
    flex: 1,
    marginRight: 8,
  },
  listItemSubtext: {
    fontSize: 12,
    marginTop: 4,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  listItemImage: {
    width: 48,
    height: 48,
    borderRadius: 4,
    marginRight: 16,
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
  },
  badgeText: {
    fontSize: 12,
    marginRight: 4,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
    borderWidth: 1,
  },
  statusText: {
    fontSize: 12,
    marginRight: 4,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  contactImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  locationText: {
    fontSize: 12,
    marginLeft: 4,
  },
});