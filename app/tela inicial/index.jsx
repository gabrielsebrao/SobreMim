import React from "react";
import { View, Text, Pressable } from "react-native"

export default TelaInicial = ({ navigation }) => {
    return (
        <View>
            <Text>Bem vindo ao meu app</Text>
            <Text>Aqui você tem acesso aos projetos que fiz utilizando React Native, além de informações sobre mim</Text>
            <View>
                <Pressable onPress={() => navigation.navigate('Projetos')}><Text>Projetos</Text></Pressable>
                <Pressable onPress={() => navigation.navigate('Sobre Mim')}><Text>Sobre mim</Text></Pressable>
            </View>

        </View>
    )
}