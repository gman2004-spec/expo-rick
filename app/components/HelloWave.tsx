import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { Animated } from 'react-native-reanimated';
import axios from 'axios';

// Fetch Rick and Morty Character Data
const fetchCharacterData = async (id: number) => {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching character data:', error);
  }
};

const HelloWave = () => {
  const [character, setCharacter] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCharacter = async () => {
      const data = await fetchCharacterData(1); // Fetch the first character (you can change this)
      setCharacter(data);
      setLoading(false);
    };

    getCharacter();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  // Define the animation for the waving effect
  const waveAnim = new Animated.Value(0);
  Animated.loop(
    Animated.sequence([
      Animated.timing(waveAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(waveAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ])
  ).start();

  const waveStyle = {
    transform: [
      {
        rotate: waveAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '15deg'],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.characterImage} />
      <Text style={styles.characterName}>{character.name}</Text>
      <Animated.View style={[styles.wavingHand, waveStyle]}>
        <Text style={styles.waveText}>👋</Text> {/* Waving Hand Emoji */}
      </Animated.View>
      <Text style={styles.characterDetails}>Species: {character.species}</Text>
      <Text style={styles.characterDetails}>Status: {character.status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  characterImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  characterName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  characterDetails: {
    fontSize: 18,
    marginVertical: 5,
  },
  wavingHand: {
    fontSize: 60,
    marginBottom: 20,
  },
  waveText: {
    fontSize: 60,
  },
});

export default HelloWave;
