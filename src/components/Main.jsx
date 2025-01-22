import axios from "axios"
import { useState } from "react"
import Card from "./Card"

const Main = () => {

  const baseAPI = 'http://localhost:3000/'

  const [posts, setPosts] = useState('')

  return (
    <main>
      <div className="container my-5">
        <div className="row">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </main>
  )
}

export default Main