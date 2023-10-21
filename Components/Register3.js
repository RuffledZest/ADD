import { View, Text,TextInput,Image,ImageBackground } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native-web'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Register3 = ({navigation}) => {
    const register2handler=()=>{
        navigation.navigate("register2");
    }
    const mainpagehandler=()=>{
        navigation.navigate("mainpage");
    }
  return (
    <View style={styles.background} >

      {/* title logo */}
      <View style={styles.mainLogocontainer}>
        <TouchableOpacity onPress={register2handler}>
        <Image  style={styles.backarrow} source={require("../assets/backarrow.jpg")}/>
        </TouchableOpacity>
        <Image style={styles.mainlogo} source={require("../assets/mainlogo.png")}/>
      </View>

        {/* text */}
        <View>
            <Text  style={styles.setprofileText}>Add Skills</Text>
        </View>
           
      {/* input fields */}
      
      {/* linkdein */}
      <View style={styles.field}>
        {/* image and text */}
        <View style={styles.imagetxt}>
        {/* Image */}
         <View style={styles.img}>
          <Image style={styles.linkdein} source={require("../assets/lindkein.png")}/>
         </View>
          {/* text */}
         <View style={styles.txts}>
          <Text style={styles.labelText}>Linkdein</Text>
         </View>
        </View>

        <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter Your Linkedln Profile ID"
          placeholderTextColor="#003f5c"
        />
        </View>
      </View> 
      
      {/* Github id */}
      <View style={styles.field}>
        {/* image and text */}
        <View style={styles.imagetxt}>
        {/* Image */}
         <View style={styles.img}>
          <Image style={styles.linkdein} source={require("../assets/github.png")}/>
         </View>
          {/* text */}
         <View style={styles.txts}>
          <Text style={styles.labelText}>Github</Text>
         </View>
        </View>

        <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter Your Github Profile ID"
          placeholderTextColor="#003f5c"
        />
        </View>
      </View> 
      
      {/* Discord id */}
      <View style={styles.field}>
        {/* image and text */}
        <View style={styles.imagetxt}>
        {/* Image */}
         <View style={styles.img}>
          <Image style={styles.linkdein} source={require("../assets/discord.png")}/>
         </View>
          {/* text */}
         <View style={styles.txts}>
          <Text style={styles.labelText}>Discord Id</Text>
         </View>
        </View>

        <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter Your Discord Profile ID"
          placeholderTextColor="#003f5c"
        />
        </View>
      </View> 
      
      
      {/* next button */}
      <TouchableOpacity onPress={mainpagehandler} style={styles.registerBtn}  >
        <Text style={styles.registerText}  >NEXT</Text>
      </TouchableOpacity>
        
        {/* Description */}
    <View style={styles.bottomtextContainer}>
        <Text style={styles.bottomtext}>By signing up,you agree to use this app's Terms of Services and Privacy Policy</Text>
    </View>


    </View>

  )
}
const styles = StyleSheet.create({
  field:{
       marginBottom:10
  } , 
  imagetxt:{
     display: "flex",
    //  borderWidth:2,
    // borderColor:"#FF0000",
    //  gap:10,
     padding:5,
     alignItems:"center",
     flexDirection:"row"
    },
    img:{
      marginLeft:20,
      width:35,
      height:35
    },
    linkdein:{
      width:"100%",
      height:"100%"
      
    },

   
    txts:{
       marginLeft:-5
    },
  background:{
        backgroundColor:"#FFFFFF",
        height:"100%"
    },
    container: {
      flex: 1,
      width:"100%",
      flexDirection:"column",
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
    },
    backarrow:{
        width:32,
        marginLeft:15,
        height:25
      },
      setprofileText:{
       fontSize:40,
       marginLeft:8,
       marginTop:10,
      //  borderColor:"#000000",
      //  borderWidth:2,
      //  fontFamily:"Arial, sans-serif",
       marginBottom:20,
    //    borderColor:"#000000",
    //    borderWidth:2,
       
    },
    mainLogocontainer:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        // marginBottom:5,
        // justifyContent:"space-between",
        marginTop:55,
        width:"100%",
        height:80,
       
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
    bgImg:{
        position:"absolute",
        top:300,
        left:30,
        // transform: [{rotate: '-18deg'}],
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

    
  });export default Register3