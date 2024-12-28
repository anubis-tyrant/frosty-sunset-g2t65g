import { useEffect, useRef, useState } from "react";
import "./Header.scss";

const Header = ({ setResult, page,setPage, forceRender, setForceRender }) => {
  const [query, setQuery] = useState("");
  const isFirstRender = useRef(true);
  const renderCount = useRef(0);

  // useEffect(() => {
  //     renderCount.current += 1;
  //     console.log("Header.jsx render count" + renderCount.current);
  // });
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      console.log("useEffect triggered");
      handleClick(setResult, query, page, setPage);
    }
  }, [page, forceRender]);



  return (
    <>
      <div className="logo">
        <h1>Anubis Moviez</h1>
      </div>
      <div className="searchBar flex flex-center flex-direction-y">
        <input type="text" name="search" id="searchBarInput" onChange={
          (event) => {
            setQuery(event.target.value);
          }
        }/>
        {/* <div className="flex flex-direction-x">
          <h1>{renderCount.current}</h1>
          <button onClick={() => {renderCount.current = renderCount.current-1}}>Decrement</button>
        </div> */}
        <button
          id="searchButton"
          onClick={(e) => {
            console.log("Search clicked....")
            setPage(1);
            setForceRender((prev) => prev === 0 ? 1 : 0); 
            // console.log("Page set")
            // console.log("Page value: " + page);
            // handleClick(setResult, query, page, setPage);

          }}
        >
          Search
        </button>
      </div>
    </>
  );
};

const handleClick = async (setResult, query, page, setPage) => {
  console.log("HandleClick");
  
  
  // setPage(1);
  let spinnner = document.getElementById("spinner");
  spinner.style.visibility = "visible";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGUxNzQwMWI1OWM4YWU3N2Y5MGJjMTk1YWM0ZjY1NyIsIm5iZiI6MTcwNTMyNTc2Mi4yNDg5OTk4LCJzdWIiOiI2NWE1MzRjMjY0NzY1NDAxMjhkNmZjZmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.0sX6zUygUQGhDYq6Ju6g_yQxaNewx9qpqQKMj-ojeCk",
    },
  };
  let url = `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=true&language=en-US&page=${page}`
  let localUrl = 'http://localhost:5000/file'
  // let response = await fetch(localUrl);
  let response = await fetch(url, options);
  
  //   let response = await fetch("http://localhost:5000/file");
  
  
  let responseJson = await response.json();
  // console.log("Response await done");
  let resultsData = responseJson;
  // console.log("let resultsData = responseJson;");
  // let resultsData = responseJson['results'];
    // .filter((elem) => elem.media_type != "person")
  //   .map((item) => ({
  //     id: item.id,
  //     media_type: item.media_type,
  //     backdrop_path: item.poster_path,
  //     title: item.media_type === "tv" ? item.name : item.title,
  //     date: item.media_type === "tv" ? item.first_air_date : item.release_date,
  //   })
  // );
  // console.log("Handleclick END");
  
  setResult({results: [], total_pages: 1});
  setResult(resultsData);
  spinner.style.visibility = "hidden";
};


export default Header;
