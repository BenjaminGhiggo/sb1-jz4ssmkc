import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import useTheme from '@/hooks/useTheme';
import { ArrowRight } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import ComponentCard from '@/components/common/ComponentCard';

export default function HomeScreen() {
  const { colors, sizes, fonts, getShadow } = useTheme();
  const router = useRouter();

  const categories = [
    {
      title: 'Navigation',
      description: 'Navigation patterns and elements used in modern mobile apps',
      route: '/navigation',
      icon: 'navigation',
      color: colors.primary,
    },
    {
      title: 'Interaction',
      description: 'Interactive elements like buttons, inputs and form controls',
      route: '/interaction',
      icon: 'zap',
      color: colors.secondary,
    },
    {
      title: 'Content',
      description: 'Content display elements for text, images and data',
      route: '/content',
      icon: 'palette',
      color: colors.accent,
    },
    {
      title: 'Layout',
      description: 'Layout and structural components for organizing your UI',
      route: '/layout',
      icon: 'layout-grid',
      color: colors.success,
    },
  ];

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.content}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text.primary, ...fonts.bold }]}>
          React Native UI Components
        </Text>
        <Text style={[styles.subtitle, { color: colors.text.secondary, ...fonts.regular }]}>
          A comprehensive collection of UI components for your next mobile app
        </Text>
      </View>

      <Image
        source={{ uri: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
        style={styles.heroImage}
        resizeMode="cover"
      />

      <Text style={[styles.sectionTitle, { color: colors.text.primary, ...fonts.medium }]}>
        Component Categories
      </Text>

      <View style={styles.categoriesContainer}>
        {categories.map((category, index) => (
          <ComponentCard
            key={index}
            title={category.title}
            description={category.description}
            iconName={category.icon}
            color={category.color}
            onPress={() => router.push(category.route)}
          />
        ))}
      </View>

      <View style={[styles.featuredSection, { backgroundColor: colors.surface, ...getShadow('small') }]}>
        <Text style={[styles.featuredTitle, { color: colors.text.primary, ...fonts.medium }]}>
          Featured Components
        </Text>
        <Text style={[styles.featuredDescription, { color: colors.text.secondary, ...fonts.regular }]}>
          Explore some of our most popular UI components that you can use in your projects
        </Text>
        <Pressable 
          style={[styles.featuredButton, { backgroundColor: colors.primary }]}
          onPress={() => router.push('/interaction')}
        >
          <Text style={[styles.buttonText, { color: colors.white, ...fonts.medium }]}>
            Explore Components
          </Text>
          <ArrowRight size={16} color={colors.white} />
        </Pressable>
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
  },
  header: {
    marginVertical: 24,
  },
  title: {
    fontSize: 28,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
  },
  heroImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 16,
  },
  categoriesContainer: {
    gap: 16,
    marginBottom: 24,
  },
  featuredSection: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  featuredTitle: {
    fontSize: 18,
    marginBottom: 8,
  },
  featuredDescription: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  featuredButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    gap: 8,
  },
  buttonText: {
    fontSize: 14,
  },
});