import { View, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Index() {
  return (
    <LinearGradient 
      colors={['#E23E57', '#88304E']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.content}>
        <Link href="/onboarding" asChild>
          <Pressable style={styles.iconButton}>
            <MaterialCommunityIcons 
              name="hamburger" 
              size={150}
              color="#FFF" 
              style={styles.icon}
            />
          </Pressable>
        </Link>
        <View style={styles.titleContainer}>
          <ThemedText style={styles.title}>KitchAI</ThemedText>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButton: {
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginBottom: 30,
    alignSelf: 'center',
  },
  titleContainer: {
    backgroundColor: 'transparent',
    marginTop: 10,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    includeFontPadding: false,
    padding: 30,
  },
  startText: {
    color: '#FFFFFF',
    fontSize: 18,
    opacity: 0.9,
    marginTop: 40,
  },
});
