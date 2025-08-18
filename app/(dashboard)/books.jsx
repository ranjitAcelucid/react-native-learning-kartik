import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'

const Books = () => {
  return (
    <ThemedView style ={styles.container} safe = {true}>

       <Spacer />
      <ThemedText style={styles.heading} title={true}>
        Your Reading List
      </ThemedText>
    </ThemedView>
  )
}

export default Books

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: "center",
        alignItems: "stretch",
    },
    heading: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
    }
})