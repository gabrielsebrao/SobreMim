import { Text, View, Image } from "react-native"
import styles from './styles'

const TelaSobreMim = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.icon}
                source={{
                    uri: 'https://i.pinimg.com/564x/1d/e4/ef/1de4efd3857649e6303c42f54af7edd9.jpg',
                }}
            />
            <Text style={[{paddingHorizontal: 20}, styles.text]}> <Text style={styles.decoratedText}>Nome:</Text> Gabriel de Oliveira Sebrão</Text>
            <Text style={[{paddingHorizontal: 20}, styles.text]}> <Text style={styles.decoratedText}>Apelido:</Text> Gab</Text>
            <Text style={[{paddingHorizontal: 20}, styles.text]}> <Text style={styles.decoratedText}>Idade:</Text> 17 anos</Text>
            <Text style={[{padding: 20}, styles.text]}> <Text style={styles.decoratedText}>Gostos:</Text> ouvir música, ler, assisitr a videos e lives, jogar com os amigos...</Text>
            <Text style={[{paddingHorizontal: 20}, styles.text]}> <Text style={styles.decoratedText}>Habilidades:</Text> Android Studio, Kotlin, C++, Java, Python, Inglês Avançado</Text>
        </View>
    )
}

export default TelaSobreMim