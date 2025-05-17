import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useTheme from '@/hooks/useTheme';

export default function FlexboxLayouts() {
  const { colors, fonts } = useTheme();
  
  // Helper function to create color boxes
  const renderColorBoxes = (count: number, containerStyle?: any) => {
    const boxColors = [
      colors.primary, 
      colors.secondary, 
      colors.accent, 
      colors.success.light, 
      colors.warning.light, 
      colors.error.light
    ];
    
    return (
      <View style={[styles.layoutContainer, containerStyle]}>
        {Array.from({ length: count }).map((_, index) => (
          <View 
            key={index} 
            style={[
              styles.colorBox, 
              { backgroundColor: boxColors[index % boxColors.length] }
            ]}
          >
            <Text style={[styles.boxText, { color: colors.white, ...fonts.medium }]}>
              {index + 1}
            </Text>
          </View>
        ))}
      </View>
    );
  };
  
  return (
    <View style={styles.container}>
      {/* Row Layout */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Row Layout (flexDirection: 'row')
        </Text>
        {renderColorBoxes(5, styles.rowLayout)}
      </View>
      
      {/* Column Layout */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Column Layout (flexDirection: 'column')
        </Text>
        {renderColorBoxes(3, styles.columnLayout)}
      </View>
      
      {/* Justify Content */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Justify Content
        </Text>
        
        <Text style={[styles.subTitle, { color: colors.text.secondary, ...fonts.regular }]}>
          justifyContent: 'flex-start'
        </Text>
        {renderColorBoxes(3, styles.justifyStart)}
        
        <Text style={[styles.subTitle, { color: colors.text.secondary, ...fonts.regular }]}>
          justifyContent: 'center'
        </Text>
        {renderColorBoxes(3, styles.justifyCenter)}
        
        <Text style={[styles.subTitle, { color: colors.text.secondary, ...fonts.regular }]}>
          justifyContent: 'flex-end'
        </Text>
        {renderColorBoxes(3, styles.justifyEnd)}
        
        <Text style={[styles.subTitle, { color: colors.text.secondary, ...fonts.regular }]}>
          justifyContent: 'space-between'
        </Text>
        {renderColorBoxes(3, styles.justifySpaceBetween)}
        
        <Text style={[styles.subTitle, { color: colors.text.secondary, ...fonts.regular }]}>
          justifyContent: 'space-around'
        </Text>
        {renderColorBoxes(3, styles.justifySpaceAround)}
      </View>
      
      {/* Align Items */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Align Items
        </Text>
        
        <Text style={[styles.subTitle, { color: colors.text.secondary, ...fonts.regular }]}>
          alignItems: 'flex-start'
        </Text>
        {renderColorBoxes(3, styles.alignStart)}
        
        <Text style={[styles.subTitle, { color: colors.text.secondary, ...fonts.regular }]}>
          alignItems: 'center'
        </Text>
        {renderColorBoxes(3, styles.alignCenter)}
        
        <Text style={[styles.subTitle, { color: colors.text.secondary, ...fonts.regular }]}>
          alignItems: 'flex-end'
        </Text>
        {renderColorBoxes(3, styles.alignEnd)}
        
        <Text style={[styles.subTitle, { color: colors.text.secondary, ...fonts.regular }]}>
          alignItems: 'stretch'
        </Text>
        {renderColorBoxes(3, styles.alignStretch)}
      </View>
      
      {/* Wrap */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Flex Wrap
        </Text>
        
        <Text style={[styles.subTitle, { color: colors.text.secondary, ...fonts.regular }]}>
          flexWrap: 'wrap'
        </Text>
        {renderColorBoxes(6, styles.flexWrap)}
      </View>
      
      {/* Absolute Positioning */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Absolute Positioning
        </Text>
        
        <View style={styles.positioningContainer}>
          <View style={[styles.backgroundBox, { backgroundColor: colors.border }]}>
            <View 
              style={[
                styles.positionedBox, 
                styles.topLeftBox, 
                { backgroundColor: colors.primary }
              ]}
            >
              <Text style={[styles.positionText, { color: colors.white, ...fonts.regular }]}>
                Top Left
              </Text>
            </View>
            
            <View 
              style={[
                styles.positionedBox, 
                styles.topRightBox, 
                { backgroundColor: colors.secondary }
              ]}
            >
              <Text style={[styles.positionText, { color: colors.white, ...fonts.regular }]}>
                Top Right
              </Text>
            </View>
            
            <View 
              style={[
                styles.positionedBox, 
                styles.centerBox, 
                { backgroundColor: colors.accent }
              ]}
            >
              <Text style={[styles.positionText, { color: colors.white, ...fonts.regular }]}>
                Center
              </Text>
            </View>
            
            <View 
              style={[
                styles.positionedBox, 
                styles.bottomLeftBox, 
                { backgroundColor: colors.success.light }
              ]}
            >
              <Text style={[styles.positionText, { color: colors.white, ...fonts.regular }]}>
                Bottom Left
              </Text>
            </View>
            
            <View 
              style={[
                styles.positionedBox, 
                styles.bottomRightBox, 
                { backgroundColor: colors.error.light }
              ]}
            >
              <Text style={[styles.positionText, { color: colors.white, ...fonts.regular }]}>
                Bottom Right
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
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 14,
    marginTop: 12,
    marginBottom: 8,
  },
  layoutContainer: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 8,
  },
  colorBox: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    fontSize: 16,
  },
  rowLayout: {
    flexDirection: 'row',
    height: 50,
  },
  columnLayout: {
    flexDirection: 'column',
  },
  justifyStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 50,
  },
  justifyCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 50,
  },
  justifyEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 50,
  },
  justifySpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
  },
  justifySpaceAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
  },
  alignStart: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: 80,
  },
  alignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
  },
  alignEnd: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 80,
  },
  alignStretch: {
    flexDirection: 'row',
    alignItems: 'stretch',
    height: 80,
  },
  flexWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  positioningContainer: {
    width: '100%',
    height: 200,
    marginTop: 8,
  },
  backgroundBox: {
    width: '100%',
    height: '100%',
    position: 'relative',
    borderRadius: 8,
  },
  positionedBox: {
    position: 'absolute',
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  positionText: {
    fontSize: 12,
  },
  topLeftBox: {
    top: 10,
    left: 10,
  },
  topRightBox: {
    top: 10,
    right: 10,
  },
  centerBox: {
    top: '50%',
    left: '50%',
    marginLeft: -40,
    marginTop: -20,
  },
  bottomLeftBox: {
    bottom: 10,
    left: 10,
  },
  bottomRightBox: {
    bottom: 10,
    right: 10,
  },
});