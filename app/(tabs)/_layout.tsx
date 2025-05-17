import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';
import { Layout, Navigation, Palette, Zap, LayoutGrid } from 'lucide-react-native';
import useTheme from '@/hooks/useTheme';

export default function TabLayout() {
  const { colors, sizes } = useTheme();
  
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
          paddingBottom: sizes.s,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: sizes.xs,
          fontFamily: 'Inter-Medium',
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text.secondary,
        headerStyle: {
          backgroundColor: colors.surface,
        },
        headerTitleStyle: {
          color: colors.text.primary,
          fontFamily: 'Inter-Bold',
          fontSize: sizes.l,
        },
        headerShadowVisible: false,
        headerTitleAlign: 'center',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Layout color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="navigation"
        options={{
          title: 'Navigation',
          tabBarIcon: ({ color, size }) => (
            <Navigation color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="interaction"
        options={{
          title: 'Interaction',
          tabBarIcon: ({ color, size }) => (
            <Zap color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="content"
        options={{
          title: 'Content',
          tabBarIcon: ({ color, size }) => (
            <Palette color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="layout"
        options={{
          title: 'Layout',
          tabBarIcon: ({ color, size }) => (
            <LayoutGrid color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
  },
});