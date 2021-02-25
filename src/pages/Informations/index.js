/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  View,
  StatusBar,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Platform,
  Image,
} from 'react-native';
import { StarshipController } from '../../controllers/Starship';
import LoadingScreen from '../../components/LoadingScreen';
import StarshipCard from '../../components/StarshipCard';
import ArrowLeft from '../../assets/arrow-left.png';

const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

const Informations = () => {
  const navigation = useNavigation();
  const { starships, loading, calculateStops } = StarshipController();
  const { params } = useRoute();

  useEffect(() => {
    calculateStops(params.inputText);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <StatusBar backgroundColor="#000" barStyle="light-content" translucent />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={ArrowLeft} style={styles.image} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={starships}
          keyExtractor={(starship) => starship.name}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <StarshipCard
              name={item.name}
              consumables={item.consumables}
              mglt={item.MGLT}
              stops={item.stops}
            />
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: statusBarHeight,
    flex: 1,
    backgroundColor: '#000',
    padding: 30,
  },
  header: {
    marginBottom: 25,
    backgroundColor: '#000',
  },
  image: {
    width: 30,
    height: 15,
  },
});

export default Informations;
