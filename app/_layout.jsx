import { Stack, Tabs } from 'expo-router'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { colors } from '../constants/colors'
import { StatusBar } from 'expo-status-bar'
import { UserProvider } from '../contexts/UserContext'

const RootLayout = () => {
    const colorScheme = useColorScheme()
    const theme = colors[colorScheme] ?? colors.light

  return (
    <UserProvider>
    <StatusBar value="auto"/>
      <Stack screenOptions={{
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: theme.title
      }}>
        <Stack.Screen name="index" options={{title: 'Home', headerTitleAlign: 'center'}} />
        <Stack.Screen name="(auth)" options={{headerShown: false}} />
        <Stack.Screen name="(dashboard)" options={{headerShown: false, headerTitleAlign: 'center'}} />
      </Stack> 
    </UserProvider>
  )
}

export default RootLayout

