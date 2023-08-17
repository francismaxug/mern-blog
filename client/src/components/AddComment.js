import React, { useState } from 'react'
import axios from 'axios';
const AddComment = ({ name }) => {
  const [username, setUsername] = useState("");
  const [text, setText] = useState("");
  const [commentAdd, setCommentAdd] = useState(true);

  const addComment = async () => {
    try {
      const { data } = await axios.post(`/api/articles/${name}/add-comments`, { username, text })
      console.log(data.status)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      {commentAdd ? <button onClick={() => setCommentAdd(false)} className='bg-slate-600 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
      >Add new comment</button> : (
        <form className='shadow rounded px-8 pt-6 pb-8 mb-4' >
          <h3 className='text-xl font-bold mb-4 text-gray-900'>Add a comment</h3>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Name :
          </label>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Comment :
          </label>
          <textarea
            rows='4'
            cols='50'
            value={text}
            onChange={(e) => setText(e.target.value)}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
          <button
            onClick={() => addComment()}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Add Comment
          </button>
        </form >)}
    </div>
  )
}

export default AddComment
