import articleListInfo from "./data/articles.js";
import Article from "./model/articlesModel.js";
import dotenv from "dotenv";
dotenv.config()
import { connectDb } from "./db.js"

connectDb()

const importData = async () => {
  try {
    await Article.deleteMany()
    await Article.insertMany(articleListInfo)
    console.log("Data imported")
    process.exit()
  } catch (error) {
    console.log(error.message);
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Article.deleteMany()
    console.log("Data destroyed")
    process.exit()

  } catch (error) {
    console.log(error.message);
    process.exit(1)
  }
}

if (process.argv[2] === "-d") {
  destroyData()
} else {
  importData()
}
