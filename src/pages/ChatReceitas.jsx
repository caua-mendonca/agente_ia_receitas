import { useState } from "react";
import ChatBox from "../components/ChatBox";
import { api } from "../services/api"; // Assumindo que 'api' está corretamente definido em outro lugar
import ListaMessagens from "../components/ListaMessagens";

const ChatReceitas = () => {
  const [loading, setLoading] = useState(false);
  const [mensagens, setMensagens] = useState([
    {
      id: 1,
      text: "Olá, Sou seu assistente de receitas. Como posso ajudar você hoje?",
      remetente: "bot",
    },
  ]);

  const onEnviarMensagem = async (mensagem) => {
    const NovaMensagemUsuario = {
      id: Date.now(),
      text: mensagem,
      remetente: "usuario",
    };

    setMensagens((prev) => [...prev, NovaMensagemUsuario]);
    setLoading(true);

    try {
      // Assumindo que 'api' retorna o texto da resposta diretamente
      const resposta = await api(mensagem);

      const novaMensagemBot = {
        id: Date.now(),
        text: resposta,
        remetente: "bot",
      };

      setMensagens((prev) => [...prev, novaMensagemBot]);
    } catch (error) {
      console.error(error);
      const NovaMensagemErroBot = {
        id: Date.now(),
        text: "Desculpe, ocorreu um erro ao processar sua pergunta. Tente novamente!",
        remetente: "bot",
      };

      setMensagens((prev) => [...prev, NovaMensagemErroBot]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-gray-50 to-emerald-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-emerald-500 bg-clip-text text-transparent mb-2">
            🍳 Dev Chef
          </h1>
          <p className="text-gray-600 text-lg">
            Seu assistente pessoal para receitas deliciosas
          </p>
        </header>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl h-[600px] border border-gray-100 flex flex-col">
          {/* Certifique-se de que ListaMessagens esteja esperando a prop 'mensagens' com a propriedade 'text' */}
          <ListaMessagens mensagens={mensagens} loading={loading} />
          <ChatBox onEnviarMensagem={onEnviarMensagem} desabilitado={loading} />
        </div>
      </div>
    </div>
  );
};

export default ChatReceitas;