import { Tabs } from "expo-router"
import { colors } from "../../constants/colors"
import { useColorScheme } from "react-native"
import { Ionicons } from "@expo/vector-icons"


const _layout = () => {
  const colorScheme = useColorScheme()
  const theme = colors[colorScheme] ?? colors.light

  return (
    <Tabs 
        screenOptions={{ headerShown: false, tabBarStyle: {
            backgroundColor: theme.navBackground,
            paddingTop: 10,
            height: 80,
        },
        tabBarActiveTintColor: theme.iconColorFocused,
        tabBarInactiveTintColor: theme.iconColor,
      }}
      >
        <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon: ({focused}) => (
            <Ionicons 
                size={24}
                name={focused? 'person' : "person-outline"}
                color={focused ? theme.iconColorFocused : theme.iconColor}
            />
        )}} />
        <Tabs.Screen name="books" options={{ title: 'Books', tabBarIcon: ({focused}) => (
            <Ionicons 
                size={24}
                name={focused? 'book' : "book-outline"}
                color={focused ? theme.iconColorFocused : theme.iconColor}
            />
        )}} />
        <Tabs.Screen name="create" options={{ title: 'Create', tabBarIcon: ({focused}) => (
            <Ionicons 
                size={24}
                name={focused? 'create' : "create-outline"}
                color={focused ? theme.iconColorFocused : theme.iconColor}
            />
        )}} />
    </Tabs>
  )
}

export default _layout