import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import useTheme from '@/hooks/useTheme';
import { ChevronRight } from 'lucide-react-native';

export default function BreadcrumbExample() {
  const { colors, sizes, fonts } = useTheme();
  
  // Example breadcrumb paths
  const breadcrumbs1 = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Electronics', path: '/products/electronics' },
  ];
  
  const breadcrumbs2 = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Settings', path: '/dashboard/settings' },
    { label: 'Account', path: '/dashboard/settings/account' },
    { label: 'Profile', path: '/dashboard/settings/account/profile' },
  ];
  
  const renderBreadcrumbs = (items: { label: string; path: string }[]) => {
    return (
      <View style={styles.breadcrumbsContainer}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <View key={index} style={styles.breadcrumbItem}>
              <Pressable
                style={({ pressed }) => [
                  styles.breadcrumbButton,
                  pressed && { opacity: 0.7 }
                ]}
                onPress={() => {
                  console.log(`Navigate to: ${item.path}`);
                }}
              >
                <Text
                  style={[
                    styles.breadcrumbText,
                    {
                      color: isLast ? colors.primary : colors.text.secondary,
                      ...fonts.regular,
                      ...(isLast && fonts.medium)
                    }
                  ]}
                >
                  {item.label}
                </Text>
              </Pressable>
              
              {!isLast && (
                <ChevronRight
                  size={16}
                  color={colors.text.secondary}
                  style={styles.separator}
                />
              )}
            </View>
          );
        })}
      </View>
    );
  };
  
  return (
    <View style={styles.exampleContainer}>
      {/* Basic Breadcrumbs */}
      <View 
        style={[
          styles.breadcrumbsWrapper, 
          { 
            backgroundColor: colors.surface,
            borderColor: colors.border 
          }
        ]}
      >
        {renderBreadcrumbs(breadcrumbs1)}
      </View>
      
      {/* Multi-level Breadcrumbs */}
      <View 
        style={[
          styles.breadcrumbsWrapper, 
          { 
            backgroundColor: colors.surface,
            borderColor: colors.border,
            marginTop: 16 
          }
        ]}
      >
        {renderBreadcrumbs(breadcrumbs2)}
      </View>
      
      {/* Colored Background Breadcrumbs */}
      <View 
        style={[
          styles.breadcrumbsWrapper, 
          { 
            backgroundColor: colors.primary + '10',  // 10% opacity
            borderColor: colors.primary + '30',      // 30% opacity
            marginTop: 16 
          }
        ]}
      >
        {renderBreadcrumbs(breadcrumbs1)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  exampleContainer: {
    width: '100%',
  },
  breadcrumbsWrapper: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
  },
  breadcrumbsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  breadcrumbItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 4,
  },
  breadcrumbButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  breadcrumbText: {
    fontSize: 14,
  },
  separator: {
    marginHorizontal: 4,
  },
});