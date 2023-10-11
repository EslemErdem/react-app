import { StyleSheet, Text, View,Button } from 'react-native'
import React, {useState} from 'react'


export default function CounterScreen() {
    
    const[counter,setCounter]=useState(0);

 
    return (
    <View>
      <Button title="increase" onPress={()=>{
        setCounter(counter+1);
      }}/>
     
      <Button title="decrease" onPress={()=>{
        setCounter(counter-1);
      }}/>
      <Text>Current Count: {counter}</Text>  
    </View>
  )
}

const styles = StyleSheet.create({})