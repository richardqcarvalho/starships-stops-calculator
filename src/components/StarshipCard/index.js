import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StarshipCard = ({ name, consumables, mglt, stops }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper1}>
        <Text style={styles.title}>Name</Text>
        <Text style={styles.description}>{name.toUpperCase()}</Text>
      </View>
      <View style={styles.wrapper2}>
        <Text style={styles.title}>Consumables for</Text>
        <Text style={styles.description}>{consumables.toUpperCase()}</Text>
      </View>
      <View style={styles.wrapper1}>
        <Text style={styles.title}>Megalights</Text>
        <Text style={styles.description}>{mglt}/H</Text>
      </View>
      <View style={styles.wrapper2}>
        <Text style={styles.title}>Necessary stops on your travel</Text>
        <Text style={styles.description}>{stops}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fbc531',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  wrapper1: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 25,
  },
  wrapper2: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fbc531',
    padding: 25,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default StarshipCard;
