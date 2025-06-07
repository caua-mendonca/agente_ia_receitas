# 🥘 Agente IA Receitas

Bem-vindo ao **Agente IA Receitas**! Seu novo assistente culinário pessoal, feito sob medida para quem está dando os primeiros passos na cozinha ou para quem quer explorar novas ideias de pratos de forma simples e divertida.

Este projeto utiliza a inteligência artificial para transformar um ingrediente que você tem na geladeira em uma receita deliciosa e fácil de seguir. Diga adeus à complicação e olá ao prazer de cozinhar!

## ✨ Funcionalidades

Nosso Agente IA Receitas está aqui para te ajudar com:

- **Gerar Receitas Personalizadas**: Informe um ingrediente e deixe a IA sugerir pratos incríveis e adaptados ao seu nível de cozinha.
- **Busca Inteligente de Receitas**: Precisa de algo específico? A IA pode te ajudar a encontrar a receita perfeita.
- **Organizar Suas Receitas**: Mantenha suas descobertas culinárias favoritas sempre à mão.
- **Interação Amigável**: Converse com o assistente como se estivesse batendo um papo com um amigo que entende tudo de cozinha, recebendo dicas e orientações passo a passo.

## 🚀 Como Usar

O Agente IA Receitas foi desenvolvido para ser intuitivo e fácil de usar.

### Pré-requisitos

Antes de começar, certifique-se de ter o [Node.js](https://nodejs.org/en/) e o [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js) instalados em sua máquina.

### Instalação e Execução

Siga estes passos simples para rodar a aplicação em seu ambiente local:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/caua-mendonca/agente_ia_receitas.git](https://github.com/caua-mendonca/agente_ia_receitas.git)
    ```
2.  **Entre no diretório do projeto:**
    ```bash
    cd agente_ia_receitas
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    ```
4.  **Configure sua Chave de API do ChatGPT:**
    Este projeto utiliza uma API do ChatGPT para a inteligência artificial. Você precisará de uma chave de API válida.

    - Crie um arquivo `.env` na **raiz do projeto** (na mesma pasta de `package.json`).
    - Dentro do arquivo `.env`, adicione sua chave da seguinte forma:
      ```
      VITE_API_KEY=sua_chave_aqui
      ```
      (Substitua `sua_chave_aqui` pela sua chave real da API do ChatGPT. Lembre-se de manter essa chave em segurança e **nunca a envie para repositórios públicos**.)

5.  **Inicie a aplicação:**

    ```bash
    npm run dev
    ```

    Após executar este comando, a aplicação estará disponível no seu navegador, geralmente em `http://localhost:5173` (ou outra porta indicada no terminal).

## 💻 Tecnologias Utilizadas

- **Frontend:** React (com Vite)
- **Backend:** Node.js (para integração com a API)
- **Inteligência Artificial:** API do ChatGPT

## 🤝 Contribuição

Se você quiser contribuir para melhorar o Agente IA Receitas, sinta-se à vontade para:

- Abrir **issues** para relatar bugs ou sugerir novas funcionalidades.
- Enviar **pull requests** com melhorias de código ou novas features.

Toda ajuda é bem-vinda para tornar a culinária ainda mais acessível!

