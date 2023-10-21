import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
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

      {/*  */}
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
            <Text style={{ fontSize: 20 }}>@Blinky_aka_destroyer</Text>
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
          <Text style={styles.myself}>
            Hi I am the Designer Guy, I barely passed my finals, but hey! at
            least I have been selected for prestigious hackathons like
            hack-o-octo.
          </Text>
        </View>
      </View>

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
    marginTop: -37,
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
    fontSize: 18,
    padding: 13,
    textAlign: "left",
    width: 280,
    height: 180,
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
