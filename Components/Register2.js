import { View, Text,TextInput,Image,ImageBackground } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native-web'
import { TouchableOpacity } from 'react-native-gesture-handler';
const Register2 = ({navigation}) => {
  const register3handler=()=>{
    navigation.navigate("register3");
  }
    return (
    <View >
        {/* bg Img */}
        {/* <View style={styles.bgImg}>
          <Image  source={require("../assets/dleaf.png")}/>
        </View> */}

      {/* title logo */}
      <View style={styles.mainLogocontainer}>
        <Image style={styles.mainlogo} source={require("../assets/mainlogo.png")}/>
      </View>
        {/* text */}
        <View>
            <Text  style={styles.setprofileText}>Set Profile</Text>
         </View>

      {/* input fields */}
      <View style={styles.inputViewparent}>
        <Text style={styles.labelText}>Username</Text>
        <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter your Email/ Phone Number"
          placeholderTextColor="#003f5c"
        />
        </View>
      </View> 
      <View style={styles.inputViewparent}>
        <Text style={styles.labelText}>Password</Text>
        <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Characters must be between 8-16"
          placeholderTextColor="#003f5c"
        />
        </View>
      </View> 
      <View style={styles.inputViewparent}>
        <Text style={styles.labelText}>Confirm Password</Text>
        <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Re-enter your Password"
          placeholderTextColor="#003f5c"
        />
        </View>
      </View> 
      
      {/* next button */}
      <TouchableOpacity style={styles.registerBtn} onPress={register3handler} >
        <Text style={styles.registerText} >NEXT</Text>
      </TouchableOpacity>

    <View style={styles.bottomtextContainer}>
        <Text style={styles.bottomtext}>By signing up,you agree to use this app's Terms of Services and Privacy Policy</Text>
    </View>


    </View>
    // </View>


    // </ImageBackground>
  )
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:"100%",
      flexDirection:"column",
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
    },
    
    setprofileText:{
       fontSize:40,
       marginLeft:8,
       marginTop:-65,
    //    borderColor:"#000000",
    //    borderWidth:2,
       
    },
    mainLogocontainer:{
        display:"flex",
        alignItems:"center",
        marginTop:55,
        width:"100%",
        height:180,
    },
    mainlogo:{
        width:105,
        height:65
    },
    bgImg:{
        position:"absolute",
        top:300,
        left:30,
        transform: [{rotate: '-18deg'}],
        // borderColor:"#000000",
        // borderWidth:2,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        height:"100%",
        width:"100%",
        // marginLeft:30
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
        marginLeft:18
      },
      registerText: {
        color: 'white',
      },
      bottomtextContainer:{
        width:"100%",
        display:"flex",
        alignItems:"center"
    },
    bottomtext:{
        width:"90%"
        //   textAlign:"center"
      }

    
  });
  


export default Register2