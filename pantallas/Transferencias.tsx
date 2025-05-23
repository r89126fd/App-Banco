import { useState } from 'react'
import { View, TextInput, Button, Alert } from 'react-native'
import { usarSaldo } from '../contextos/SaldoContexto'

export default function Transferencias() {
  const saldoCtx = usarSaldo()
  const [cuentaDestino, cambiarCuenta] = useState('')
  const [dinero, cambiarMonto] = useState('')

  const enviarTransferencia = () => {
    const montoFinal = parseFloat(dinero)

    if (!montoFinal || montoFinal <= 0) {
      Alert.alert("Coloque un valor válido")
      return;
    }

    if (montoFinal % 100 !== 0) {
      Alert.alert("El valor tiene que ser múltiplo de L.100")
      return;
    }

    const mensaje = `Transferencia a ${cuentaDestino} de L.${montoFinal}`
    const exito = saldoCtx.transferir(montoFinal, mensaje)

    if (exito) {
      Alert.alert("Se mando el dinero.")
      cambiarCuenta('')
      cambiarMonto('')
    } else {
      Alert.alert("Saldo insuficiente ")
    }
  }

  return (
    <View style={{ padding: 22 }}>
      <TextInput
        value={cuentaDestino}
        placeholder="Escriba cuenta destino"
        onChangeText={cambiarCuenta}
        style={{ marginBottom: 12, borderBottomWidth: 1, borderColor: '#aaa' }}
      />
      <TextInput
        value={dinero}
        placeholder="Monto (de 100 en 100)"
        keyboardType="numeric"
        onChangeText={cambiarMonto}
        style={{ marginBottom: 12, borderBottomWidth: 1, borderColor: '#aaa' }}
      />
      <Button title="Mandar" onPress={enviarTransferencia} />
    </View>
  )
}
