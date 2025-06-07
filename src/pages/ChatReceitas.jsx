import { useState } from "react";
import ChatBox from "../components/ChatBox";
import { api } from "../services/api";
const ChatReceitas = () => {
  const [loading, setLoading] = useState(false);
  const [mensagens, setMensagens] = useState([
    {
      id: 1,
      text: "Olá, Sou seu assitente de receitas. Como posso ajudar você hoje?",
      remetente: "bot",
    },
  ]);

  const onEnviarMensagem = async (mensagem) => {
    const NovaMensagemUsuario = {
      id: Date.now(),
      texto: mensagem,
      remetente: "usuario",
    };

    setMensagens((prev) => [...prev, NovaMensagemUsuario]);
    setLoading(true);

    try {
      const resposta = await api(mensagem);

      const novaMensagemBot = {
        id: Date.now(),
        texto: resposta,
        remetente: "bot",
      };

      setMensagens((prev) => [...prev, novaMensagemBot]);
    } catch (error) {
      console.error(error);
      const NovaMensagemUsuario = {
        id: Date.now(),
        texto:
          "Desculpe, ocorreu um erro ao processar sua pergunta. Tente Novamente!",
        remetente: "bot",
      };

      setMensagens((prev) => [...prev, NovaMensagemUsuario]);
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
            Seu assitente pessoal para receitas deliciosas
          </p>
        </header>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl h-[600px] border border-gray-100 flex flex-col">
          <ListaMessagens mensagens={mensagens} loading={loading} />
          <ChatBox onEnviarMensagem={onEnviarMensagem} desabilitado={loading} />
        </div>
      </div>
    </div>
  );
};

export default ChatReceitas;
