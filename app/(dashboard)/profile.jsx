import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'

const Profile = () => {
  return (
    <ThemedView style ={styles.container}>

      <ThemedText style={styles.heading} title={true}>
        Your Email
      </ThemedText>
      <Spacer />

        <ThemedText style={{textAlign: "center"}}>Time to Start reading some books...</ThemedText>
        <Spacer />

    </ThemedView>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
    },
    heading: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
    }
})