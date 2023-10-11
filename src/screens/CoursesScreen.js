import { FlatList,StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CoursesScreen() {
  const courses=[
    {name:'first',id:1},
    {name:'second',id:2},
    {name:'third',id:3},
  ];

  return (
    <FlatList data={courses}
  keyExtractor={(item)=>item.id}
  renderItem={({item})=>{
    return <Text style={styles.content}>{item.name}</Text>
  }}
    />
  )
}

const styles = StyleSheet.create({
  content:{
    fontSize:20,
    backgroundColor:"green",
    marginVertical:10,
    padding:20,
  },
})