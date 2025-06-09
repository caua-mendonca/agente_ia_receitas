import React from "react"; // Sempre bom importar React

const Mensagem = ({ mensagem }) => {
  const isBot = mensagem.remetente === "bot";
  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
      {/* Esta é a DIV que representa o balão de mensagem */}
      <div
        className={`max-w-xs lg:max-w-md px-5 py-4 rounded-2xl shadow-2xl hover:shadow-xl cursor-pointer
                ${
                  isBot
                    ? "bg-gray-50 text-gray-800 rounded-bl-none border border-gray-300"
                    : "bg-gradient-to-r from-purple-300 to-emerald-400 text-white rounded-br-none border border-gray-800"
                }
                `}
      >
        {/* O TEXTO DA MENSAGEM TEM QUE ESTAR AQUI DENTRO DESTA DIV! */}
        <p className="text-sm whitespace-pre-line">{mensagem.text}</p>
      </div>
    </div>
  );
};

export default Mensagem;