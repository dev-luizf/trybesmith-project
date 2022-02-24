import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD } = process.env;

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});

export default connection;

//Gambiarra que peguei do colega de turma Gabriel Gaspar.
//É necessário, pois o prisma ORM usa variavéis de ambiente que
// não podem ser acessadas pelo evaluator
export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: `mysql://${MYSQL_USER}:${MYSQL_PASSWORD}@${MYSQL_HOST}:3306/Trybesmith`,
    },
  },
});
