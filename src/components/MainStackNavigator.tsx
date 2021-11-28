import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Liquidacion from '../screen/Liquidacion';
import NicaAtributo from '../screen/Nicatributos';
import HomeNica from '../screen/HomeNica';



const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Lista2" component={Liquidacion} />
        <Stack.Screen name="Login" component={HomeNica} />
        <Stack.Screen name="Lista" component={NicaAtributo}

          options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: 'skyblue',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',

            },
            
          }} />
        <Stack.Screen name="liquidacion" component={Liquidacion} />

      </Stack.Navigator>

      {/* <HomeSource /> */}

    </NavigationContainer>
  )
}

export default MainStackNavigator