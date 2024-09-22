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

    buttonsContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },

    button: {
        width: 100,
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: "#d67569",
        marginTop: 20
    }
})

export default styles