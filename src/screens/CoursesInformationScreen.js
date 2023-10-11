import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Information from '../../components/Information'

export default function CoursesInformationScreen() {
  return (
    <ScrollView>
     <Information
     title="first"
     imageSource={require('../../assets/1.png')}
     desc="first one"
     />
    
     <Information 
        title="second"
        imageSource={require('../../assets/2.png')}
        desc="second one"
    />
     <Information 
        title="third"
        imageSource={require('../../assets/3.png')}
        desc="third one"
     />
     </ScrollView>
  )
}

const styles = StyleSheet.create({})