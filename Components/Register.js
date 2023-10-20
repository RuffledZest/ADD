import React, { useState } from 'react';
import { Image } from 'react-native';
import { View, SafeAreaView ,Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Register = ({ handleRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegisterPress = () => {
     handleRegister(email);
  };

  return (
    <View style={styles.container}>
      {/* main logo */}
      <View style={styles.mainLogocontainer}>
        <Image style={styles.mainlogo} source={require("../assets/mainlogo.png")}/>
      </View>
      {/* register and image components*/}
      <SafeAreaView style={styles.registerContainer}>
      <Text style={styles.logo}>Register</Text>
      <Image  style={styles.imagelogo} source={require("../assets/chessimage.jpg")}/>
      </SafeAreaView>

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
  mainLogocontainer:{
    display:"flex",
      alignItems:"center",
      marginTop:55,
      width:"100%",
      height:80,
      // borderColor:"#FF0000",
      // borderWidth:2,
  },
  mainlogo:{
     width:105,
     height:65
  },
  registerContainer: {
    display:"flex",
    width:"100%",
    height:150,
    // borderColor:"#000000",
    // borderWidth:2,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  logo: {
    // borderColor:"#0000FF",
    // borderWidth:2,
    marginLeft:55,
    marginTop:15,
    fontSize: 40,
    color: '#000000',
    marginBottom: 40,
    fontFamily:""
  },
  imagelogo:{
    marginTop:-80,
    // borderColor:"#0000FF",
    // borderWidth:2,
    width:150,
    height:160
  },
  inputViewparent:{
     marginTop:-35,
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
    marginTop: 30,
    marginBottom: 10,
  },
  registerText: {
    color: 'white',
  },
});

export default Register;