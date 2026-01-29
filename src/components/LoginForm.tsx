"use client"

import { useState } from 'react'
import { signIn, getSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

type RoleRedirects = Record<string, string>

export default function LoginForm({
  title,
  redirects,
}: {
  title: string
  redirects: RoleRedirects
}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setError('')
    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    })
    if (res?.error) {
      setError('Credenciais inválidas')
      return
    }
    const session = await getSession()
    const role = (session?.user as { role?: string } | undefined)?.role
    const destination = (role && redirects[role]) || redirects.default || '/'
    router.push(destination)
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4">
      <div className="max-w-md w-full border rounded-lg p-6 bg-white shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">{title}</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:border-primary focus:ring-primary"
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:border-primary focus:ring-primary"
          />
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded font-semibold hover:bg-primary-dark"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  )
}
