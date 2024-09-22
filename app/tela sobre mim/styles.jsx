import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    icon: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginBottom: 20
    },

    text: {
        textAlign: "center"
    },

    decoratedText: {
        fontWeight: "bold",
        color: "#69AED8"
    }
})

export default styles