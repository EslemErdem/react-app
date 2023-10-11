import { Image,StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Information({title,imageSource,desc}) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.decs}>{desc}</Text> 
      <Image style={styles.img} source={imageSource}/>
       
    </View>
  )
}

const styles = StyleSheet.create({
    img:{
        width:'100%',
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        alignItems:'center',
        paddingVertical:20,
    },
    decs:{
        fontSize:15,
        alignItems:'center',
        paddingVertical:10,}
})