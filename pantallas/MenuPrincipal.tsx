import * as ReactNative from 'react-native'
import { useNavigation as obtenerRuta } from '@react-navigation/native'

export default function PantallaMenu() {
  const direccionar = obtenerRuta<any>()

  const menu = [
    ['Inicio ', 'Inicio'],
    ['Transferencias', 'Transferencias'],
    ['Resumen de Movimientos', 'Historial'],
  ]

  return (
    <ReactNative.View style={{ paddingHorizontal: 20, paddingTop: 25 }}>
      <ReactNative.Text style={{ fontSize: 22, marginBottom: 18 }}>
        Bienvenido al panel
      </ReactNative.Text>

      <ReactNative.Text style={{ marginBottom: 14 }}>
        Elige una de las siguientes secciones:
      </ReactNative.Text>

      {menu.map(([nombre, ruta]) => (
        <ReactNative.View key={ruta} style={{ marginBottom: 12 }}>
          <ReactNative.Button title={nombre} onPress={() => direccionar.navigate(ruta)} />
        </ReactNative.View>
      ))}
    </ReactNative.View>
  )
}
