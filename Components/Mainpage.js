import { View, Text,TouchableOpacity,Image,BackHandler } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { useEffect } from 'react'

const Mainpage = () => {
  // useEffect(() => {
  //   const backAction = () => {
  //    return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction
  //   );

  //   return () => backHandler.remove();
  // }, []);

  return (
    <View style={{backgroundColor:"#9BB2B3"}} >
      {/* main logo */}
      <View style={styles.mainLogocontainer}>
        <Image style={styles.mainlogo} source={require("../assets/mainlogo.png")}/>
      </View>

      {/* dp and username */}
      <View style={styles.dpName}>
         {/* image */}
         <View style={styles.dpContainer}>
          <Image style={styles.dp} source={require("../assets/lindkein.png")}/>
        </View>
        {/* username */}
         <View>
          <Text style={styles.username}>User Blinky</Text>
         </View> 
      </View>

      {/* feeds of all */}
      <View style={styles.feedline1} >
        <TouchableOpacity style={styles.registerBtn}><Text style={styles.registerText}>Common Feed</Text></TouchableOpacity>
      </View>
      <View style={styles.feedline2} >
        <TouchableOpacity style={styles.registerBtn}><Text style={styles.registerText}>Developer</Text></TouchableOpacity>
        <TouchableOpacity style={styles.registerBtn}><Text style={styles.registerText}>Designer</Text></TouchableOpacity>
      </View>

    </View>
  )
}
const styles=StyleSheet.create({
  mainLogocontainer:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    marginTop:55,
    width:"100%",
    height:80,
   
  },
  feedline1:{
   display:"flex",
   flexDirection:"row",
    alignItems:"center",
    justifyContent:"center"
  },
  feedline2:{
   display:"flex",
   flexDirection:"row",
   alignItems:"center",
   justifyContent:"center"
  },
  registerBtn: {
    width: '40%',
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
  dpName:{
    width:"100%",
    alignItems:"center",
    // height:"100%",
    display:"flex",
    flexDirection:"row",
    gap:3
    
  },
  username:{
      fontSize:30
  },
  dpContainer:{
    // borderWidth:2,
    // borderColor:"#000000",
     width:50,
     marginLeft:5,
     marginRight:20,
     height:50,
    },
    dp:{
      width:"100%",
      height:"100%",
      borderRadius:200
  },
  mainlogo:{
  display:"flex",
  justifyContent:"flex-start",
  width:105,
  height:65
}


});


export default Mainpage