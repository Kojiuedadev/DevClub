import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());


app.get("/usuario", async (req, res) => {
  const user = await prisma.user.findMany(); //busca todos os usuários no banco de dados
  res.status(200).json(user);
}); //responde com o array de usuários

app.post("/usuario", async (req, res) => {//cria uma rota POST
  
  const user = await prisma.user.create({ //cria um novo usuário no banco de dados
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  });
  
  res.status(201).json(user); //responde com uma mensagem
});

app.put("/usuario/:id", async (req, res) => {//cria uma rota POST

  const user = await prisma.user.update({ //cria um novo usuário no banco de dados
    where:{
      id: req.params.id
    },
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  });

  res.status(201).json(user); //responde com uma mensagem
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000")); //inicia o servidor na porta 3000

//http://localhost:3000/
//Username : alekueda_db_user
//Password : XPKXIXJRVEL3FNbn
