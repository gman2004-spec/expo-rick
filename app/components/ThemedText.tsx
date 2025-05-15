import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';

interface ThemedTextProps {
  type?: 'title' | 'subtitle' | 'default' | 'defaultSemiBold' | 'link' | 'light';
  style?: TextStyle;
  children: React.ReactNode;
}

const ThemedText: React.FC<ThemedTextProps> = ({ type = 'default', style, children }) => {
  const colorScheme = useColorScheme();
  
  const themedStyle = styles[type][colorScheme ?? 'light'];

  return (
    <Text style={[themedStyle, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    light: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000',
    },
    dark: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
    },
  },
  subtitle: {
    light: {
      fontSize: 18,
      fontWeight: '600',
      color: '#333',
    },
    dark: {
      fontSize: 18,
      fontWeight: '600',
      color: '#ccc',
    },
  },
  default: {
    light: {
      fontSize: 16,
      fontWeight: 'normal',
      color: '#000',
    },
    dark: {
      fontSize: 16,
      fontWeight: 'normal',
      color: '#fff',
    },
  },
  defaultSemiBold: {
    light: {
      fontSize: 16,
      fontWeight: '600',
      color: '#000',
    },
    dark: {
      fontSize: 16,
      fontWeight: '600',
      color: '#fff',
    },
  },
  link: {
    light: {
      fontSize: 16,
      color: '#007BFF',
      textDecorationLine: 'underline',
    },
    dark: {
      fontSize: 16,
      color: '#1E90FF',
      textDecorationLine: 'underline',
    },
  },
});

export { ThemedText };
