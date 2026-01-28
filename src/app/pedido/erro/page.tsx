export default function PedidoErro() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">Pagamento não concluído</h1>
      <p className="mb-6">Houve um problema ao processar seu pagamento. Tente novamente ou escolha outra forma de pagamento.</p>
      <a href="/checkout" className="bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-primary-dark">
        Voltar ao checkout
      </a>
    </div>
  )
}