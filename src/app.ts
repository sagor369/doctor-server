import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import router from './App/router';
const app = express();
// meddleware 
app.use(express.json())
app.use(cookieParser());
app.use(cors({ origin: ['http://localhost:5173'] }));


app.use("/api/v1", router)
app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
