import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import Bottomnavigation from "./Bottomnavigation";
import { TouchableOpacity } from "react-native";

const Post = ({ navigation }) => {
  const homepagehandler = () => {
    navigation.naviagte("profile");
  };
  return (
    <View style={styles.parentdiv}>
        <Text>Post Page Coming soon</Text>
      {/* bottom navbar */}
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
    flex:1,
    alignItems:"center",
    justifyContent:"center",
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
  
});

export default Post;
