import { View, Text, StyleSheet, ScrollView } from 'react-native';
import useTheme from '@/hooks/useTheme';
import SectionTitle from '@/components/common/SectionTitle';
import HeaderBar from '@/components/navigation/HeaderBar';
import TabBarExample from '@/components/navigation/TabBarExample';
import DrawerExample from '@/components/navigation/DrawerExample';
import BreadcrumbExample from '@/components/navigation/BreadcrumbExample';
import ToolbarExample from '@/components/navigation/ToolbarExample';

export default function NavigationScreen() {
  const { colors, sizes, fonts } = useTheme();

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.content}
    >
      <Text style={[styles.screenTitle, { color: colors.text.primary, ...fonts.bold }]}>
        Navigation Components
      </Text>
      <Text style={[styles.screenDescription, { color: colors.text.secondary, ...fonts.regular }]}>
        Essential navigation patterns used in modern mobile applications.
      </Text>

      <SectionTitle title="Header Bars" />
      <View style={styles.componentContainer}>
        <HeaderBar />
      </View>

      <SectionTitle title="Tab Bars" />
      <View style={styles.componentContainer}>
        <TabBarExample />
      </View>

      <SectionTitle title="Toolbars" />
      <View style={styles.componentContainer}>
        <ToolbarExample />
      </View>

      <SectionTitle title="Drawers" />
      <View style={styles.componentContainer}>
        <DrawerExample />
      </View>

      <SectionTitle title="Breadcrumbs" />
      <View style={styles.componentContainer}>
        <BreadcrumbExample />
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