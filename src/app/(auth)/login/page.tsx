import LoginForm from '@/components/LoginForm'

export default function LoginPage() {
  return (
    <LoginForm
      title="Entrar"
      redirects={{
        ADMIN: '/admin',
        STORE_OWNER: '/store',
        CUSTOMER: '/conta',
        default: '/',
      }}
    />
  )
}
