const Job = (props) => {
  return (
    <div className={`jobs-offers ${props.className}`}>

      <h2>{props.title}</h2>
      <div className="location">
        <p>{props.contractType}</p>
        <p>{props.country}</p>
        <p> {props.city}</p>

      </div>
    </div>
  )
};

export default Job;