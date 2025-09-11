import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

const users = [];

app.get("/usuario/", (req, res) => {
  //cria uma rota GET

  res.status(200).json(users);
}); //responde com o array de usuários

app.post("/usuario", async (req, res) => {//cria uma rota POST
  
  await prisma.user.create({ //cria um novo usuário no banco de dados
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  });
  
  res.status(201).json({ message: "Usuário salvo com sucesso!" }); //responde com uma mensagem
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000")); //inicia o servidor na porta 3000

//http://localhost:3000/
//Username : alekueda_db_user
//Password : XPKXIXJRVEL3FNbn
