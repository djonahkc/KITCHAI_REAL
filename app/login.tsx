import React, { useState } from 'react';
import { StyleSheet, Dimensions, View, Pressable, TextInput, Image } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Link } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function LoginScreen() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleLogin = () => {
    // Add login logic here
    router.push('/(tabs)');
};

return (
    <ThemedView style={styles.container}>
    <View style={styles.card}>
        <MaterialCommunityIcons 
        name="hamburger" 
        size={80} 
        color="#8B0000"
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

        <Pressable style={styles.loginButton} onPress={handleLogin}>
        <ThemedText style={styles.buttonText}>Login</ThemedText>
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
    </ThemedView>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#8B0000',
    justifyContent: 'center',
    padding: 20,
},
card: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 30,
    padding: 30,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
},
logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
    resizeMode: 'contain',
    alignSelf: 'center',
    textAlign: 'center',
},
inputContainer: {
    width: '100%',
    gap: 15,
    marginBottom: 30,
},
input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    backgroundColor: 'white',
},
loginButton: {
    backgroundColor: '#8B0000',
    paddingHorizontal: 60,
    paddingVertical: 12,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
},buttonText: {
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
    color: '#666',
  },
  registerLink: {
    color: '#8B0000',
    fontWeight: '600',
  },
});