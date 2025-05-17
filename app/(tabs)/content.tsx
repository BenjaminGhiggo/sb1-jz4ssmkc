import { View, Text, StyleSheet, ScrollView } from 'react-native';
import useTheme from '@/hooks/useTheme';
import SectionTitle from '@/components/common/SectionTitle';
import Typography from '@/components/content/Typography';
import Images from '@/components/content/Images';
import IconsExample from '@/components/content/IconsExample';
import ListsExample from '@/components/content/ListsExample';
import CardsExample from '@/components/content/CardsExample';
import ModalsExample from '@/components/content/ModalsExample';
import AlertsExample from '@/components/content/AlertsExample';
import NotificationsExample from '@/components/content/NotificationsExample';

export default function ContentScreen() {
  const { colors, sizes, fonts } = useTheme();

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.content}
    >
      <Text style={[styles.screenTitle, { color: colors.text.primary, ...fonts.bold }]}>
        Content Components
      </Text>
      <Text style={[styles.screenDescription, { color: colors.text.secondary, ...fonts.regular }]}>
        Display components for presenting various types of content and information.
      </Text>

      <SectionTitle title="Typography" />
      <View style={styles.componentContainer}>
        <Typography />
      </View>

      <SectionTitle title="Images" />
      <View style={styles.componentContainer}>
        <Images />
      </View>

      <SectionTitle title="Icons" />
      <View style={styles.componentContainer}>
        <IconsExample />
      </View>

      <SectionTitle title="Lists" />
      <View style={styles.componentContainer}>
        <ListsExample />
      </View>

      <SectionTitle title="Cards" />
      <View style={styles.componentContainer}>
        <CardsExample />
      </View>

      <SectionTitle title="Modals" />
      <View style={styles.componentContainer}>
        <ModalsExample />
      </View>

      <SectionTitle title="Alerts" />
      <View style={styles.componentContainer}>
        <AlertsExample />
      </View>

      <SectionTitle title="Notifications" />
      <View style={styles.componentContainer}>
        <NotificationsExample />
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