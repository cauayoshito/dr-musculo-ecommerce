export default function PedidoPendente() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">Pagamento em processamento</h1>
      <p className="mb-6">Estamos aguardando a confirmação do pagamento. Você será notificado quando o status for atualizado.</p>
      <a href="/" className="bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-primary-dark">
        Voltar para a loja
      </a>
    </div>
  )
}