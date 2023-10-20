import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Login from './Login';
import Register from './Register';
import Home from './Home';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [username, setUsername] = useState('');

  const handleLoginOption = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleRegisterOption = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const handleLogin = (name) => {
    setUsername(name);
    setShowLogin(false);
  };

  const handleRegister = (name) => {
    setUsername(name);
    setShowRegister(false);
  };

  return (
    <View style={styles.container}>
      {!username && !showLogin && !showRegister && (
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionButton} onPress={handleLoginOption}>
            <Text style={styles.optionText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={handleRegisterOption}>
            <Text style={styles.optionText}>Register</Text>
          </TouchableOpacity>
        </View>
      )}
      {showLogin && <Login handleLogin={handleLogin} />}
      {showRegister && <Register handleRegister={handleRegister} />}
      {username && <Home username={username} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  optionText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
