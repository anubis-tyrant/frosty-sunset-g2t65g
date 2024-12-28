import "./Card.scss";
import {useRef, useEffect} from "react";

function Card({ props }) {
  
  let r = {};
  if (props.media_type == "person") {
    r = {
      name: props.name,
      poster: props.profile_path,
      date: "null",
      type: props.media_type
    }
  } else if (props.media_type == "movie") {
    r = {
      name: props.title,
      poster: props.poster_path,
      date: props.release_date,
      type: props.media_type
    }
  } else {
    r = {
      name: props.name,
      poster: props.poster_path,
      date: props.first_air_date,
      type: props.media_type
    }
  }

//   const renderCount = useRef(0);

//   useEffect(() => {
//     renderCount.current += 1;
//     console.log("Card.jsx render count" + renderCount.current);
//   }
// );



  // console.log(`Type: ${r.type}`);
  const style = {
    backgroundImage: r.poster === null ? null : `url("https://image.tmdb.org/t/p/w300${r.poster}")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    textTransform: r.type === "tv" ? "uppercase" : "capitalize"
  };
  return (
    <a
      className="card flex flex-direction-y flex-center"
      style={style}
      href={`https://www.themoviedb.org/${r.type}/${props.id}`}
      target="_blank"
    >
      {r.poster === null ? (
        <svg
          id="glyphicons-basic"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <path
            fill="#b5b5b5"
            id="picture"
            d="M27.5,5H4.5A1.50008,1.50008,0,0,0,3,6.5v19A1.50008,1.50008,0,0,0,4.5,27h23A1.50008,1.50008,0,0,0,29,25.5V6.5A1.50008,1.50008,0,0,0,27.5,5ZM26,18.5l-4.79425-5.2301a.99383.99383,0,0,0-1.44428-.03137l-5.34741,5.34741L19.82812,24H17l-4.79291-4.793a1.00022,1.00022,0,0,0-1.41418,0L6,24V8H26Zm-17.9-6a2.4,2.4,0,1,1,2.4,2.4A2.40005,2.40005,0,0,1,8.1,12.5Z"
          />
        </svg>
      ) : (
        <div className="fill"></div>
      )}

      <div name="desc">
        <span name="title">{r.name}</span>
        <span name="type">{r.type}</span>
        {r.type === "person" ? null : <span name="year">{r.date.slice(0, 4)}</span>}

      </div>
    </a>
  );
}

export default Card;
