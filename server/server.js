import express from 'express';
import cors from 'cors';
import dotenv from "dotenv"
import { connectDb } from './db.js';
import Article from './model/articlesModel.js';
dotenv.config()
const app = express()
const PORT = process.env.PORT || 8080
app.use(express.json({ extended: false }))
app.use(cors())

connectDb()


app.post("/api/articles/:name/add-comments", async (req, res) => {
  const { username, text } = req.body
  const getParams = req.params.name
  try {
    const findSome = await Article.findOne({ name: getParams })
    const setObj = {
      username: username,
      text: text
    }
    findSome.comments.push(setObj)
    await findSome.save()
    res.status(200).json({ status: findSome })
  } catch (error) {
    console.log(error);
  }


})


app.get('/coll/:name', async (req, res) => {
  const getParams = req.params.name
  const articles = await Article.findOne({ name: getParams })

  try {
    if (articles) {
      res.status(200).json(articles)
    }
    if (!articles) {
      res.status(404).json({ status: "error" })
    }
  } catch (error) {
    console.log(error);
  }
})







app.listen(PORT, () => {
  console.log(`Server running on port, ${PORT}`);
})