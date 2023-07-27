# U-Question - Aplicação de Apoio para Webaulas ao Vivo

>U-Question é uma plataforma desenvolvida para auxiliar no compartilhamento e gerenciamento de dúvidas durante webaulas ao vivo. Ela permite que as pessoas estudantes presentes na aula possam escrever suas dúvidas, que serão respondidas após as explicações, minimizando interrupções.

## Objetivo

O objetivo principal da aplicação U-Question é facilitar a interação entre os alunos e o professor durante webaulas ao vivo, proporcionando um espaço para que os alunos possam registrar suas dúvidas de forma organizada e permitindo que o professor responda a cada uma delas no momento adequado.

## Funcionalidades

- Os alunos podem digitar seu nome e escrever suas dúvidas na aplicação.
- As dúvidas são enviadas em tempo real através da tecnologia de comunicação em tempo real Socket.io.
- O professor pode visualizar todas as dúvidas em uma lista, na ordem em que foram enviadas.
- O professor pode excluir dúvidas após respondê-las, mantendo a lista atualizada.

## Tecnologias Utilizadas

- [Socket.io](https://socket.io/): Biblioteca JavaScript que permite a comunicação em tempo real entre o cliente e o servidor, possibilitando a atualização em tempo real das dúvidas enviadas pelos alunos durante a webaula.
- [Node.js](https://nodejs.org/): Ambiente de execução JavaScript server-side, que permite a construção do servidor para tratar as conexões do Socket.io.
- [Express.js](https://expressjs.com/): Framework web Node.js que simplifica a criação de servidores e a definição de rotas, permitindo que a aplicação seja construída de forma mais rápida e organizada.

## Como Executar a Aplicação Localmente

1. Certifique-se de ter o Node.js instalado em seu sistema. Caso não tenha, você pode baixá-lo [aqui](https://nodejs.org/).
2. Clone este repositório em seu computador.
3. Acesse a pasta do projeto via terminal.
4. Instale as dependências do projeto executando o comando `npm install`.
5. Execute a aplicação com o comando `npm start`.
6. Acesse a aplicação em seu navegador através do endereço `http://localhost:3000`.

- Também é possível acessá-la por esse [link](https://brs-u-question.netlify.app/), dispensando a necessidade de clonar esse repositório.

## Sobre o Dev

[Bruno Riwerson Silva](https://www.linkedin.com/in/bruno-riwerson/) é um profissional apaixonado por tecnologia. Desenvolvedor full-stack proficiente no uso de React com MaterialUI no front-end e NodeJS com Express no back-end. Possui experiência no uso de bancos de dados relacionais e não-relacionais, além de conhecer outras tecnologias como Golang, Java, Docker, entre outras, tornando-o dinâmico e apto a solucionar quaisquer problemas de modo eficiente.