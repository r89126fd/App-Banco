import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Menu from '../pantallas/MenuPrincipal'
import Inicio from '../pantallas/Inicio'
import Transferencias from '../pantallas/Transferencias'
import Historial from '../pantallas/Historial'

const Stack = createNativeStackNavigator()

export default function Navegacion() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ title: 'Banco App' }}
        />
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Transferencias" component={Transferencias} />
        <Stack.Screen name="Historial" component={Historial} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
