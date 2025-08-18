import { StyleSheet } from "react-native"

import Spacer from "../../components/Spacer"
import ThemedView from "../../components/ThemedView"
import ThemedText from "../../components/ThemedText"

const Create = () => {
  return (
    <ThemedView style={styles.container}>
      
      <ThemedText title={true} style={styles.heading}>
        Add a new Book
      </ThemedText>
      <Spacer />

    </ThemedView>
  )
}

export default Create

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
    }
})