import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import AlteracaoCadastroScreen from './screens/AlteracaoCadastro';
import CadastroScreen from "./screens/Cadastro";
import CadastroContatosScreen from './screens/CadastroContatos';
import ListaScreen from './screens/ListaContatos';
import LoginScreen from './screens/Login';



const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Lista" component={ListaScreen} options={{ headerShown: false }} />
                <Stack.Screen name="CadastroContatos" component={CadastroContatosScreen} options={{ headerShown: false }} />
                <Stack.Screen name="AlteracaoCadastro" component={AlteracaoCadastroScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default App;