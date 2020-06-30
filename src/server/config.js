import dotenv from 'dotenv';

dotenv.config(); // cargar archivo .env

const { ENV, PORT } = process.env;

export default {
  ENV,
  PORT,
}