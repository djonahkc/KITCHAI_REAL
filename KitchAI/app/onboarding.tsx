import React from 'react';
import { StyleSheet, Dimensions, View, Image, Pressable, ImageBackground } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

interface OnboardingSlide {
  title: string;
  description: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  image?: any;
}

const { width, height } = Dimensions.get('window');

const onboardingSlides: OnboardingSlide[] = [
  {
    title: 'Calorie tracking made easy',
    description: 'Just snap a quick photo of your meal and well do the rest',
    icon: 'camera',
    image: require('@/assets/images/Ingredients.jpg'),
  },
  {
    title: 'Smart Recipe Suggestions',
    description: 'Get personalized recipe recommendations based on your preferences',
    icon: 'robot',
    image: require('@/assets/images/phone_food.jpg'),
  },
  {
    title: 'Track Your Progress',
    description: 'Monitor your nutrition goals with detailed insights',
    icon: 'chef-hat',
    image: require('@/assets/images/woman_cooking.jpg'),
  },
];

export default function OnboardingScreen() {
  const [activeSlide, setActiveSlide] = React.useState(0);

  return (
    <LinearGradient 
      colors={['#E23E57', '#88304E']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <ImageBackground 
        source={onboardingSlides[activeSlide].image}
        style={styles.imageSpace}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.3)']}
          style={StyleSheet.absoluteFill}
        />
      </ImageBackground>
      
      <Carousel
        data={onboardingSlides}
        renderItem={({ item, index }: { item: OnboardingSlide; index: number }) => (
          <ThemedView style={styles.slide}>
            <View style={styles.card}>
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons name={item.icon} size={50} color="#E23E57" />
              </View>
              <ThemedText type="title" style={styles.title}>{item.title}</ThemedText>
              <ThemedText style={styles.description}>{item.description}</ThemedText>
              <View style={styles.bottomContainer}>
                <View style={styles.pagination}>
                  {onboardingSlides.map((_, i) => (
                    <View
                      key={i}
                      style={[
                        styles.paginationDot,
                        i === activeSlide && styles.paginationDotActive,
                      ]}
                    />
                  ))}
                </View>
                {index === onboardingSlides.length - 1 && (
                  <Pressable 
                    style={styles.nextButton}
                    onPress={() => router.push('/login')}
                  >
                    <LinearGradient
                      colors={['#E23E57', '#88304E']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={styles.gradient}
                    >
                      <ThemedText style={styles.nextButtonText}>Get Started</ThemedText>
                    </LinearGradient>
                  </Pressable>
                )}
              </View>
            </View>
          </ThemedView>
        )}
        width={width}
        height={height * 0.7}
        onSnapToItem={(index) => setActiveSlide(index)}
        defaultIndex={0}
        scrollAnimationDuration={50}
        loop={false}
        enabled={true}
        autoPlay={false}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageSpace: {
    height: height * 0.5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    height: height * 0.65,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: -80,
  },
  card: {
    backgroundColor: '#FFF5F5',
    borderRadius: 30,
    paddingTop: 60,
    paddingHorizontal: 30,
    paddingBottom: 40,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  iconContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: 'rgba(226, 62, 87, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  bottomContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 'auto',
    paddingBottom: 20,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(226, 62, 87, 0.2)',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: '#E23E57',
    width: 20,
    height: 8,
    borderRadius: 4,
  },
  nextButton: {
    width: '80%',
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 80,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});