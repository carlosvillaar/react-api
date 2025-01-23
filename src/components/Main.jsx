import axios from "axios"
import { useState, useEffect } from "react"
import Card from "./Card"

const Main = () => {

  const baseAPI = 'http://localhost:3000'

  const [posts, setPosts] = useState()

  function fetchDataAPI(){
    axios.get(`${baseAPI}/posts`)
      .then(res =>{
        const postsArray = res.data
        console.log(postsArray);
        setPosts(postsArray)
        
      })

  }
    
    useEffect(fetchDataAPI, [])
  

  return (
    <main>
      <div className="container my-5">
        <div className="row">
          {/* {posts.map(post => (<Card key={post.id} />))} */}
        </div>
      </div>
    </main>
  )
}

export default Main