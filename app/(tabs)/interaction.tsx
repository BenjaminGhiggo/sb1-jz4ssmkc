import { View, Text, StyleSheet, ScrollView } from 'react-native';
import useTheme from '@/hooks/useTheme';
import SectionTitle from '@/components/common/SectionTitle';
import Buttons from '@/components/interaction/Buttons';
import TextInputs from '@/components/interaction/TextInputs';
import Checkboxes from '@/components/interaction/Checkboxes';
import RadioButtons from '@/components/interaction/RadioButtons';
import Switches from '@/components/interaction/Switches';
import Sliders from '@/components/interaction/Sliders';
import ProgressIndicators from '@/components/interaction/ProgressIndicators';
import Spinners from '@/components/interaction/Spinners';
import Dropdowns from '@/components/interaction/Dropdowns';

export default function InteractionScreen() {
  const { colors, sizes, fonts } = useTheme();

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.content}
    >
      <Text style={[styles.screenTitle, { color: colors.text.primary, ...fonts.bold }]}>
        Interaction Components
      </Text>
      <Text style={[styles.screenDescription, { color: colors.text.secondary, ...fonts.regular }]}>
        Interactive elements that allow users to input data and perform actions.
      </Text>

      <SectionTitle title="Buttons" />
      <View style={styles.componentContainer}>
        <Buttons />
      </View>

      <SectionTitle title="Text Inputs" />
      <View style={styles.componentContainer}>
        <TextInputs />
      </View>

      <SectionTitle title="Checkboxes" />
      <View style={styles.componentContainer}>
        <Checkboxes />
      </View>

      <SectionTitle title="Radio Buttons" />
      <View style={styles.componentContainer}>
        <RadioButtons />
      </View>

      <SectionTitle title="Switches" />
      <View style={styles.componentContainer}>
        <Switches />
      </View>

      <SectionTitle title="Dropdowns" />
      <View style={styles.componentContainer}>
        <Dropdowns />
      </View>

      <SectionTitle title="Sliders" />
      <View style={styles.componentContainer}>
        <Sliders />
      </View>

      <SectionTitle title="Progress Indicators" />
      <View style={styles.componentContainer}>
        <ProgressIndicators />
      </View>

      <SectionTitle title="Loading Spinners" />
      <View style={styles.componentContainer}>
        <Spinners />
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