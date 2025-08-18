import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { Link } from 'expo-router'
import {colors} from '../../constants/colors'
import { useState } from 'react'
import { useUser } from '../../hooks/useUser'

//themed components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';
import ThemedButton from '../../components/ThemedButton';
import ThemedTextInput from '../../components/ThemedTextInput';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login } = useUser()

  const handleSubmit = async () => {
    // Handle login logic here
    try {
      await login(email, password)
    } catch (error) {

    }
    // console.log('current user value:', user)
    // console.log("Login button pressed: ", email, password);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ThemedView style={styles.container}>
      
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Login to your account
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
        <Text style={{color: "#f2f2f2"}}>Login</Text>
      </ThemedButton>

      {/* <Pressable 
        onPress={handleSubmit}
        style={({pressed}) => [styles.btn, pressed && styles.pressed]}
      >
        <Text style={{ color: '#f2f2f2'}}>Login</Text>
      </Pressable> */}

      <Spacer height={100} />
      <Link href="/register">
        <ThemedText style={{ textAlign: 'center' }}>
            Register Instead    
        </ThemedText>  
      </Link>
    
    </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Login

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
    btn: {
      backgroundColor: colors.primary,
      padding: 15,
      borderRadius: 5,
    },
    pressed: {
      opacity: 0.8
    }
})