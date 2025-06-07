const Mensagem = ({ mensagem }) => {
  const isBot = mensagem.remetente === "bot";
  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-xs lg:max-w-md px-5 py-4 rounded-2xl shadow-2xl hover:shadow-xl cursor-pointer
                ${
                  isBot
                    ? "bg-gray-50 text-gray-800 rounded-bl-none border border-gray-300"
                    : "bg-gradient-to-r from-purple-300 to-emerald-400 text-white rounded-br-none border border-gray-800"
                }
                
                `}
      ></div>
      <p className="text-sm whitespace-pre-line">{mensagem.texto}</p>
    </div>
  );
};

export default Mensagem;
