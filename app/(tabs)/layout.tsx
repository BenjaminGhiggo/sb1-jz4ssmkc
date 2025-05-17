import { View, Text, StyleSheet, ScrollView } from 'react-native';
import useTheme from '@/hooks/useTheme';
import SectionTitle from '@/components/common/SectionTitle';
import FlexboxLayouts from '@/components/layout/FlexboxLayouts';
import SpacingExample from '@/components/layout/SpacingExample';
import DividersExample from '@/components/layout/DividersExample';

export default function LayoutScreen() {
  const { colors, sizes, fonts } = useTheme();

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.content}
    >
      <Text style={[styles.screenTitle, { color: colors.text.primary, ...fonts.bold }]}>
        Layout Components
      </Text>
      <Text style={[styles.screenDescription, { color: colors.text.secondary, ...fonts.regular }]}>
        Structural elements for organizing and arranging content in your UI.
      </Text>

      <SectionTitle title="Flexbox Layouts" />
      <View style={styles.componentContainer}>
        <FlexboxLayouts />
      </View>

      <SectionTitle title="Spacing" />
      <View style={styles.componentContainer}>
        <SpacingExample />
      </View>

      <SectionTitle title="Dividers" />
      <View style={styles.componentContainer}>
        <DividersExample />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  screenTitle: {
    fontSize: 28,
    marginTop: 16,
  },
  screenDescription: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
  },
  componentContainer: {
    marginBottom: 24,
  },
});