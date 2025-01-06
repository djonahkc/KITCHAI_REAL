import { StyleSheet, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function HomeScreen() {
  const navigateToOnboarding = () => {
    router.push('/onboarding');
  };

  return (
    <ThemedView style={styles.container}>
      <Pressable onPress={navigateToOnboarding}>
        <MaterialCommunityIcons 
          name="hamburger" 
          size={150} 
          color="white" 
          style={styles.burgerLogo}
        />
      </Pressable>
      <ThemedText type="title" style={styles.appTitle}>KitchAI</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8B0000',
  },
  burgerLogo: {
    marginBottom: 40,
  },
  appTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
  }
});
