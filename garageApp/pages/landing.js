import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

export function LandingPage({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/landingBg.jpeg')}
        style={{flex: 1, width: '100%', height: null}}
        imageStyle={{
          resizeMode: 'cover',
        }}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.title}>Welcome to Garage Sales!</Text>
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.startButtonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'white',
  },
  startButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
