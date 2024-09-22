import { View, Text, Pressable, Image } from "react-native"
import styles from './styles'

const TelaInicial = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.icon}
                source={{
                    uri: 'https://bcharts.com.br/user_avatar/bcharts.com.br/gtay/288/14608_2.png',
                }}
            />
            <Text style={[{paddingHorizontal: 20}, styles.text]}>Bem vindo ao meu app, eu sou Gabriel! </Text>
            <Text style={[{paddingHorizontal: 20}, styles.text]}>Veja curiosidades sobre mim e meus jogos favoritos.</Text>
            <View style={styles.buttonsContainer}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Sobre Mim')}><Text>Sobre Mim</Text></Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Jogos Preferidos')}><Text>Jogos</Text></Pressable>
            </View>
        </View>
    )
}

export default TelaInicial