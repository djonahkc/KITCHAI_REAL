import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';

export default function TabsLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFF5F5' }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: { display: 'none' },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarButton: () => null,
          }}
        />
        <Tabs.Screen
          name="index"
          options={{
            tabBarButton: () => null,
          }}
        />
      </Tabs>
    </View>
  );
}
