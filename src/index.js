import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

// Middleware for the app
app.use(cors());
app.use(bodyParser.json());

app.listen(process.env.PORT, () =>
  console.log(`App is listening on port ${process.env.PORT}`)
);