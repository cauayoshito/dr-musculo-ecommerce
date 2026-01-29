import StoreForm from '@/components/StoreForm'

export const metadata = {
  title: 'Nova loja | Dr. Músculo',
}

export default function NewStorePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Cadastrar loja</h1>
      <StoreForm
        initial={{ name: '', slug: '', city: '', state: '', isOnline: false }}
        submitUrl="/api/admin/stores"
        method="POST"
      />
    </div>
  )
}
