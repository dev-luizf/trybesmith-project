

# Trybesmith Project

Este é meu **primeiro projeto** feito utilizando **TypeScript**. Ele foi desenvolvido durante o módulo de Back-End na Trybe e é basicamente uma **API** node com Express e TS. Um **CRUD** simples com tema medieval.

**Obs:** O arquivo SQL com o código para criação do banco foi feito pela Trybe, e os relacionamentos das tabelas estão de uma forma simplificada pra fins didáticos, pois foi sugerido que os alunos fizessem as querrys na mão utilizando mysql2.

## Tecnologias e ferramentas:

 - Node
 - TypeScript
 - Prisma ORM
 - JWT
 - Express
 - Joi

## Como instalar e configurar:

 1. Primeiro instale as dependências:

    ```npm install```

 2. Crie o banco executando o arquivo Trybesmith.sql que está na raiz do projeto.

 3. Crie um arquivo  **.env**  na raiz do projeto com as seguintes variáveis:

    ```
    JWT_SECRET=UM_JWT_SECRET
    DATABASE_URL="mysql://DB_USER:DB_PASS@HOST:PORT/DB_NAME"
    ```
   
 4. Rode o projeto:
 
    ```npm start```
