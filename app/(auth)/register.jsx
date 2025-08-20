import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { Link } from 'expo-router'
import { useState } from 'react'
import { useUser } from '../../hooks/useUser';
import {colors} from '../../constants/colors'

//themed components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput';

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const { register } = useUser()

  const handleSubmit = async () => {
    setError(null)
    // Handle login logic here
    try {
      await register(email, password)
    } catch (error) {
      setError(error.message)
    }
    // console.log("Register button pressed", email, password);
  }

  return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ThemedView style={styles.container}>
      
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Register for an account
      </ThemedText>

      <ThemedTextInput
        style={{ width: '80%', marginBottom: 20 }}
        placeholder='Email'
        keyBoardType='email-address'
        onChangeText={setEmail}
        value={email}
      />

      <ThemedTextInput
        style={{ width: '80%', marginBottom: 20 }}
        placeholder='password'
        keyBoardType='password'
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />

      <ThemedButton onPress={handleSubmit}>
        <Text style={{color: "#f2f2f2"}}>Register</Text>
      </ThemedButton>

      <Spacer />
       {error && <Text style={styles.error}>{error}</Text>}

      <Spacer height={100} />
      <Link href="/login">
        <ThemedText style={{ textAlign: 'center' }}>
            Login Instead    
        </ThemedText>  
      </Link>
    
    </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        marginBottom: 30,
    },
    error: {
        color: colors.warning,
        padding: 10,
        backgroundColor: '#f5c1c8',
        borderColor: colors.warning,
        borderWidth: 1,
        borderRadius: 6,
        marginHorizontal: 10,
      }
})