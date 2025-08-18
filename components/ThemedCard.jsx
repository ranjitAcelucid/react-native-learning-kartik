import { StyleSheet, View, useColorScheme } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'

const ThemedCard = ({style, ...props}) => {
    const colorScheme = useColorScheme()
    const theme = colors[colorScheme] ?? colors.light
  return (
    <View 
        style={[{backgroundColor: theme.uibackground}, styles.card]}
        {...props}
    />
  )
}

export default ThemedCard

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        padding: 20
    }
})