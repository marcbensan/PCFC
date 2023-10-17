import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

const Navigation = () => {
  return (
    <NavigationContainer>
    <StatusBar backgroundColor='#000000'/>
      <Text>Navigation</Text>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({
    header: {
        paddingTop: 50
    }
})