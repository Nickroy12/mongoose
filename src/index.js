import express from "express";

import dotenv from 'dotenv'
import { run } from "./db.js";
dotenv.config()
const app = express()
const port = 3000

app.use(express.json())

await run()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})