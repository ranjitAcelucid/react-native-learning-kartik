import { Pressable, StyleSheet } from "react-native"
import { colors } from "../constants/colors"

function ThemedButton({ style, ...props }) {

    return (
        <Pressable
            style={({ pressed }) => [styles.btn, pressed && styles.pressed,
            style]}
            {...props}
        />
    )
}

export default ThemedButton

const styles = StyleSheet.create({
    btn: {
        backgroundColor: colors.primary,
        padding: 18,
        borderRadius: 6,
        marginVertical: 10,
    },
    pressed: {
        opacity: 0.5,
    },
})