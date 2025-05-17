import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useTheme from '@/hooks/useTheme';

export default function Typography() {
  const { colors, fonts } = useTheme();
  
  return (
    <View style={styles.container}>
      <Text style={[styles.heading1, { color: colors.text.primary, ...fonts.bold }]}>
        Heading 1
      </Text>
      
      <Text style={[styles.heading2, { color: colors.text.primary, ...fonts.bold }]}>
        Heading 2
      </Text>
      
      <Text style={[styles.heading3, { color: colors.text.primary, ...fonts.bold }]}>
        Heading 3
      </Text>
      
      <Text style={[styles.heading4, { color: colors.text.primary, ...fonts.medium }]}>
        Heading 4
      </Text>
      
      <Text style={[styles.heading5, { color: colors.text.primary, ...fonts.medium }]}>
        Heading 5
      </Text>
      
      <Text style={[styles.heading6, { color: colors.text.primary, ...fonts.medium }]}>
        Heading 6
      </Text>
      
      <Text style={[styles.subtitle, { color: colors.text.secondary, ...fonts.medium }]}>
        Subtitle - Supporting text that appears under a heading
      </Text>
      
      <Text style={[styles.paragraph, { color: colors.text.primary, ...fonts.regular }]}>
        Body text - This is a paragraph of regular text. It can span multiple lines and is used for the main content of your application. Good typography uses contrast, alignment, and proper spacing to create a clear visual hierarchy.
      </Text>
      
      <View style={styles.textRow}>
        <Text style={[styles.label, { color: colors.text.secondary, ...fonts.medium }]}>
          Label:
        </Text>
        <Text style={[styles.value, { color: colors.text.primary, ...fonts.regular }]}>
          Value text
        </Text>
      </View>
      
      <View style={styles.textRow}>
        <Text style={[styles.caption, { color: colors.text.secondary, ...fonts.regular }]}>
          Caption - Small text used for supplementary information
        </Text>
      </View>
      
      <Text 
        style={[styles.link, { color: colors.primary, ...fonts.medium }]}
        onPress={() => console.log('Link pressed')}
      >
        Hyperlink - Tap to navigate
      </Text>
      
      <Text style={[styles.quote, { color: colors.text.primary, borderLeftColor: colors.primary, ...fonts.regular }]}>
        "This is a block quote. It's used to emphasize quoted text or important statements that deserve special attention from the reader."
      </Text>
      
      <View style={styles.textRow}>
        <Text style={[styles.smallText, { color: colors.text.secondary, ...fonts.light }]}>
          Small text - used for legal notices or very small details
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  heading1: {
    fontSize: 32,
    lineHeight: 40,
    marginBottom: 16,
  },
  heading2: {
    fontSize: 28,
    lineHeight: 36,
    marginBottom: 14,
  },
  heading3: {
    fontSize: 24,
    lineHeight: 32,
    marginBottom: 12,
  },
  heading4: {
    fontSize: 20,
    lineHeight: 28,
    marginBottom: 10,
  },
  heading5: {
    fontSize: 18,
    lineHeight: 26,
    marginBottom: 8,
  },
  heading6: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 16,
  },
  textRow: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    marginRight: 8,
  },
  value: {
    fontSize: 14,
  },
  caption: {
    fontSize: 12,
    lineHeight: 18,
  },
  link: {
    fontSize: 14,
    marginVertical: 12,
    textDecorationLine: 'underline',
  },
  quote: {
    fontSize: 14,
    lineHeight: 22,
    paddingLeft: 12,
    borderLeftWidth: 3,
    marginVertical: 16,
    fontStyle: 'italic',
  },
  smallText: {
    fontSize: 10,
    lineHeight: 14,
  },
});