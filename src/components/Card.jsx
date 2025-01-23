const Card = (props) => {

  const post = props.post

  return (
    <div className="col-12 my-3 col-md-4">
      <div className="card h-100">
        <img className="my-3 ps-3 pe-3" src={post.image} alt={post.title} />
        <h4 className="my-3 ps-3 pe-3">{post.title}</h4>
        <p className="my-3 ps-3 pe-3">{post.content}</p>
      </div>
    </div>
  )
}

export default Card