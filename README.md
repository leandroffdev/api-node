# 🎬 API de Filmes

- Esta é uma API RESTful criada com **Node.js**, **Express**, **MongoDB**, **Mongoose** e **Nodemon**, com o objetivo de gerenciar um catálogo de filmes. Ideal para estudos de backend e integração com banco de dados NoSQL.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Nodemon](https://www.npmjs.com/package/nodemon)

---

## 📁 Estrutura do Projeto (MVC)
```
src/
│
├── controllers/
│ └── filmController.js
├── models/
│ └── Film.js
├── routes/
│ └── film.js
├── index.js
└── .env

```

---
## Inicie o servidor com o Nodemon:

> npm start

## Rotas da API
```
| Método | Rota             | Descrição                   |
| ------ | ---------------- | --------------------------- |
| GET    | /api/films       | Lista todos os filmes       |
| GET    | /api/films/:id   | Retorna um filme por ID     |
| POST   | /api/films       | Cria um novo filme          |
| PUT    | /api/films/:id   | Atualiza um filme existente |
| DELETE | /api/films/:id   | Remove um filme do banco    |

```

## Exemplo de Requisição POST
```
POST http://localhost:3000/api/films
Content-Type: application/json

{
  "title": "nome do filme",
  "description": "descricao do filme",
  "image_url": "http://endereco",
  "trailer_url": "https://endereco"
}

```