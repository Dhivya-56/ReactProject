import React,{useState} from 'react'
import './App.css';
const Bloglist = ({ blog, title, deleteBlog}) => {
    const[toggle,setToggle]=useState([])
  

    function readBlog(index) {
        if (!toggle.includes(index)) {
            setToggle([ index]);
           
        }
        
    }
    const readCount = toggle.length;
    const unreadCount = blog.length - readCount;
    
    return (
        <>

          <p className='Listing'>No.of Books:{blog.length}</p>
          <p className='Listing'>Read: {readCount}</p>
                <p className='Listing'>Unread: {unreadCount}</p>
            {blog.map((blog1,index) => (
                <div className="Container" key={blog1.id} style={{ color: toggle.includes(index) ?"green" : "red"  }}>
                    <h3>{blog1.title}</h3>
                    <p>The book {blog1.title} is written by author {blog1.author}</p>
                    <button onClick={() => deleteBlog(blog1.id)}>Delete</button>
                    <button  onClick={()=>readBlog(index)} className="readbutton"  disabled={toggle.includes(index)}>Read</button>
                </div>
            ))}




        </>
    )
}

export default Bloglist
