import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import Lottie from 'lottie-react-native';
import Rocket from '../../assets/rocket.json';

const LoadingScreen = () => {
  return (
    <>
      <StatusBar
        backgroundColor="#fbc531"
        barStyle="dark-content"
        translucent
      />
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Lottie source={Rocket} style={styles.animation} autoPlay loop />
          <Text style={styles.text}>Travelling ang annotating...</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fbc531',
  },
  wrapper: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: 400,
    height: 400,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
    textAlign: 'center',
  },
});

export default LoadingScreen;
