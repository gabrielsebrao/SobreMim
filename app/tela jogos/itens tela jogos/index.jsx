import { View, Text, Image } from "react-native"
import styles from "./styles"

const ItensTelaJogos = ({ nome, imagem }) => {
    return (
        <View style={styles.container}>
            <Image
                style={{ width: "90%", height: "80%", resizeMode: 'contain' }}
                source={{
                    uri: imagem,
                }}
            />
            <Text style={styles.nome}>{nome}</Text>
        </View>
    )
}

export default ItensTelaJogos