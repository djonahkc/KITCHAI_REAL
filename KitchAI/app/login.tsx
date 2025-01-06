import React, { useState } from 'react';
import { StyleSheet, View, Pressable, TextInput } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Link } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    console.log('Logging in with:', email, password);
    router.replace('/home');
  };

  return (
    <LinearGradient 
      colors={['#E23E57', '#88304E']}  // Berry red to deep raspberry
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.card}>
        <MaterialCommunityIcons 
          name="hamburger"
          size={60} 
          color="#E23E57"  // Updated to berry red
          style={styles.logo}
        />
        
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
        </View>

        <Pressable style={styles.loginButton}>
          <LinearGradient
            colors={['#E23E57', '#88304E']}  // Matching gradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradient}
          >
            <ThemedText style={styles.buttonText}>Login</ThemedText>
          </LinearGradient>
        </Pressable>

        <View style={styles.footer}>
          <ThemedText style={styles.footerText}>Don't have an account? </ThemedText>
          <Link href="/register" asChild>
            <Pressable>
              <ThemedText style={styles.registerLink}>Register</ThemedText>
            </Pressable>
          </Link>
        </View>
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
    backgroundColor: '#FFF5F5',  // Soft pink white
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
  loginButton: {
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
  footer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#636E72',
  },
  registerLink: {
    color: '#E23E57',  // Updated to berry red
    fontWeight: '600',
  },
});