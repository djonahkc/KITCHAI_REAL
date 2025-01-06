import { View, StyleSheet, Text, Pressable, Image, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useEffect } from 'react';

export default function HomeScreen() {
  const pulseAnim = new Animated.Value(1);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient 
        colors={['#E23E57', '#88304E']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.content}
      >
        <Image 
          source={require('../../assets/images/taylor-kiser-6RJct18G_3I-unsplash.jpg')}
          style={styles.backgroundImage}
        />

        <View style={styles.header}>
          <MaterialCommunityIcons name="hamburger" size={48} color="#FFF" />
        </View>

        <View style={styles.decorativeCircle} />
        <View style={styles.decorativeCircle2} />

        <View style={styles.mainContent}>
          <View style={styles.cameraSection}>
            <Text style={styles.mainText}>What's in your</Text>
            <Text style={styles.highlightText}>Kitchen?</Text>
            <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
              <Pressable style={styles.snapButton}>
                <MaterialCommunityIcons name="camera" size={40} color="#FFF" />
                <Text style={styles.buttonText}>Snap Ingredients</Text>
              </Pressable>
            </Animated.View>
          </View>
        </View>

        <View style={styles.bottomNav}>
          <Pressable 
            style={styles.navItem}
            onPress={() => router.push('/(tabs)/meals')}
          >
            <MaterialCommunityIcons name="food-apple" size={24} color="#E23E57" />
            <Text style={styles.navText}>Meals</Text>
          </Pressable>

          <Pressable 
            style={styles.navItem}
            onPress={() => router.push("/recipes" as any)}
          >
            <MaterialCommunityIcons name="book-open-variant" size={24} color="#E23E57" />
            <Text style={styles.navText}>Recipes</Text>
          </Pressable>

          <Pressable 
            style={styles.navItem}
            onPress={() => router.push('/(tabs)/profile')}
          >
            <MaterialCommunityIcons name="account" size={24} color="#E23E57" />
            <Text style={styles.navText}>Profile</Text>
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F5',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  header: {
    paddingTop: 60,
    alignItems: 'center',
    marginBottom: 20,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
  },
  cameraSection: {
    alignItems: 'center',
  },
  mainText: {
    fontSize: 32,
    color: '#FFF',
    fontWeight: '300',
  },
  highlightText: {
    fontSize: 48,
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  snapButton: {
    backgroundColor: '#E23E57',
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonText: {
    color: '#FFF',
    marginTop: 10,
    fontSize: 16,
    fontWeight: '500',
  },
  decorativeCircle: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(255,255,255,0.05)',
    top: -50,
    left: -50,
    transform: [{ scale: 1.2 }],
  },
  decorativeCircle2: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(255,255,255,0.05)',
    top: 100,
    right: -50,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  navItem: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: 8,
  },
  navText: {
    color: '#88304E',
    marginTop: 6,
    fontSize: 12,
    fontWeight: '500',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    opacity: 0.2,
    resizeMode: 'cover',
    transform: [{ scale: 1.0 }, { scaleX: 1.2 }],
  },
});