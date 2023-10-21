import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import Bottomnavigation from "./Bottomnavigation";
import { TouchableOpacity } from "react-native";

const Project = ({ navigation }) => {
  const homepagehandler = () => {
    navigation.naviagte("profile");
  };
  return (
    <View style={styles.parentdiv}>
      {/* dp and back btn */}
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
            {/* <Text style={{ fontSize: 18 }}>@Blinky_aka_destroyer</Text> */}
          </View>
        </View>
      </View>
        
        {/*collaborations promt */}
        <View style={styles.colabCompo}>
          <Text style={styles.colabCompotxt} >
            Your Collaborations
          </Text>
        </View>

        {/*section- 2 */}
        <ScrollView style={styles.myrepos}>
        <View style={styles.colabme}>
        {/* mainname and pic */}
        <View style={styles.dpName}>
          {/* image */}
          <View style={styles.partners}>
            {/* colaborator1 */}
            <View style={styles.compoContainer}>
             <Image style={styles.dp} source={require("../assets/dp2.webp")} />
            </View>

            {/* colaborator2 */}
           <View style={styles.compoContainer2}>
            <Image style={styles.dp} source={require("../assets/dp2.webp")} />
           </View>

          </View>
          {/* username */}
          <View>
            <Text style={styles.colabname}>You and DevGuys Are in Collaborations</Text>
          </View>
        </View>
        </View>
        <View style={styles.colabme}>
        {/* mainname and pic */}
        <View style={styles.dpName}>
          {/* image */}
          <View style={styles.partners}>
            {/* colaborator1 */}
            <View style={styles.compoContainer}>
             <Image style={styles.dp} source={require("../assets/dp2.webp")} />
            </View>

            {/* colaborator2 */}
           <View style={styles.compoContainer2}>
            <Image style={styles.dp} source={require("../assets/dp2.webp")} />
           </View>

          </View>
          {/* username */}
          <View>
            <Text style={styles.colabname}>You and DevGuys Are in Collaborations</Text>
          </View>
        </View>
        </View>
          
          {/* load more button */}
          <TouchableOpacity style={styles.Lmore}>
            <Text style={styles.btn}>LOAD MORE</Text>
        </TouchableOpacity>
          
          {/* active projects prompt */}
          <View style={styles.colabCompo}>
          <Text style={styles.colabCompotxt} >
            Your Active Projects
          </Text>
        </View>
        </ScrollView>
        
      {/* bottom navbar */}
      <View style={styles.navbar}>
        <Bottomnavigation navigator={navigation} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  navbar: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "#FFFFFF",
    height: 60,
    width: "100vw",
  },
  myrepos:{
    height:80,
    // borderColor:"#FFF000",
    // borderWidth:2,
    marginBottom:100,
  },
  colabCompo:{
    marginVertical:20,
   display:"flex",
   justifyContent:"center",
   flexDirection:"row",
  //  borderBottomWidth:1,
  //  borderColor:"#000000"
  },
  partners:{
    display:"flex",
    // borderColor:"#FF0000",
    // borderWidth:2,
    marginLeft:-10,
    flexDirection:"row",
    // gap:-1
    justifyContent:"flex-start"
  },
  colabCompotxt:{
    fontSize:35,
    color:"#000000",
    fontWeight:"bold"
  },
  parentdiv: {
    height: "100%",
    backgroundColor: "#FFFFFF",
    // flex:1,
    // alignItems:"center",
    // justifyContent:"center",
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
  aboutme: {
    backgroundColor: "#68bce4",
    borderRadius:30,
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30,
    // backgroundColor:"#000000",
  },
  colabme: {
    backgroundColor: "#474747",
    borderRadius: 15,
    marginBottom:10,
    paddingLeft:15,
    // borderBottomRightRadius: 30,
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
  colabname: {
    // borderWidth:2,
    // borderColor:"#000000",
    width:"70%",
    textAlign:"center",
    color: "#FFFFFF",
    fontSize: 20,
  },
  dpContainer: {
    // borderWidth:2,
    // borderColor:"#000000",
    width: 80,
    marginLeft: 5,
    marginRight: 20,
    height: 80,
  },
  compoContainer: {
    // borderWidth:2,
    // borderColor:"#000000",
    display:"flex",
    flexDirection:"column",
    width: 80,
    marginLeft: 5,
    marginBottom:5,
    marginRight: 20,
    height: 80,
  },
  compoContainer2: {
    // borderWidth:2,
    // borderColor:"#000000",
    display:"flex",
    flexDirection:"column",
    width: 80,
    marginLeft: -40,
    // marginRight: 20,
    height: 80,
  },
  dp: {
    width: "100%",
    height: "100%",
    borderRadius: 200,
  },
  Lmore:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    width:"100%"
  },
  btn:{
    backgroundColor:"#000000",
    color:"#FFFFFF",
    width:150,
    textAlign:"center",
    borderRadius:30,
    padding:10
  }
});

export default Project;
