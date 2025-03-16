const Movies = (props) => {
  return (
    <div className="moviecard">
        <img src={props.src} alt="" />
        <p>{props.name}</p>
        <p>Year : {props.year}</p>
    </div>
  )
}

export default Movies