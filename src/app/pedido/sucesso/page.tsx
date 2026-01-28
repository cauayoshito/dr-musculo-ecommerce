export default function PedidoSucesso() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">Pedido realizado com sucesso!</h1>
      <p className="mb-6">Obrigado por comprar conosco. Em breve enviaremos a confirmação por e‑mail.</p>
      <a href="/" className="bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-primary-dark">
        Voltar para a loja
      </a>
    </div>
  )
}