# Welcome // Readme


## Como iniciar o servidor

Para rodar o servidor uma única vez, digite no terminal:

<code>node index.js</code>

Para propósitos de desenvolvimento e atualizar automaticamente o servidor a cada alteração de código (por meio do pacote nodemon), digite no terminal:

<code>npm run dev</code>

Este comando rodará por padrão o arquivo "index.js"

## Configurações do Banco de Dados

É necessário utilizar o banco de dados da MySQL. Testado apenas com o MySQL WorkBench 8.0.

### Configuração da conexão
As configurações da conexão do banco de dados dentro do Workbench devem ser:
<code>hostname = 127.0.0.1
port - 3306
username - root
password - 12345</code>

Após se conectar, acesse a  _scheme_ principal de desenvolvimento com:
<code>USE drink_house</code>

Para desenvolvimento de testes que podem ser destrutivos, utilize a _scheme_ de testes com:
<code>USE testing_db</code>