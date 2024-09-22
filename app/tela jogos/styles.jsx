import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    icon: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginTop: 20
    },

    decoratedText: {
        color: "#edbc55",
        fontWeight: "bold",
        marginVertical: 20
    },
    
    lista: {
        maxHeight: "95%",
        width: "90%",
        gap: 10
    }
})

export default styles