import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Liquidacion from '../screen/Liquidacion';
import NicaAtributo from '../screen/Nicatributos';
import HomeNica from '../screen/HomeNica';
import List from '../screen/List';
import Menu from '../screen/Menu';
import Listkey from '../screen/Listkey';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Lista2" component={Liquidacion} />
        <Stack.Screen name="Login" component={HomeNica} />
        <Stack.Screen name="Clientes" component={List} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Listkey" component={Listkey} />
        <Stack.Screen name="Lista" component={NicaAtributo}
          options={{
            title: 'Bienvenido',
            headerStyle: {
            backgroundColor: '#60C8F0',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
          }} />
        <Stack.Screen name="liquidacion" component={Liquidacion} />

      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default MainStackNavigator