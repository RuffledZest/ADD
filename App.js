import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Register from './Components/Register1';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
const App = () => {
    
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    
  );
};



export default App;
