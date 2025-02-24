# AppNotes
Aplicação desenvolvida para o gerenciamento de notas, dividida em duas partes principais:
- **Server**: Um servidor Node.js construído com Express, MongoDB (usando Mongoose), e outras dependências.
- **Client**: Aplicação frontend utilizando Vue.js

## Pré-Requisitos
- **Node.js**: Versão 18 ou superior. [Download](https://nodejs.org/).
- **MongoDB**: Banco de dados utilizado no projeto. [Download](https://www.mongodb.com/).
- **Docker** (opcional): Para rodar o projeto em um contêiner. [Download](https://www.docker.com/).

## Instalação
Clone o repositório:
```bash
https://github.com/xaamax/app-notes.git
```
### Backend
Navegue até o diretório do backend
```bash
cd app-notes/server
```
Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente
```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/notes_db
```
### Frontend
Navegue até o diretório do frontend
```bash
cd app-notes/client
```
Crie um arquivo `.env.local` na raiz do projeto e adicione as seguintes variáveis de ambiente
```bash
VITE_URL=http://localhost:5000
VITE_URL_API=http://localhost:5000/api
```
### Execução
- **Com Docker**
Verifique se o [Docker](https://www.docker.com/) está instalado e sendo executado na sua máquina
```bash
docker --version
docker ps
```
Na raiz do projeto execute
```bash
docker-compose up -d
```

- **Sem Docker**
#### Backend
Navegue até o diretório do backend
```bash
cd app-notes/server
```
Instale as dependências
```bash
npm install
```
Inicie o servidor em modo de desenvolvimento
```bash
npm run dev
```
#### Frontend
Navegue até o diretório do frontend
```bash
cd app-notes/client
```
Instale as dependências
```bash
npm install
```
Inicie o servidor em modo de desenvolvimento
```bash
npm run dev
```

## Documentação da API
Para testar a API, você pode baixar e importar o arquivo de coleções do Postman disponível neste repositório. Basta seguir os passos abaixo:
- Abra o Postman.
- Clique em **Import** > **Upload Files** e selecione o arquivo `app-notes.postman_collection`.

#### Retorna todas as notas
```http
  GET /api/notes
```
#### Criar novas notas
```http
  POST /api/notes
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `title`      | `string` | **Obrigatório**. Título da nota |
| `description`      | `string` | **Opcional**. Descrição da nota |

#### Alterar nota
```http
  PUT /api/notes/{id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. Id da nota |
| `title`      | `string` | **Obrigatório**. Título da nota |
| `description`      | `string` | **Opcional**. Descrição da nota |

#### Remover nota
```http
  DELETE /api/notes/{id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. Id da nota |
