import { StyleSheet, Text, View,Button } from 'react-native'
import React,{useState} from 'react'

export default function ColorChange({color,onIncrease,onDecrease}) {




  return (
    <View>
      <Text>{color}</Text>
      <Button title={`${color} increase`} onPress={()=>onIncrease()}/>
      <Button title={`${color} decrease`} onPress={()=>onDecrease()}/>
    </View>
  )
}

const styles = StyleSheet.create({})