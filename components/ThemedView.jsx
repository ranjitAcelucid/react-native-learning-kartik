import { SafeAreaView, View, useColorScheme } from 'react-native'
import { colors } from '../constants/colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const ThemedView = ({style, safe = false, ...props}) => {
  const colorScheme = useColorScheme()
  const theme = colors[colorScheme] ?? colors.light

  if(!safe) return (
    <SafeAreaView
      style={[{backgroundColor:theme.background,},style]}
      {...props}
    />  
  )

  const insets = useSafeAreaInsets()

  return (
    <SafeAreaView
      style={[{
        backgroundColor:theme.background,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      },style]}
      {...props}
    />  
  )
}

export default ThemedView