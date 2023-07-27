const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = 3000;
const dataFilePath = './data.json';

// Configura o servidor para servir arquivos estáticos da pasta raiz do projeto
app.use(express.static(__dirname));

// Rota para servir o arquivo HTML do cliente
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Evento de conexão com o socket
io.on('connection', (socket) => {
  console.log('Novo usuário conectado');

  socket.emit('loadQuestions', readQuestions());

  socket.on('newQuestion', (data) => {
    const newQuestion = {
      id: Date.now(), // Atribui o timestamp atual como ID único
      name: data.name,
      question: data.question,
    };

    const questions = readQuestions();
    questions.push(newQuestion);
    writeQuestions(questions);

    io.emit('newQuestion', newQuestion);
  });

  socket.on('deleteQuestion', (questionId) => {
    const questions = readQuestions();
    const updatedQuestions = questions.filter((question) => question.id !== questionId);
    writeQuestions(updatedQuestions);

    io.emit('deleteQuestion', questionId);
  });
});

function readQuestions() {
  try {
    const jsonData = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(jsonData);
  } catch (error) {
    // Se o arquivo não existir ou ocorrer algum erro ao ler, retorna um array vazio
    return [];
  }
}

function writeQuestions(questions) {
  fs.writeFileSync(dataFilePath, JSON.stringify(questions, null, 2), 'utf8');
}

server.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
