Catálogo Interativo de Livros

Descrição do Projeto

Aplicação web interativa em React que consome a API pública Open Library para exibir livros.
Funcionalidades principais:

*Listagem de livros com cards responsivos
*Campo de busca para filtrar por título ou autor
*Modo claro/escuro persistente
*Botão “Ver detalhes” que abre a página oficial do livro na Open Library
*Feedback de carregamento com spinner animado durante a busca
*Layout responsivo e estilizado com Tailwind CSS

Tecnologias Utilizadas

*React 18
*Tailwind CSS
*Vite (para criar o projeto React)
*Open Library API
*Lucide React (ícones)

Funcionalidades Detalhadas

1. Listagem de Livros

*Cards com título, autor, ano de publicação e capa do livro
*Botão “Ver detalhes” que abre a página oficial do livro no Open Library

2. Busca

*Campo de pesquisa para filtrar livros por título ou autor
*Mensagem “Procurando livros...” com spinner animado enquanto carrega

3. Modo Claro/Escuro

*Alterna com o botão no header
*Preferência do usuário salva no localStorage
*Cores e fundo adaptam para cada tema

4. Layout Responsivo

Grid adaptativo:

*2 cards em celular
*3 em tablet
*4-5 em desktop
*Cards centralizados e espaçamento consistente

5. Livros Aleatórios na Inicialização

*Busca automática por termos aleatórios ao abrir a página

Instalação e Execução

1. Clonar o repositório

git clone <link-do-repositorio>
cd catalogo-livros

2. Instalar dependências

npm install
npm install lucide-react

3. Rodar a aplicação

npm run dev

4. Abrir no navegador

Acesse http://localhost:5173 (ou URL fornecida pelo terminal)


API Utilizada

*Open Library API
*Endpoint principal: https://openlibrary.org/search.json?q=<termo>
*Retorna: título, autor, ano de publicação, capa e key do livro# AP2
