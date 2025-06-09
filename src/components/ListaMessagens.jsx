import Mensagem from "./Mensagem"; // Assumindo que este componente existe e lida com a exibição da mensagem
import { useRef, useEffect } from "react";

const ListaMessagens = ({ mensagens, loading }) => {
  const mensagemRef = useRef();

  const scrollBaixo = () => {
    // Apenas rola se a ref existir e o elemento estiver visível
    if (mensagemRef.current) {
      mensagemRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollBaixo();
  }, [mensagens, loading]); // Adicionado 'loading' às dependências para garantir a rolagem após as mudanças de estado de carregamento

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {mensagens.map((mensagem) => {
        return <Mensagem key={mensagem.id} mensagem={mensagem} />;
      })}

      {loading && (
        <div className="flex justify-start">
          <div className="bg-gray-50 rounded-2xl rounded-bl-none shadow-md border-gray-200 p-3"> {/* Erro de digitação corrigido e preenchimento adicionado */}
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse delay-100"></div>
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        </div>
      )}

      {/* Esta div é o alvo para a rolagem */}
      <div ref={mensagemRef}></div>
    </div>
  );
};

export default ListaMessagens;