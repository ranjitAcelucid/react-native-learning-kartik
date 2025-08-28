import { StyleSheet, Text, View } from 'react-native'
import { useUser } from '../../hooks/useUser'

import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'

const Profile = () => {
  const { logout, user } = useUser()

  return (
    <ThemedView style ={styles.container}>

      <ThemedText style={styles.heading} title={true}>
        {user.email} 
      </ThemedText>
      <Spacer />

        <ThemedText style={{textAlign: "center"}}>Time to Start reading some books...</ThemedText>
        <Spacer />

        <ThemedButton onPress={logout} style={styles.button}>
          <Text style={{ color: ' #f2f2f2',justifyContent: "center" }}>Logout</Text>
        </ThemedButton>

    </ThemedView>
  )
}

export default Profile

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