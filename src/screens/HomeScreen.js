import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems:"center", justifyContent:"center"}}>
<Text>Home Screen</Text>
<Button title="Courses"
onPress={()=>navigation.navigate("Courses")}
/>
<Button title="Courses Information"
onPress={()=>navigation.navigate("Courses Information")}
/>
<Button title="Counter"
onPress={()=>navigation.navigate("Counter")}
/>
<Button title="Box"
onPress={()=>navigation.navigate("Box")}
/>
<Button title="Color Change Screen"
onPress={()=>navigation.navigate("Color Change Screen")}
/>
</View>
  );
}

const styles = StyleSheet.create({
   
})