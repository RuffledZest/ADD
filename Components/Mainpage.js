import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

const Mainpage = () => {
  return (
    <View style={styles.container}>
      <Text>Mainpage</Text>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  }


});


export default Mainpage