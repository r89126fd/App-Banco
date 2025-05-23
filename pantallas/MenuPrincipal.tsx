import { View, Button, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function MenuPrincipal() {
  const ir = useNavigation<any>()

  return (
    <View style={{ padding: 22 }}>
      <Text style={{ fontSize: 23, marginBottom: 20 }}>Hola</Text>

      <Text style={{ marginBottom: 12 }}>
        Menu:
      </Text>

      <View style={{ marginBottom: 10 }}>
        <Button title="Ver Saldo e Inicio" onPress={() => ir.navigate('Inicio')} />
      </View>

      <View style={{ marginBottom: 10 }}>
        <Button title="Ir a Transferencias" onPress={() => ir.navigate('Transferencias')} />
      </View>

      <View style={{ marginBottom: 10 }}>
        <Button title="Ver Movimientos" onPress={() => ir.navigate('Historial')} />
      </View>
    </View>
  )
}
