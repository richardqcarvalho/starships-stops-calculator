import React, { useEffect } from 'react';
import {
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import DeathStar from '../../assets/death-star.png';
import { useNavigation } from '@react-navigation/native';
import { StarshipController } from '../../controllers/Starship';

const Home = () => {
  const navigation = useNavigation();
  const { handleInputText, inputText } = StarshipController();

  return (
    <>
      <StatusBar backgroundColor="#000" barStyle="light-content" translucent />
      <View style={styles.container}>
        <Image source={DeathStar} style={styles.image} />
        <View style={styles.header}>
          <Text style={styles.firstTextHeader}>Welcome to</Text>
          <Text style={styles.secondTextHeader}>
            STARSHIPS STOPS CALCULATOR
          </Text>
        </View>
        <Text style={styles.description}>
          (if u need to know whats the best starship to travel til the other
          side of the galaxy)
        </Text>
        <TextInput
          style={styles.input}
          onChange={(e) => handleInputText(e.nativeEvent.text)}
          keyboardType="numeric"
          placeholder="Enter your travel distance (in megalights)"
          value={inputText}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Informations', { inputText })}>
          <Text style={styles.buttonText}>Cmon, calculate it!</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  image: {
    width: 75,
    height: 75,
    marginVertical: 15,
  },
  header: {
    width: '60%',
    marginVertical: 15,
  },
  firstTextHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: '#fbc531',
  },
  secondTextHeader: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    color: '#fbc531',
  },
  description: {
    marginVertical: 15,
    textAlign: 'center',
    width: '80%',
    color: '#fff',
  },
  input: {
    backgroundColor: '#fff',
    width: '80%',
    padding: 20,
    marginVertical: 15,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#fbc531',
    padding: 20,
    alignItems: 'center',
    marginVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default Home;
