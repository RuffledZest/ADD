import React, { useState } from 'react';
import { Image } from 'react-native';
import { View, SafeAreaView ,Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

const Login = ({navigation}) => {
  const homepagehandler=()=>{
    navigation.navigate('home');
  }
  const mainpagehandler=()=>{ 
    navigation.navigate('mainpage'); 
  }
  return (
    <View style={styles.container}>
      {/* main logo */}
      <View style={styles.mainLogocontainer}>
        <TouchableOpacity onPress={homepagehandler}>
        <Image  style={styles.backarrow} source={require("../assets/backarrow.jpg")}/>
        </TouchableOpacity>
        <Image style={styles.mainlogo} source={require("../assets/mainlogo.png")}/>
      </View>
      {/* register and image components*/}
      <SafeAreaView style={styles.registerContainer}>
      <Text style={styles.logo}>Login</Text>
      <Image  style={styles.imagelogo} source={require("../assets/chessimage.jpg")}/>
      </SafeAreaView>

      {/* input View components */}
      <View style={styles.inputViewparent}>
        <Text style={styles.labelText}>Username or Email address</Text>
        <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter your Username/ Email address"
          placeholderTextColor="#003f5c"
        />
        </View>
      </View>

      {/* password */}
      <View style={styles.inputViewparent}>
        <Text style={styles.labelText}>Password</Text>
        <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
        />
        </View>
      </View>
      {/* register btn */}
      <TouchableOpacity style={styles.registerBtn} onPress={mainpagehandler}>
        <Text style={styles.registerText} >LOG IN</Text>
      </TouchableOpacity>

      {/* privacy policy text */ }
      <View>
        <Text style={{textDecorationLine:"underline"}}>FORGOT YOUR PASSWORD?</Text>
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
      flexDirection:"row",
      alignItems:"center",
      // justifyContent:"space-between",
      marginTop:55,
      width:"100%",
      height:80,
     
    },
    backarrow:{
      width:32,
      marginLeft:15,
      height:25
    },
    mainlogo:{
    // borderColor:"#FF0000",
    // borderWidth:2,
    display:"flex",
    justifyContent:"flex-start",
    // width:"80%",
    marginLeft:90,
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
    marginTop:15,
    marginBottom:10,
    width:"100%",
    display:"flex",
    flexDirection:"column",
    // alignItems:"center"
},
labelText:{
  marginLeft:25,
  fontWeight:"bold",
  fontSize:15,
  marginBottom:5,
},
inputView: {
   display:"flex",
   width: '90%',
   marginLeft:15
 },
 inputText: {
   borderRadius:25,
   borderWidth:2,
   padding:15,
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
    marginTop: 20,
    marginBottom: 10,
  },
  registerText: {
    color: 'white',
  },
});

export default Login;