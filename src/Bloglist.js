import React,{useState} from 'react'
import './App.css';
const Bloglist = ({ blog, title, deleteBlog,setBlog}) => {
    const[toggle,setToggle]=useState([])
 const[read,setRead]=useState([])
 const[unread,setUnread]=useState([])

    function readBlog(id) {
        const updatedBlogs = blog.map((blog) =>
      blog.id === id ? { ...blog, color: "green" } : blog)

    setBlog(updatedBlogs);
    console.log(updatedBlogs)
        setToggle(updatedBlogs)
        console.log(toggle)
        const readBookFilter = blog.filter(blog => blog.color === "green")
        setRead(readBookFilter.length+1)
        const readBookFilter1 = blog.filter(blog => blog.color === "red")
        setUnread(readBookFilter1.length-1)
      
       
    }
  
    return (
        <>

          <p className='Listing'>No.of Books:{blog.length}</p>
          <p className='Listing'>Read: {read}</p>
                <p className='Listing'>Unread: {unread}</p>
            {blog.map((blog1) => (
                <div className="Container" key={blog1.id}    style={{ color: blog1.color }}>
                    <h3>{blog1.title}</h3>
                    <p>The book {blog1.title} is written by author {blog1.author}</p>
                    <button onClick={() => deleteBlog(blog1.id)}>Delete</button>
                    {blog1.color==="red" ? (
                        
            <button onClick={() => readBlog(blog1.id)} className="button">
            Read
            </button>
          ) : (
            ""
          )}
                </div>
            ))}




        </>
    )
}

export default Bloglist
