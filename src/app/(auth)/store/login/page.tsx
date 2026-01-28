import LoginForm from '@/components/LoginForm'

export default function StoreLoginPage() {
  return (
    <LoginForm
      title="Login Loja"
      redirects={{
        ADMIN: '/admin',
        STORE_OWNER: '/store',
        CUSTOMER: '/conta',
        default: '/',
      }}
    />
  )
}
