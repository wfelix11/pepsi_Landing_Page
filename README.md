# Pepsi Landing Page

![Pepsi Landing Page Screenshot](https://github.com/wfelix11/pepsi_Landing_Page/blob/main/public/preview.png?raw=true)

## Descrição
Bem-vindo à **Pepsi Landing Page**, uma página inicial moderna e responsiva desenvolvida para exibir a marca Pepsi de forma dinâmica e atraente. Este projeto é uma aplicação web single-page que permite aos usuários interagir com diferentes variações de latas de Pepsi, alterando a cor de fundo da página e exibindo uma experiência visual envolvente. A página é totalmente otimizada para desktop e dispositivos móveis, com um design limpo e intuitivo usando Tailwind CSS.

## Demonstração
Abaixo está uma captura de tela da página principal (desktop):

![Prévia da Página](https://github.com/wfelix11/pepsi_Landing_Page/blob/main/public/preview.png?raw=true)

Para visualizar a página ao vivo, acesse: [Link para Deploy, se disponível] (adicione se houver um deploy, como Vercel ou Netlify).

## Tecnologias Utilizadas
- **Next.js 15**: Framework React para SSR e SSG, usado para criar a estrutura da aplicação.
- **Tailwind CSS**: Biblioteca de estilização utilitária para um design responsivo e rápido.
- **React**: Biblioteca para construir interfaces de usuário dinâmicas e reativas.
- **Git e GitHub**: Para versionamento e hospedagem do código.

## Pré-requisitos
Antes de começar, certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

## Como Configurar e Rodar o Projeto

### 1. Clone o Repositório
```bash
git clone https://github.com/wfelix11/pepsi_Landing_Page.git
cd pepsi_Landing_Page
```

### 2\. Instale as Dependências

Usando npm:

```bash
npm install
```
Ou usando Yarn:

```bash
yarn install
```

### 3\. Rode o Projeto Localmente
```bash
npm run dev
```

Ou:

```bash
yarn dev
```

Acesse http://localhost:3000 no navegador para visualizar a aplicação.

Estrutura do Projeto
--------------------

O projeto está organizado da seguinte maneira:

```text
pepsi_Landing_Page/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Cabecalho.tsx
│       └── Corpo.tsx
├── public/
│   ├── logo.png
│   ├── pepsi001.png
│   ├── pepsi002.png
│   ├── pepsi003.png
│   ├── facebook.png
│   ├── twitter.png
│   └── instagram.png
├── .gitignore
├── package.json
├── README.md
└── tailwind.config.js
```

Funcionalidades
---------------

*   **Mudança de Cor Dinâmica:** Clique nas miniaturas de latas para alterar a cor de fundo da página e exibir diferentes versões da lata Pepsi.
    

*   **Design Responsivo:** A página se adapta perfeitamente a dispositivos desktop, tablets e mobile, com um menu hambúrguer em telas pequenas.
    

*   **Interatividade:** Interaja com o cabeçalho, o corpo da página e os ícones sociais fixos à direita.
    

Projeto como Estudo
-------------------

Este projeto é ideal para aprendizado em:

*   **Next.js:** Explore criação de aplicações SSR/SSG, roteamento dinâmico e otimização de imagens com .
    

*   **Tailwind CSS:** Pratique estilização responsiva com classes como flex, sm:, md:, e valores dinâmicos (ex.: bg-\[${cor}\]).
    

*   **Responsividade:** Aprenda a ajustar layouts para diferentes tamanhos de tela, usando posicionamento absoluto, z-index e media queries implícitas no Tailwind.
    

*   **Git e Versionamento:** Domine versionamento com Git, resolução de conflitos e integração com GitHub.
    

Contribuições
-------------

Sinta-se à vontade para contribuir! Siga estas etapas:

1.  Faça um fork deste repositório.
    

3.  Crie uma branch para suas alterações:
```bash
git checkout -b feature/nova-funcionalidade
``` 

5.  Commit suas mudanças:
```bash
git commit -m "Adiciona nova funcionalidade"
``` 

7.  Envie para o repositório remoto:
```bash
git push origin feature/nova-funcionalidade
```     

9.  Abra um pull request no GitHub.
    

Autor
-----

*   **Wesley Felix**
    
    *   GitHub: [@wfelix11](https://github.com/wfelix11)
        
    
    *   LinkedIn: [Wesley Felix](https://www.linkedin.com/in/wesley-felix/)
        
    

Licença
-------

Este projeto está licenciado sob a [MIT License](LICENSE). Veja o arquivo [LICENSE](LICENSE) para mais detalhes.