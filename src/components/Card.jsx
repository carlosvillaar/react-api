const Card = (props) => {

  const posts = props.posts

  return (
    <div className="col-12 col-md-4">
      <div className="card mb-4">
        <img className="my-3" src={posts.image} alt={posts.title} />
        <h4 className="my-3">{posts.title}</h4>
        <p className="my-3">{posts.content}</p>
      </div>
    </div>
  )
}

export default Card