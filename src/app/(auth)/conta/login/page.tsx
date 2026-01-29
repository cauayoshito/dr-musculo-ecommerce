import LoginForm from '@/components/LoginForm'

export default function AccountLoginPage() {
  return (
    <LoginForm
      title="Minha conta"
      redirects={{
        ADMIN: '/admin',
        STORE_OWNER: '/store',
        CUSTOMER: '/conta',
        default: '/',
      }}
    />
  )
}
