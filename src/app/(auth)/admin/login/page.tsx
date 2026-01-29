import LoginForm from '@/components/LoginForm'

export default function AdminLoginPage() {
  return (
    <LoginForm
      title="Login Administrador"
      redirects={{
        ADMIN: '/admin',
        STORE_OWNER: '/store',
        CUSTOMER: '/conta',
        default: '/',
      }}
    />
  )
}
