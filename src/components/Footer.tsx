export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 mt-8">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-2">Dr. Músculo</h3>
          <p className="text-sm">
            Sua loja de suplementos, acessórios e roupas fitness. Produtos selecionados para
            turbinar sua performance.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Categorias</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="/suplementos" className="hover:text-white">Suplementos</a></li>
            <li><a href="/acessorios" className="hover:text-white">Acessórios</a></li>
            <li><a href="/roupas" className="hover:text-white">Roupas</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contato</h4>
          <p className="text-sm">Email: contato@drmusculo.com</p>
          <p className="text-sm">Telefone: (71) 99999‑9999</p>
          <p className="text-sm">Endereço: Salvador – BA</p>
        </div>
      </div>
      <div className="bg-gray-900 text-gray-400 text-center py-3 text-xs">
        &copy; {new Date().getFullYear()} Dr. Músculo. Todos os direitos reservados.
      </div>
    </footer>
  )
}