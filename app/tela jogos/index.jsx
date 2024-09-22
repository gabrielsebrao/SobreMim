import { View, FlatList, Text, Image } from "react-native"
import ItensTelaJogos from "./itens tela jogos"
import styles from './styles'

const PROJETOS = [
    { nome: "Minecraft", imagem: "https://t2.tudocdn.net/606269?w=1920&h=1080" },
    { nome: "League of Legends", imagem: "https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-80471666c140f790f28dff68d72c384b" },
    { nome: "Life is Strange", imagem: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70070000013661/4c53d272b470ebbf50fc54f2e4e785e8babb9f8a7f3b6af1e154aa8b58de339b" },
    { nome: "Omori", imagem: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/o/omori-switch/hero" },
    { nome: "Undertale", imagem: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000009921/44bea8c565db26c0c470a6325a47c9ea031633945cb91e4b5e1b1a39b01a2cdb" },
    { nome: "Roblox", imagem: "https://prod.docsiteassets.roblox.com/assets/misc/blog_evergreen.png" }
]

const TelaJogos = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.icon}
                source={{
                    uri: 'https://i.pinimg.com/564x/e1/19/e0/e119e05a7464711a0ff79ef6fda87c19.jpg',
                }}
            />
            <Text style={styles.decoratedText}>Meus jogos favoritos</Text>
            <FlatList
                data={PROJETOS}
                renderItem={({ item }) => <ItensTelaJogos imagem={item.imagem} nome={item.nome} />}
                style={styles.lista}
            />
        </View>
    )
}

export default TelaJogos