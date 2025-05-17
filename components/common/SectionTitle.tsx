import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useTheme from '@/hooks/useTheme';

type SectionTitleProps = {
  title: string;
  description?: string;
};

export default function SectionTitle({ title, description }: SectionTitleProps) {
  const { colors, fonts } = useTheme();
  
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text.primary, ...fonts.medium }]}>
        {title}
      </Text>
      {description && (
        <Text style={[styles.description, { color: colors.text.secondary, ...fonts.regular }]}>
          {description}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
  },
  description: {
    fontSize: 14,
    marginTop: 4,
  },
});