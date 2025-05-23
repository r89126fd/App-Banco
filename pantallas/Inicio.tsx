import { View, Text, Button, FlatList } from 'react-native'
import { usarSaldo } from '../contextos/SaldoContexto'

export default function Inicio() {
  const cosas = usarSaldo()

  const mostrarItem = ({ item }: any) => {
    return (
      <Text style={{ paddingVertical: 3 }}>• {item.descripcion}</Text>
    )
  }

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: '600' }}>bienvenido</Text>
      <Text style={{ marginTop: 10, marginBottom: 15 }}>
        Tienes L.{cosas.saldo} 
      </Text>

      {/* Este botón es para hacer pruebas de depósito */}
      <Button title="Sumar 500 Lempiras" onPress={cosas.depositar} />

      <Text style={{ marginTop: 25, marginBottom: 5, fontWeight: 'bold' }}>
        Últimas movidas:
      </Text>

      <FlatList
        data={cosas.transacciones}
        renderItem={mostrarItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}