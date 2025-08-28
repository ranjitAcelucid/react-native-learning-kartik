import { StyleSheet, FlatList, Pressable } from 'react-native'
import { useBooks } from '../../hooks/useBooks'
import { colors } from '../../constants/colors'
import { useRouter } from 'expo-router'

import Spacer from '../../components/Spacer'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedCard from '../../components/ThemedCard'

// /books/12345

const Books = () => {
  const { books } = useBooks()
  const router = useRouter()

  return (
    <ThemedView style ={styles.container} safe = {true}>

      <Spacer />
      <ThemedText style={styles.heading} title={true}>
        Your Reading List
      </ThemedText>

      {/* <Spacer /> */}
      <FlatList 
        data={books}
        keyExtractor={(item) => item.$id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push(`/books/${item.$id}`)}>
            <ThemedCard style={styles.card}>
              <ThemedText style={styles.title}>Title : {item.title}</ThemedText>
              <ThemedText>written by : {item.author}</ThemedText>
              {/* <ThemedText>Description : {item.description}</ThemedText> */}
            </ThemedCard>
          </Pressable>
        )}
      />

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
    },
    list: {
      marginTop: 40
    },
    card: {
      width: '90%',
      marginHorizontal: '5%',
      marginVertical: 10,
      padding: 10,
      paddingLeft: 14,
      borderLeftColor: colors.primary,
      borderLeftWidth: 4,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 3
    }
})