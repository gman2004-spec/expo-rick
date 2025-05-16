import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import { Header } from '@/components/header';
import { Tabs } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

export default function TabLayout() {

  return (
    <Tabs>
      <Header image={require("../../assets/images/react-logo.png")}/>
     <Tabs.Screen name='index' options={{headerShown: false, tabBarIcon: () => (<Text>🤞</Text>)}}></Tabs.Screen>
     <Tabs.Screen name='explore' options={{headerShown: true, tabBarIcon: () => (<Text>👌</Text>)}}></Tabs.Screen>
     <Tabs.Screen name='list' options={{headerShown: false, tabBarIcon: () => (<Text>✌</Text>)}}></Tabs.Screen>
    </Tabs>
  );
}