import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { useEffect } from "react";
import LinearGradient from "react-native-linear-gradient";
import Bottomnavigation from "./Bottomnavigation";

const Mainpage = ({navigation}) => {
  return (
    <View style={{position:"relative"}}>
       <View style={{backgroundColor:"#F2FDFF"}}>
        {/* main logo */}
        <View style={styles.mainLogocontainer}>
          <Image
            style={styles.mainlogo}
            source={require("../assets/mainlogo.png")}
          />
        </View>

        {/* dp and username */}
        <View style={styles.dpName}>
          {/* image */}
          <View style={styles.dpContainer}>
            <Image
              style={styles.dp}
              source={require("../assets/dp2.webp")}
            />
          </View>
          {/* username */}
          <View>
            <Text style={styles.username}>User Blinky</Text>
          </View>
        </View>

        {/* feeds of all */}
        <View style={styles.feedline1}>
          <TouchableOpacity style={styles.registerBtn}>
            <Text style={styles.registerText}>Common Feed</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.feedline2}>
          <TouchableOpacity style={styles.registerBtn}>
            <Text style={styles.registerText}>Developer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerBtn}>
            <Text style={styles.registerText}>Designer</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/*  post  */}
      <ScrollView style={styles.scrollers} contentContainerStyle>
        <View style={styles.postContainer}>
          {/* image and username all */}
          <View style={styles.frstrow}>
            <View style={styles.dpContainer}>
              <Image
                style={styles.dp}
                source={require("../assets/dp2.webp")}
              />
            </View>

            <View>
              <Text style={{ color: "#FFFFFF" }}>Designer1</Text>
              <Text style={{ color: "#FFFFFF" }}>
                #Designing #WebDesign #Prototyping
              </Text>
            </View>
          </View>

          {/* Image */}
          <View style={styles.postImg}>
            <Image
              style={styles.posterImg}
              source={require("../assets/fighter.png")}
            />
          </View>
        </View>
        <View style={styles.postContainer}>
          {/* image and username all */}
          <View style={styles.frstrow}>
            <View style={styles.dpContainer}>
              <Image
                style={styles.dp}
                source={require("../assets/dp2.webp")}
              />
            </View>

            <View>
              <Text style={{ color: "#FFFFFF" }}>Designer1</Text>
              <Text style={{ color: "#FFFFFF" }}>
                #Designing #WebDesign #Prototyping
              </Text>
            </View>
          </View>

          {/* Image */}
          <View style={styles.postImg}>
            <Image
              style={styles.posterImg}
              source={require("../assets/fighter.png")}
            />
          </View>
        </View>
        <View style={styles.postContainer}>
          {/* image and username all */}
          <View style={styles.frstrow}>
            <View style={styles.dpContainer}>
              <Image
                style={styles.dp}
                source={require("../assets/dp2.webp")}
              />
            </View>

            <View>
              <Text style={{ color: "#FFFFFF" }}>Designer1</Text>
              <Text style={{ color: "#FFFFFF" }}>
                #Designing #WebDesign #Prototyping
              </Text>
            </View>
          </View>

          {/* Image */}
          <View style={styles.postImg}>
            <Image
              style={styles.posterImg}
              source={require("../assets/fighter.png")}
            />
          </View>
        </View>
      </ScrollView>

        {/*  bottom nav  */}
        <View style={styles.navbar}>
        <Bottomnavigation navigator={navigation}/>
        </View>


     </View>
  );
};
const styles = StyleSheet.create({

  postContainer: {
    padding: 5,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    margin: 1,
    borderRadius:20,
    marginBottom:10,
    backgroundColor: "#646965",
  },
  frstrow: {
    flex:1,
    flexDirection: "row",
  },
  postImg: {
    display: "flex",
    width: "100%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 420,
  },
  
  posterImg: {
    borderRadius: 20,
    padding:15,
    width: "90%",
    // borderWidth:2,
    // borderColor:"#FF00FF",
    height: "90%",
  },

  mainLogocontainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 55,
    width: "100%",
    height: 65,
    // shadowColor:"#000000",
    // shadowOpacity:1,
    // shadowRadius:1
  },
  feedline1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  feedline2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop:-10
  },
  scrollers:{
    // borderWidth:2,
    height:610,
    // borderColor:"#000000"
  },
  registerBtn: {
    width: "40%",
    backgroundColor: "#000000",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 18,
  },
  registerText: {
    color: "white",
  },
  navbar:{
    position:"absolute",
    bottom:0,
    right:0,
    left:0,
    backgroundColor:"#FFFFFF",
    height:100,
    width:"100vw"
 },
  dpName: {
    width: "100%",
    alignItems: "center",
    // height:"100%",
    display: "flex",
    flexDirection: "row",
    gap: 3,
  },
  username: {
    fontSize: 30,
  },
  dpContainer: {
    // borderWidth:2,
    // borderColor:"#000000",
    width: 50,
    marginLeft: 5,
    marginRight: 20,
    height: 50,
  },
  dp: {
    width: "100%",
    height: "100%",
    borderRadius: 200,
  },
  mainlogo: {
    display: "flex",
    justifyContent: "flex-start",
    width: 105,
    height: 65,
  },
});

export default Mainpage;
