import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native-web'

const Home = ({navigation}) => {
  const registerpage=()=>{
    navigation.navigate("register1");
  }
  const Loginpage=()=>{
    navigation.navigate("login");
  }
    return (
     
    <View style={styles.parentdiv} >
    
    {/* images sidelogo and chess logo */}
    <View style={styles.maindiv}>
      <Image style={styles.sidelogo} source={require("../assets/mainlogo.png")}/>
      <Image style={styles.chessLogo} source={require("../assets/chessimage.jpg")}/>
    </View>
      
      {/*buttons*/}
      <View style={styles.btns}>
      <TouchableOpacity  onPress={Loginpage} style={styles.loginbtn}  >
        <Text style={styles.textcolor2}  >LOG IN</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={registerpage} style={styles.regsiterbtn}>
        <Text style={styles.textcolor} >REGISTER</Text>
      </TouchableOpacity>
      </View>

    </View>
  )
};
const styles = StyleSheet.create({
    parentdiv:{
        backgroundColor:"#FFFFFF",
        display:"flex",
        flexDirection:"column",
        width:"100%",
        height:"100%"
    },
    maindiv:{
        backgroundColor:"#FFFFFF",
        display:"flex",
        flexDirection:"row",
        alignItems: 'center',
        width:"100%",
        height:"80%",
    },
    sidelogo:{
        marginTop:30,
        width:260,
        marginLeft:10,
        height:170
    },
    textcolor:{
        color:"#FFFFFF",
        fontWeight:"bold"
    },
    textcolor2:{
        // color:"#FFFFFF",
        fontWeight:"bold"
    },
    chessLogo:{
        width:300,
        height:910
    },
    btns:{
     display:"flex",
     alignItems:"center",
     flexDirection:"row",
      justifyContent:"space-evenly",
    //    borderColor:"#FF0000",
    //    borderWidth:2,
       height:60
    },
    loginbtn:{
        display: "flex",
        width: 170,
        borderRadius:10,
        // flexDirection: "",
        marginLeft: 5,
        alignItems: "center",
        justifyContent: "center", 
        borderColor: "#000000",
        borderWidth: 2,
        height: 60, 
 
    },
    regsiterbtn:{
        width:170,
        borderRadius:10,
        backgroundColor:"#000000",
        
        display:"flex",
        borderColor:"#000000",
        borderWidth:2,
        alignItems: "center",
        justifyContent: "center", 
        height:"100%"
        // borderColor:"#FF0000",
        //  borderWidth:2,
    }


  });


export default Home