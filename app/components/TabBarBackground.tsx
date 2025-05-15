import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, View, Text, Platform } from 'react-native';
import axios from 'axios';

export default function TabBarBackground() {
  const [characterImage, setCharacterImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchRandomCharacter = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character/1'); // Fetching a single character (for example)
        setCharacterImage(response.data.image); // Using the character's image as the background
      } catch (error) {
        console.error('Error fetching character:', error);
      }
    };

    fetchRandomCharacter();
  }, []);

  return (
    <ImageBackground
      source={{ uri: characterImage || 'https://rickandmortyapi.com/api/character/avatar/1.jpeg' }} // Default image if characterImage is not available
      style={styles.tabBarBackground}>
      <View style={styles.overlay}>
        {/* You can add text or other components here if you'd like */}
        <Text style={styles.text}>Explore the Universe of Rick and Morty</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  tabBarBackground: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
