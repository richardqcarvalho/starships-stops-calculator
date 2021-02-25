import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

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
          <ActivityIndicator color="#000" size={50} />
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
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
    textAlign: 'center',
  },
});

export default LoadingScreen;
