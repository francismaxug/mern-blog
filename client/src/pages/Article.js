import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Articles from '../components/Articles'
import articles from './ArticleContent'
import NotFound from './NotFound'
import axios from 'axios'
import Comments from '../components/Comments'
import AddComment from '../components/AddComment'
const Article = () => {
  const { name } = useParams()
  const articleFilt = articles.filter(article => article.name !== name)
  const article = articles.find(article => article.name === name)
  const [articleComments, setArticleComments] = useState({ comments: [] })


  const getAcomment = async () => {

    try {
      const { data } = await axios.get(`/coll/${name}`)
      setArticleComments(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAcomment()
  }, [name])

  useEffect(() => {
    console.log(articleComments);
  }, [name]);

  if (!article) return <NotFound />
  return (
    <React.Fragment>
      <h1 className='text-2xl sm:text-4xl my-6 text-gray-900'>{article.title}</h1>
      {article.content.map((paragraph, index) => <p className='leading-relaxed mx-auto text-base mb-4' key={index}>{paragraph} </p>)}
      <Comments comments={articleComments.comments} />
      <AddComment name={name} />
      <h1 className='sm:text-2xl text-gray-900 text-xl font-old my-4'>Other Related Articles</h1>
      <div className="flex flex-wrap -m-4">
        <Articles articles={articleFilt} />
      </div>
    </React.Fragment>
  )
}

export default Article
