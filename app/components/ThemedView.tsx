import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme'; // Assuming this hook exists

interface ThemedViewProps {
  style?: ViewStyle;
  children: React.ReactNode;
}

const ThemedView: React.FC<ThemedViewProps> = ({ style, children }) => {
  const colorScheme = useColorScheme(); // Get the current color scheme

  const themedStyle = styles[colorScheme ?? 'light'];

  return <View style={[themedStyle, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  light: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 10,
  },
  dark: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
  },
});

export { ThemedView };
