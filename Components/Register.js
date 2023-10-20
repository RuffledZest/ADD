import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Register = ({ handleRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegisterPress = () => {
     handleRegister(email);
  };

  return (
    <View style={styles.container}>
      {/* register and image components*/}
      <View style={styles.registerContainer}>
      <Text style={styles.logo}>Register</Text>
      </View>

      {/* input View components */}
      <View style={styles.inputViewparent}>
        <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter your Email/ Phone Number"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
        />
        </View>
      </View>
      {/* register btn */}
      <TouchableOpacity style={styles.registerBtn} onPress={handleRegisterPress}>
        <Text style={styles.registerText}>SIGN UP</Text>
      </TouchableOpacity>

      {/* privacy policy text */}
      <View>
        <Text>By signing up,you agree To this app Terms of Services and Privacy Policy.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    flexDirection:"column",
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  registerContainer: {
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  logo: {
    marginTop:55,
    fontSize: 40,
    color: '#000000',
    marginBottom: 40,
    fontFamily:""
  },
  inputViewparent:{
     width:"100%",
     display:"flex",
     alignItems:"center"
  },
  inputView: {
    width: '90%',
  },
  inputText: {
    borderRadius:25,
    borderWidth:2,
    padding:11,
    height: 50,
    width:"100%",
    
  },
  registerBtn: {
    width: '90%',
    backgroundColor: '#000000',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  registerText: {
    color: 'white',
  },
});

export default Register;