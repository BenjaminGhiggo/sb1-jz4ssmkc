import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useTheme from '@/hooks/useTheme';

export default function DividersExample() {
  const { colors, fonts } = useTheme();
  
  return (
    <View style={styles.container}>
      {/* Simple Dividers */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Basic Dividers
        </Text>
        
        <View style={[styles.dividerContainer, { backgroundColor: colors.surface }]}>
          <Text style={[styles.dividerText, { color: colors.text.primary, ...fonts.regular }]}>
            Content Above
          </Text>
          
          <View style={[styles.divider, { backgroundColor: colors.border }]} />
          
          <Text style={[styles.dividerText, { color: colors.text.primary, ...fonts.regular }]}>
            Content Below
          </Text>
        </View>
        
        <View style={[styles.dividerContainer, { backgroundColor: colors.surface, marginTop: 16 }]}>
          <Text style={[styles.dividerText, { color: colors.text.primary, ...fonts.regular }]}>
            First Item
          </Text>
          
          <View style={[styles.divider, { backgroundColor: colors.border, height: 2 }]} />
          
          <Text style={[styles.dividerText, { color: colors.text.primary, ...fonts.regular }]}>
            Second Item
          </Text>
          
          <View style={[styles.divider, { backgroundColor: colors.border, height: 2 }]} />
          
          <Text style={[styles.dividerText, { color: colors.text.primary, ...fonts.regular }]}>
            Third Item
          </Text>
        </View>
      </View>
      
      {/* Inset Dividers */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Inset Dividers
        </Text>
        
        <View style={[styles.dividerContainer, { backgroundColor: colors.surface }]}>
          <View style={styles.insetItem}>
            <View style={[styles.colorDot, { backgroundColor: colors.primary }]} />
            <Text style={[styles.dividerText, { color: colors.text.primary, ...fonts.regular }]}>
              Item One
            </Text>
          </View>
          
          <View style={[styles.insetDivider, { backgroundColor: colors.border }]} />
          
          <View style={styles.insetItem}>
            <View style={[styles.colorDot, { backgroundColor: colors.secondary }]} />
            <Text style={[styles.dividerText, { color: colors.text.primary, ...fonts.regular }]}>
              Item Two
            </Text>
          </View>
          
          <View style={[styles.insetDivider, { backgroundColor: colors.border }]} />
          
          <View style={styles.insetItem}>
            <View style={[styles.colorDot, { backgroundColor: colors.accent }]} />
            <Text style={[styles.dividerText, { color: colors.text.primary, ...fonts.regular }]}>
              Item Three
            </Text>
          </View>
        </View>
      </View>
      
      {/* Vertical Dividers */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Vertical Dividers
        </Text>
        
        <View style={[styles.verticalContainer, { backgroundColor: colors.surface }]}>
          <Text style={[styles.dividerText, { color: colors.text.primary, ...fonts.regular }]}>
            Left
          </Text>
          
          <View style={[styles.verticalDivider, { backgroundColor: colors.border }]} />
          
          <Text style={[styles.dividerText, { color: colors.text.primary, ...fonts.regular }]}>
            Middle
          </Text>
          
          <View style={[styles.verticalDivider, { backgroundColor: colors.border }]} />
          
          <Text style={[styles.dividerText, { color: colors.text.primary, ...fonts.regular }]}>
            Right
          </Text>
        </View>
      </View>
      
      {/* Styled Dividers */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Styled Dividers
        </Text>
        
        {/* Colored Divider */}
        <View style={[styles.dividerContainer, { backgroundColor: colors.surface }]}>
          <Text style={[styles.dividerText, { color: colors.text.primary, ...fonts.regular }]}>
            Colored Divider
          </Text>
          
          <View style={[styles.divider, { backgroundColor: colors.primary }]} />
          
          <Text style={[styles.dividerText, { color: colors.text.primary, ...fonts.regular }]}>
            Content Below
          </Text>
        </View>
        
        {/* Dashed Divider */}
        <View style={[styles.dividerContainer, { backgroundColor: colors.surface, marginTop: 16 }]}>
          <Text style={[styles.dividerText, { color: colors.text.primary, ...fonts.regular }]}>
            Dashed Divider
          </Text>
          
          <View style={styles.dashedDivider}>
            {Array.from({ length: 20 }).map((_, index) => (
              <View 
                key={index} 
                style={[
                  styles.dashSegment, 
                  { backgroundColor: colors.secondary }
                ]} 
              />
            ))}
          </View>
          
          <Text style={[styles.dividerText, { color: colors.text.primary, ...fonts.regular }]}>
            Content Below
          </Text>
        </View>
        
        {/* Divider with Text */}
        <View style={[styles.dividerContainer, { backgroundColor: colors.surface, marginTop: 16 }]}>
          <View style={styles.textDividerContainer}>
            <View style={[styles.textDividerLine, { backgroundColor: colors.border }]} />
            <Text style={[styles.textDividerText, { color: colors.text.secondary, ...fonts.medium }]}>
              OR
            </Text>
            <View style={[styles.textDividerLine, { backgroundColor: colors.border }]} />
          </View>
        </View>
        
        {/* Gradient Divider */}
        <View style={[styles.dividerContainer, { backgroundColor: colors.surface, marginTop: 16 }]}>
          <Text style={[styles.dividerText, { color: colors.text.primary, ...fonts.regular }]}>
            Gradient-Style Divider
          </Text>
          
          <View style={styles.gradientDividerContainer}>
            <View style={[styles.gradientDivider, { backgroundColor: colors.primary }]} />
            <View style={[styles.gradientDivider, { backgroundColor: colors.secondary }]} />
            <View style={[styles.gradientDivider, { backgroundColor: colors.accent }]} />
          </View>
          
          <Text style={[styles.dividerText, { color: colors.text.primary, ...fonts.regular }]}>
            Content Below
          </Text>
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
  dividerContainer: {
    padding: 16,
    borderRadius: 8,
  },
  dividerText: {
    fontSize: 14,
    paddingVertical: 8,
  },
  divider: {
    height: 1,
    width: '100%',
  },
  insetItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  colorDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 16,
  },
  insetDivider: {
    height: 1,
    width: '100%',
    marginLeft: 32,
  },
  verticalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 16,
    borderRadius: 8,
    height: 80,
  },
  verticalDivider: {
    width: 1,
    height: '100%',
  },
  dashedDivider: {
    flexDirection: 'row',
    height: 1,
    width: '100%',
    justifyContent: 'space-between',
  },
  dashSegment: {
    width: 8,
    height: 1,
  },
  textDividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  textDividerLine: {
    flex: 1,
    height: 1,
  },
  textDividerText: {
    paddingHorizontal: 16,
    fontSize: 14,
  },
  gradientDividerContainer: {
    flexDirection: 'row',
    height: 4,
    width: '100%',
    borderRadius: 2,
    overflow: 'hidden',
  },
  gradientDivider: {
    flex: 1,
    height: 4,
  },
});