import { View, Text, ScrollView } from 'react-native'
import { usarSaldo } from '../contextos/SaldoContexto'

export default function Historial() {
  const datos = usarSaldo()
  const total = datos.transacciones.length

  // Pensé mostrar esto con FlatList pero es poca info así que ScrollView
  return (
    <ScrollView style={{ padding: 18 }}>
      <Text style={{ fontSize: 18, fontWeight: '700' }}>
        Historial (total: {total})
      </Text>

      {total === 0 && (
        <Text style={{ marginTop: 15 }}>Uff... No hay movimientos todavía 😴</Text>
      )}

      {datos.transacciones.map((item, index) => (
        <Text
          key={item.id}
          style={{ marginTop: 8 }}
        >
          {index + 1}) {item.descripcion}
        </Text>
      ))}
    </ScrollView>
  )
}
