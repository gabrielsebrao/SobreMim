import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TelaInicial from './tela inicial'
import TelaJogos from './tela jogos'
import TelaSobreMim from './tela sobre mim'

const Stack = createNativeStackNavigator()

function App() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="Meu App" component={TelaInicial} />
                <Stack.Screen name="Jogos Preferidos" component={TelaJogos} />
                <Stack.Screen name="Sobre Mim" component={TelaSobreMim} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App