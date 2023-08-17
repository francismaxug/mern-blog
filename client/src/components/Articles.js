import React from 'react'
import { Link } from 'react-router-dom'
const Articles = ({ articles }) => {
  return (
    <React.Fragment>
      {articles.map((list, index) => (
        <div key={index} className='p-4 md:w-1/2'>
          <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'><Link to={`/article/${list.name}`}><img className='object-cover object-center w-full md:h-36 lg:h-48' alt="blog" src={list.thumbnail} /></Link>
            <div className='p-6'><Link key={index} to={`/article/${list.name}`}><h3 className='text-lg font-medium mb-3 text-gray-900'>{list.title}</h3></Link>
              <p className='leading-relaxed mb-3'>{list.content[0].substring(0, 99)}...</p>
              <div className='flex items-center flex-wrap'><Link to={`/article/${list.name}`} className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0' >Learn More</Link></div>
            </div>
          </div>
        </div>))}
    </React.Fragment>
  )
}

export default Articles
