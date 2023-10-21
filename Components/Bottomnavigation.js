import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
const Bottomnavigation = ({navigator}) => {
  const profilehandler=()=>{
    navigator.navigate("profile");
  }
  const homepagehandler=()=>{
    navigator.navigate("mainpage");
  }
  const projectpagehandler=()=>{
    navigator.navigate("project");
  }
  return (
    // row
     <View style={styles.row}>
       {/* ek daba */}
       <TouchableOpacity onPress={homepagehandler}>
       <View>
         <Image style={styles.irony} source={require("../assets/boldhome.jpg")}/>
         <Text>Home</Text>  
       </View>
       </TouchableOpacity>
       <TouchableOpacity>
       <View>
         <Image style={styles.irony} source={require("../assets/posticon.jpg")}/>
         <Text>Post</Text>  
       </View>
       </TouchableOpacity>
       <TouchableOpacity onPress={projectpagehandler} >
       <View>
         <Image style={styles.irony} source={require("../assets/commenticon.jpg")}/>
         <Text>Projects</Text>  
       </View>
       </TouchableOpacity>
       {/* profile */}
       <TouchableOpacity onPress={profilehandler}>
       <View>
         <Image style={styles.irony} source={require("../assets/profileicon.jpg")}/>
         <Text>Profile</Text>  
       </View>
       </TouchableOpacity>
     </View>
  )
};
const styles=StyleSheet.create({

  row:{
    display:"flex",
    alignItems:"center",
    padding:15,
    flexDirection:"row",
    justifyContent:"space-between"
   },
   irony:{
    marginTop:-10,
    width:30,
    height:30
   }

});
export default Bottomnavigation