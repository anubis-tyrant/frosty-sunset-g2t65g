import "./Card.scss";

function Card({ props }) {
  // console.log(props);
  return (
    <div className="card flex flex-direction-y flex-center">
      {props.backdrop_path === null}

      <div name="desc">
        <span name="title">{props.title}</span>
        <span name="year">{props.date}</span>
      </div>
    </div>
  );
}

export default Card;
