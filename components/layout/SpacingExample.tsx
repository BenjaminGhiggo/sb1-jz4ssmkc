import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useTheme from '@/hooks/useTheme';

export default function SpacingExample() {
  const { colors, fonts, sizes } = useTheme();
  
  return (
    <View style={styles.container}>
      {/* Margins */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Margins (External Spacing)
        </Text>
        
        <View style={[styles.spacingContainer, { backgroundColor: colors.border + '30' }]}>
          <View style={[styles.demoBox, { backgroundColor: colors.primary, margin: sizes.xs }]}>
            <Text style={[styles.demoText, { color: colors.white, ...fonts.medium }]}>
              margin: {sizes.xs}
            </Text>
          </View>
          
          <View style={[styles.demoBox, { backgroundColor: colors.secondary, margin: sizes.s }]}>
            <Text style={[styles.demoText, { color: colors.white, ...fonts.medium }]}>
              margin: {sizes.s}
            </Text>
          </View>
          
          <View style={[styles.demoBox, { backgroundColor: colors.accent, margin: sizes.m }]}>
            <Text style={[styles.demoText, { color: colors.white, ...fonts.medium }]}>
              margin: {sizes.m}
            </Text>
          </View>
        </View>
      </View>
      
      {/* Padding */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Padding (Internal Spacing)
        </Text>
        
        <View style={styles.paddingRow}>
          <View style={[styles.paddingBox, { backgroundColor: colors.primary, padding: sizes.xs }]}>
            <View style={[styles.paddingInner, { backgroundColor: colors.primary + '30' }]}>
              <Text style={[styles.paddingText, { color: colors.white, ...fonts.medium }]}>
                p: {sizes.xs}
              </Text>
            </View>
          </View>
          
          <View style={[styles.paddingBox, { backgroundColor: colors.secondary, padding: sizes.s }]}>
            <View style={[styles.paddingInner, { backgroundColor: colors.secondary + '30' }]}>
              <Text style={[styles.paddingText, { color: colors.white, ...fonts.medium }]}>
                p: {sizes.s}
              </Text>
            </View>
          </View>
          
          <View style={[styles.paddingBox, { backgroundColor: colors.accent, padding: sizes.m }]}>
            <View style={[styles.paddingInner, { backgroundColor: colors.accent + '30' }]}>
              <Text style={[styles.paddingText, { color: colors.white, ...fonts.medium }]}>
                p: {sizes.m}
              </Text>
            </View>
          </View>
        </View>
      </View>
      
      {/* Gap (Using marginBottom) */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Vertical Gap
        </Text>
        
        <View style={styles.gapContainer}>
          <Text style={[styles.gapLabel, { color: colors.text.secondary, ...fonts.regular }]}>
            Gap: {sizes.xs}
          </Text>
          
          <View style={styles.gapExample}>
            {[colors.primary, colors.secondary, colors.accent].map((color, index) => (
              <View 
                key={index} 
                style={[
                  styles.gapItem, 
                  { 
                    backgroundColor: color,
                    marginBottom: index < 2 ? sizes.xs : 0 
                  }
                ]}
              />
            ))}
          </View>
          
          <Text style={[styles.gapLabel, { color: colors.text.secondary, ...fonts.regular, marginTop: 16 }]}>
            Gap: {sizes.m}
          </Text>
          
          <View style={styles.gapExample}>
            {[colors.primary, colors.secondary, colors.accent].map((color, index) => (
              <View 
                key={index} 
                style={[
                  styles.gapItem, 
                  { 
                    backgroundColor: color,
                    marginBottom: index < 2 ? sizes.m : 0 
                  }
                ]}
              />
            ))}
          </View>
          
          <Text style={[styles.gapLabel, { color: colors.text.secondary, ...fonts.regular, marginTop: 16 }]}>
            Gap: {sizes.l}
          </Text>
          
          <View style={styles.gapExample}>
            {[colors.primary, colors.secondary, colors.accent].map((color, index) => (
              <View 
                key={index} 
                style={[
                  styles.gapItem, 
                  { 
                    backgroundColor: color,
                    marginBottom: index < 2 ? sizes.l : 0 
                  }
                ]}
              />
            ))}
          </View>
        </View>
      </View>
      
      {/* Horizontal Spacing */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Horizontal Spacing
        </Text>
        
        <Text style={[styles.gapLabel, { color: colors.text.secondary, ...fonts.regular }]}>
          Gap: {sizes.xs}
        </Text>
        
        <View style={styles.horizontalContainer}>
          {[colors.primary, colors.secondary, colors.accent].map((color, index) => (
            <View 
              key={index} 
              style={[
                styles.horizontalItem, 
                { 
                  backgroundColor: color,
                  marginRight: index < 2 ? sizes.xs : 0 
                }
              ]}
            />
          ))}
        </View>
        
        <Text style={[styles.gapLabel, { color: colors.text.secondary, ...fonts.regular, marginTop: 16 }]}>
          Gap: {sizes.m}
        </Text>
        
        <View style={styles.horizontalContainer}>
          {[colors.primary, colors.secondary, colors.accent].map((color, index) => (
            <View 
              key={index} 
              style={[
                styles.horizontalItem, 
                { 
                  backgroundColor: color,
                  marginRight: index < 2 ? sizes.m : 0 
                }
              ]}
            />
          ))}
        </View>
        
        <Text style={[styles.gapLabel, { color: colors.text.secondary, ...fonts.regular, marginTop: 16 }]}>
          Gap: {sizes.l}
        </Text>
        
        <View style={styles.horizontalContainer}>
          {[colors.primary, colors.secondary, colors.accent].map((color, index) => (
            <View 
              key={index} 
              style={[
                styles.horizontalItem, 
                { 
                  backgroundColor: color,
                  marginRight: index < 2 ? sizes.l : 0 
                }
              ]}
            />
          ))}
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
  spacingContainer: {
    paddingVertical: 8,
  },
  demoBox: {
    alignSelf: 'flex-start',
    padding: 12,
    borderRadius: 4,
  },
  demoText: {
    fontSize: 12,
  },
  paddingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paddingBox: {
    borderRadius: 4,
    width: '30%',
  },
  paddingInner: {
    width: '100%',
    alignItems: 'center',
    padding: 8,
    borderRadius: 2,
  },
  paddingText: {
    fontSize: 12,
  },
  gapContainer: {
  },
  gapLabel: {
    fontSize: 14,
    marginBottom: 8,
  },
  gapExample: {
  },
  gapItem: {
    height: 20,
    borderRadius: 4,
  },
  horizontalContainer: {
    flexDirection: 'row',
  },
  horizontalItem: {
    height: 40,
    flex: 1,
    borderRadius: 4,
  },
});