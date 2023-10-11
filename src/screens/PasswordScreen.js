import { StyleSheet, Text, View,TextInput } from 'react-native'
import React,{useState} from 'react'

export default function PasswordScreen() {

    const [password, setPassword] = useState('')

  return (
    <View style={styles.main}>
      <Text>Put your password</Text>
      <TextInput style={styles.input} 
      autoCapitalize='none'
       autoCorrect={false}
       value={password} 
       onChangeText={(newValue)=>setPassword(newValue)}
       />
       {password.length<6?
       (<Text>Password must be 6 characters</Text>)
       :null}
    </View>
  )
}

const styles = StyleSheet.create({

    main:{
        margin:10,

    },

    input:{

        borderColor:"black",
        borderWidth:1,
        paddingLeft:2,
    }



})