import express from "express";

import dotenv from 'dotenv'
import { run } from "./db.js";
import userRouter from "./user.routes.js";
import deleteUser from "./deleteUser.js";
import getUser from "./getUser.js";
dotenv.config()
const app = express()
const port = 3000

app.use(express.json())

await run()

app.use("/", userRouter);
app.use('/', deleteUser);
app.use('/', getUser);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})