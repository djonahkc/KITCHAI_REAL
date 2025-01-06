import React, { useState } from 'react';
import { StyleSheet, View, Pressable, TextInput, Alert } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Link, useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function RegisterScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    try {
      console.log('Starting registration process...');
      
      // Basic validation
      if (!email || !password || !confirmPassword) {
        Alert.alert('Error', 'Please fill in all fields');
        return;
      }

      if (password !== confirmPassword) {
        Alert.alert('Error', 'Passwords do not match');
        return;
      }

      console.log('Attempting to navigate to home screen...');
      
      router.push('/(tabs)/home');  // Updated to go directly to home tab
      
    } catch (error) {
      console.error('Registration error:', error);
      Alert.alert('Error', 'Something went wrong during registration');
    }
  };

  const handleSocialLogin = (provider: string) => {
    try {
      console.log(`Logging in with ${provider}`);
      router.push('/(tabs)/home');  // Updated to go directly to home tab
    } catch (error) {
      console.error('Social login error:', error);
      Alert.alert('Error', `Could not login with ${provider}`);
    }
  };

  return (
    <LinearGradient 
      colors={['#E23E57', '#88304E']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.card}>
        <MaterialCommunityIcons 
          name="hamburger"
          size={60} 
          color="#E23E57"
          style={styles.logo}
        />
        
        <ThemedText style={styles.title}>Create Account</ThemedText>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="example@email.com"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#999"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          <Pressable style={styles.registerButton} onPress={handleRegister}>
            <LinearGradient
              colors={['#E23E57', '#88304E']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradient}
            >
              <ThemedText style={styles.buttonText}>Create Account</ThemedText>
            </LinearGradient>
          </Pressable>
        </View>

        <View style={styles.orContainer}>
          <View style={styles.divider} />
          <ThemedText style={styles.orText}>or continue with</ThemedText>
          <View style={styles.divider} />
        </View>

        <View style={styles.socialButtons}>
          <Pressable 
            style={[styles.socialButton, styles.googleButton]} 
            onPress={() => handleSocialLogin('Google')}
          >
            <MaterialCommunityIcons name="google" size={20} color="white" />
            <ThemedText style={styles.socialButtonText}>Google</ThemedText>
          </Pressable>

          <Pressable 
            style={[styles.socialButton, styles.appleButton]} 
            onPress={() => handleSocialLogin('Apple')}
          >
            <MaterialCommunityIcons name="apple" size={20} color="white" />
            <ThemedText style={styles.socialButtonText}>Apple</ThemedText>
          </Pressable>

          <Pressable 
            style={[styles.socialButton, styles.facebookButton]} 
            onPress={() => handleSocialLogin('Facebook')}
          >
            <MaterialCommunityIcons name="facebook" size={20} color="white" />
            <ThemedText style={styles.socialButtonText}>Facebook</ThemedText>
          </Pressable>
        </View>

        <Link href="/login" asChild>
          <Pressable>
            <ThemedText style={styles.backLink}>Back to Login</ThemedText>
          </Pressable>
        </Link>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#FFF5F5',
    borderRadius: 30,
    padding: 25,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  logo: {
    marginBottom: 20,
    alignSelf: 'center',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333',
  },
  inputContainer: {
    width: '100%',
    gap: 12,
    marginBottom: 25,
  },
  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 15,
    backgroundColor: 'white',
  },
  registerButton: {
    width: '100%',
    height: 45,
    borderRadius: 25,
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 15,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  orText: {
    color: '#666',
    fontSize: 14,
    marginHorizontal: 10,
  },
  socialButtons: {
    width: '100%',
    flexDirection: 'column',
    gap: 8,
    marginBottom: 20,
  },
  socialButton: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 20,
    gap: 8,
  },
  googleButton: {
    backgroundColor: '#DB4437',
  },
  appleButton: {
    backgroundColor: '#000000',
  },
  facebookButton: {
    backgroundColor: '#4267B2',
  },
  socialButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
    textAlign: 'center',
    marginRight: 24,
  },
  backLink: {
    color: '#E23E57',
    fontWeight: '600',
  },
});