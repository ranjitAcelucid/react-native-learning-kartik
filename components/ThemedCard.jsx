import { StyleSheet, View, useColorScheme } from 'react-native'

import { colors } from '../constants/colors'

const ThemedCard = ({style, ...props}) => {
    const colorScheme = useColorScheme()
    const theme = colors[colorScheme] ?? colors.light
  return (
    <View 
        style={[{backgroundColor: theme.uiBackground}, styles.card, style]}
        {...props}
    />
  )
}

export default ThemedCard

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        padding: 20
    }
})