import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import Bottomnavigation from "./Bottomnavigation";

const MyProfile = ({ navigation }) => {
  const homepagehandler = () => {
    navigation.navigate("mainpage");
  };
  return (
    <View style={styles.parentdiv}>
      {/* heading logo */}
      <View style={styles.mainLogocontainer}>
        <TouchableOpacity onPress={homepagehandler}>
          <Image
            style={styles.backarrow}
            source={require("../assets/backarrow.jpg")}
          />
        </TouchableOpacity>
        <Image
          style={styles.mainlogo}
          source={require("../assets/mainlogo.png")}
        />
      </View>

      {/*  write me section*/}
      <View style={styles.aboutme}>
        {/* mainname and pic */}
        <View style={styles.dpName}>
          {/* image */}
          <View style={styles.dpContainer}>
            <Image style={styles.dp} source={require("../assets/dp2.webp")} />
          </View>
          {/* username */}
          <View>
            <Text style={styles.username}>User Blinky</Text>
            <Text style={{ fontSize: 18 }}>@Blinky_aka_destroyer</Text>
          </View>
        </View>

        {/* about section */}
        <View style={styles.myselfparent}>
          <View style={styles.imagecontainer}>
            <Image
              source={require("../assets/lindkein.png")}
              style={styles.icons}
            />
            <Image
              source={require("../assets/github.png")}
              style={styles.icons}
            />
            <Image
              source={require("../assets/discord.png")}
              style={styles.icons}
            />
          </View>
          <View style={styles.myself}>
          <Text style={styles.myselftxt} >
            Hi I am the Designer Guy, I barely passed my finals, but hey! at
            least I have been selected for prestigious hackathons like
            hack-o-octo.
          </Text>
          <View style={{marginTop:5}}>
          <Text style={styles.dummyedit}>Edit Profile</Text>
          </View>
          </View>
          
        </View>
      </View>

     {/* Posts && sameple work */}
      <View style={styles.btns}>
        <TouchableOpacity>
            <Text style={styles.btn}>Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.btn}>Sample Work</Text>
        </TouchableOpacity>
      </View>


      {/* cards */}
      {/* <ScrollView> */}
        <View style={styles.grid}>
        <View style={styles.postholder}>
          <Image style={styles.post} source={require("../assets/post1.jpg")}/>
        </View>
      <View style={styles.postholder}>
         <Image style={styles.post} source={require("../assets/post2.jpg")}/>
      </View>
        </View>
      
      {/* </ScrollView> */}
      
     {/* bottom navigation */}
      <View style={styles.navbar}>
        <Bottomnavigation navigator={navigation} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  parentdiv: {
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  navbar: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "#FFFFFF",
    height: 60,
    // borderWidth:2,
    // borderColor:"#000000",
    width: "100vw",
  },
  grid:{
      display:"flex",
      flexDirection:"row",
    //   borderWidth:2,
    //   borderColor:"#000000",
       justifyContent:"space-evenly",
      marginTop:30,
    },
    postholder:{
        // width:"100%",
     display:"flex",
     alignItems:"center",
     justifyContent:"center"
    },
  post:{
    // borderWidth:2,
    // borderColor:"#000000",
    width:190,
    height:190
  },
  btns:{
    display:"flex",
    flexDirection:"row",
    marginTop:25,
    justifyContent:"space-evenly"
  },
  btn:{
    backgroundColor:"#000000",
    color:"#FFFFFF",
    width:150,
    textAlign:"center",
    borderRadius:30,
    padding:10
  },
  mainLogocontainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent:"space-between",
    marginTop: 55,
    width: "100%",
    height: 80,
  },
  backarrow: {
    width: 32,
    marginLeft: 15,
    height: 25,
  },
  mainlogo: {
    // borderColor:"#FF0000",
    // borderWidth:2,
    display: "flex",
    justifyContent: "flex-start",
    // width:"80%",
    marginLeft: 90,
    width: 105,
    height: 65,
  },
  dummyedit:{
  backgroundColor:"#000000",
  color:"#FFFFFF",
  width:120,
  paddingLeft:20,
  padding:10,
  borderRadius:30,
  height:40,
  
},
  aboutme: {
    backgroundColor: "#68bce4",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    // backgroundColor:"#000000",
  },
  dpName: {
    width: "100%",
    alignItems: "center",
    height: 170,
    display: "flex",
    flexDirection: "row",
    gap: 3,
  },
  username: {
    color: "#FFFFFF",
    fontSize: 50,
  },
  myselfparent: {
    display: "flex",
    flexDirection: "row",
    gap: 50,
    marginTop: -38,
    alignContent: "center",
  },
  imagecontainer: {
    display: "flex",
    flexDirection: "column",
    width: 30,
    gap: 10,
    marginLeft: 25,
    // borderWidth:2,
    // borderColor:"#FF0000",
    alignItems: "flex-start",
    // justifyContent:"space-evenly"
  },
  icons: {
    width: 30,
    height: 30,
  },
  myself: {
    // borderWidth:2,
    // borderColor:"#000000",
    padding: 13,
    textAlign: "left",
    fontSize: 18,
    width: 280,
    height: 180,
  },
  myselftxt:{
    textAlign: "left",
    fontSize: 18,
  },
  dpContainer: {
    // borderWidth:2,
    // borderColor:"#000000",
    width: 80,
    marginLeft: 5,
    marginRight: 20,
    height: 80,
  },
  dp: {
    width: "100%",
    height: "100%",
    borderRadius: 200,
  },
});
export default MyProfile;
