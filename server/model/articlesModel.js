
import { Schema, model } from "mongoose"


const articleSchema = new Schema({
  name: { type: String },
  comments: { type: Array }
})

const Article = model("Article", articleSchema)
export default Article