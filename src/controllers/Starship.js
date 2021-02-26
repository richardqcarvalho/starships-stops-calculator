import { useState } from 'react';
import api from '../services/api';

export const StarshipController = () => {
  const [loading, setLoading] = useState(false);
  const [starships, setStarships] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputText = (text) => {
    if (/^\d+$/.test(text)) {
      setInputText(text);
    }
  };

  const calculator = {
    day: (megalights, consumables, timeUnityData) => {
      return parseInt(
        Number(megalights) / Number(consumables) / 24 / Number(timeUnityData),
        0,
      );
    },
    days: (megalights, consumables, timeUnityData) => {
      return parseInt(
        Number(megalights) / Number(consumables) / 24 / Number(timeUnityData),
        0,
      );
    },
    week: (megalights, consumables, timeUnityData) => {
      return parseInt(
        Number(megalights) /
          Number(consumables) /
          24 /
          7 /
          Number(timeUnityData),
        0,
      );
    },
    weeks: (megalights, consumables, timeUnityData) => {
      return parseInt(
        Number(megalights) /
          Number(consumables) /
          24 /
          7 /
          Number(timeUnityData),
        0,
      );
    },
    month: (megalights, consumables, timeUnityData) => {
      return parseInt(
        Number(megalights) /
          Number(consumables) /
          24 /
          30 /
          Number(timeUnityData),
        0,
      );
    },
    months: (megalights, consumables, timeUnityData) => {
      return parseInt(
        Number(megalights) /
          Number(consumables) /
          24 /
          30 /
          Number(timeUnityData),
        0,
      );
    },
    year: (megalights, consumables, timeUnityData) => {
      return parseInt(
        Number(megalights) /
          Number(consumables) /
          24 /
          365 /
          Number(timeUnityData),
        0,
      );
    },
    years: (megalights, consumables, timeUnityData) => {
      return parseInt(
        Number(megalights) /
          Number(consumables) /
          24 /
          365 /
          Number(timeUnityData),
        0,
      );
    },
  };

  const calculateStops = async (megalights) => {
    setLoading(true);
    const { data } = await api.get('/starships');
    for (const starship of data.results) {
      const [consumables, consumablesUnity] = starship.consumables.split(' ');
      starship.stops = calculator[consumablesUnity](
        megalights,
        consumables,
        starship.MGLT,
      );
    }
    setStarships(data.results);
    setLoading(false);
  };

  return {
    starships,
    loading,
    calculateStops,
    inputText,
    handleInputText,
  };
};
