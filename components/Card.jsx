function Card(props) {
  return (
    <div className="work-item">
      <img src={props.src} />
      <h5>{props.work}</h5>
      <p>{props.desc}</p>
    </div>
  );
}
export default Card;
