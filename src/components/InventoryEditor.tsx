"use client"

import { useMemo, useState } from 'react'

type Store = { id: string; name: string }
type Variant = { id: string; name: string; option: string; product: { name: string } }
type Inventory = { storeId: string; variantId: string; stock: number }

export default function InventoryEditor({
  stores,
  variants,
  inventories,
}: {
  stores: Store[]
  variants: Variant[]
  inventories: Inventory[]
}) {
  const initialMap = useMemo(() => {
    const map: Record<string, number> = {}
    inventories.forEach((item) => {
      map[`${item.storeId}-${item.variantId}`] = item.stock
    })
    return map
  }, [inventories])
  const [values, setValues] = useState<Record<string, number>>(initialMap)
  const [status, setStatus] = useState<string | null>(null)

  const handleChange = (key: string, value: number) => {
    setValues((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmit = async () => {
    setStatus(null)
    const payload = Object.entries(values).map(([key, stock]) => {
      const [storeId, variantId] = key.split('-')
      return { storeId, variantId, stock }
    })
    const res = await fetch('/api/admin/inventory', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: payload }),
    })
    if (!res.ok) {
      setStatus('Não foi possível salvar o estoque.')
      return
    }
    setStatus('Estoque atualizado.')
  }

  return (
    <div className="space-y-4">
      <div className="overflow-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Produto</th>
              <th className="px-4 py-2 text-left">Variação</th>
              {stores.map((store) => (
                <th key={store.id} className="px-4 py-2 text-left">{store.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {variants.map((variant) => (
              <tr key={variant.id} className="border-b">
                <td className="px-4 py-2">{variant.product.name}</td>
                <td className="px-4 py-2">
                  {variant.name}: {variant.option}
                </td>
                {stores.map((store) => {
                  const key = `${store.id}-${variant.id}`
                  return (
                    <td key={key} className="px-4 py-2">
                      <input
                        type="number"
                        min={0}
                        value={values[key] ?? 0}
                        onChange={(e) => handleChange(key, Number(e.target.value))}
                        className="w-20 border rounded px-2 py-1"
                      />
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {status && <p className="text-sm text-gray-600">{status}</p>}
      <button onClick={handleSubmit} className="bg-primary text-white px-4 py-2 rounded">
        Salvar estoque
      </button>
    </div>
  )
}
