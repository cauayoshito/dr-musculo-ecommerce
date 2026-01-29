"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'

type StoreInput = {
  name: string
  slug: string
  city: string
  state: string
  isOnline: boolean
}

export default function StoreForm({
  initial,
  submitUrl,
  method,
}: {
  initial: StoreInput
  submitUrl: string
  method: 'POST' | 'PATCH'
}) {
  const [form, setForm] = useState(initial)
  const [error, setError] = useState('')
  const router = useRouter()

  const updateField = (field: keyof StoreInput, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setError('')
    const res = await fetch(submitUrl, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      setError(data.error ?? 'Não foi possível salvar a loja.')
      return
    }
    router.push('/admin/stores')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
      <div>
        <label className="block text-sm font-medium mb-1">Nome</label>
        <input
          value={form.name}
          onChange={(e) => updateField('name', e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Slug</label>
        <input
          value={form.slug}
          onChange={(e) => updateField('slug', e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Cidade</label>
          <input
            value={form.city}
            onChange={(e) => updateField('city', e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Estado</label>
          <input
            value={form.state}
            onChange={(e) => updateField('state', e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>
      </div>
      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={form.isOnline}
          onChange={(e) => updateField('isOnline', e.target.checked)}
        />
        Loja online
      </label>
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <button className="bg-primary text-white px-4 py-2 rounded">Salvar loja</button>
    </form>
  )
}
