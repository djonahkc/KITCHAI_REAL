import React from 'react';
import { StyleSheet, Dimensions, View, Image, Pressable } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

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
    <ThemedView style={styles.container}>
    <View style={styles.imageSpace}>
        {onboardingSlides[activeSlide].image && (
          <Image 
            source={onboardingSlides[activeSlide].image}
            style={styles.topImage}
          />
        )}
    </View>
    <Carousel
        data={onboardingSlides}
        renderItem={({ item, index }: { item: OnboardingSlide; index: number }) => (
        <ThemedView style={styles.slide}>
            <View style={styles.card}>
            <MaterialCommunityIcons name={item.icon} size={50} color="#8B0000" />
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
                    onPress={() => router.push('/(tabs)')}
                >
                    <ThemedText style={styles.nextButtonText}>Next</ThemedText>
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
    />
    </ThemedView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B0000',
  },
  imageSpace: {
    height: height * 0.55,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8B0000',
  },
  topImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  slide: {
    height: height * 0.6,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: -100,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 30,
    paddingTop: 130,
    paddingHorizontal: 30,
    paddingBottom: 40,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#000',
    marginTop: 15,
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  bottomContainer: {
    width: '100%',
    alignItems: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: '#8B0000',
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  nextButton: {
    backgroundColor: '#8B0000',
    paddingHorizontal: 60,
    paddingVertical: 12,
    borderRadius: 25,
    marginTop: 40,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});