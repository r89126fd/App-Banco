import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import MenuPrincipal from '../pantallas/MenuPrincipal'
import Inicio from '../pantallas/Inicio'
import Transferencias from '../pantallas/Transferencias'
import Historial from '../pantallas/Historial'

const Navegador = createNativeStackNavigator()

export default function NavegacionPrincipal() {
  return (
    <NavigationContainer>
      <Navegador.Navigator initialRouteName="MenuPrincipal">
        <Navegador.Screen name="MenuPrincipal" component={MenuPrincipal} options={{ title: 'Banco App' }} />
        <Navegador.Screen name="Inicio" component={Inicio} />
        <Navegador.Screen name="Transferencias" component={Transferencias} />
        <Navegador.Screen name="Historial" component={Historial} />
      </Navegador.Navigator>
    </NavigationContainer>
  )
}
