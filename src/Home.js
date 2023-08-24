import React, { useState, useEffect } from 'react'
// import { useNavigate} from 'react-router-dom';
import Bloglist from './Bloglist';
// import SearchBar from './Search';
const Home = () => {
  // const navigate=useNavigate()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [keyword, setKeyword] = useState('')
  // const[toggle,setToggle]=useState([])
  // console.log(toggle)

  //   function readBlog(index) {
  //       if (!toggle.includes(index)) {
  //           setToggle([ index]);
           
  //       }
        
  //   }
  function deleteBlog(id) {
    setBlogs(blogs.filter(blog => blog.id !== id))
  }
  const [blogs, setBlogs] = useState([
    {
      title: 'Agni siragugal', author: 'APJ', id: 1,color:'red'

    },
    {
      title: 'Display', author: 'Rishikesh', id: 2,color:'red'
    },
    {
      title: 'Win the race', author: 'Robin sharma', id: 3,color:'red'
    }
  ])





  function handleSubmit(e) {
    e.preventDefault()
    const id = (blogs.length) ? blogs[blogs.length - 1].id + 1 : 1;

    const newpost = [{ title: title, author: body, id,color:'red' }]
    console.log(newpost)
    const allpost = [...newpost, ...blogs]
    console.log(allpost)
    setBlogs(allpost)
    setTitle('')
    setBody('')

  }



  return (
    <>

      <div className="Form_container">

        <form >
          <div className="input-group mb-3">
            <label htmlFor="floatingInput" className='label label1'>Title</label>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="input-group mb-3">
            <label htmlFor="floatingInput1" className='label label2'>Author</label>
            <input type="text" className="form-control1" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={body} onChange={(e) => setBody(e.target.value)} />
          </div>
          <button class="btn btn-outline-secondary" type="button" id="button-addon1" onClick={handleSubmit}>Submit</button>

        </form>


      </div>
      <div>
        <Bloglist blog={blogs} deleteBlog={deleteBlog} setBlog={setBlogs} />
      </div>
    </>
  )
}

export default Home
