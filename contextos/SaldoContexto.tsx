import { createContext, useContext, useState } from 'react'

type Movimiento = {
  id: string
  descripcion: string
}

type Datos = {
  saldo: number
  transacciones: Movimiento[]
  depositar: () => void
  transferir: (cantidad: number, texto: string) => boolean
}

const Caja = createContext<Datos | null>(null)

export const ProveedorSaldo = ({ children }: { children: any }) => {
  const [saldo, cambiarSaldo] = useState(10000)
  const [transacciones, guardarTrans] = useState<Movimiento[]>([])

  const depositar = () => {
    cambiarSaldo(saldo + 500)
    nuevoMovimiento('Depósito de L.500')
  }

  const transferir = (cantidad: number, texto: string): boolean => {
    if (cantidad > saldo) return false

    cambiarSaldo(saldo - cantidad)
    nuevoMovimiento(texto)
    return true
  }

  const nuevoMovimiento = (texto: string) => {
    const nuevo = { id: Date.now().toString(), descripcion: texto }
    guardarTrans((prev) => [nuevo, ...prev].slice(0, 5))
  }

  return (
    <Caja.Provider value={{ saldo, transacciones, depositar, transferir }}>
      {children}
    </Caja.Provider>
  )
}

export const usarSaldo = () => {
  const valor = useContext(Caja)
  if (!valor) throw new Error('Fuera del proveedor de saldo')
  return valor
}
