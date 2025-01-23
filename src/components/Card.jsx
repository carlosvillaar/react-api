const Card = (props) => {

  const posts = props.posts

  return (
    <div className="col-12 col-md-4">
      <div className="card mb-4">
        <img className="my-3" src={props.image} alt={props.title} />
        <h4 className="my-3">{props.title}</h4>
        <p className="my-3">{props.content}</p>
      </div>
    </div>
  )
}

export default Card