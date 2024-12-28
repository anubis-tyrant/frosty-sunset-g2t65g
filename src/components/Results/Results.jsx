
import "./Results.scss";
import Card from "../Card/Card";
import { useRef, useEffect } from "react";

export default function Results({ resultData, page, setPage }) {
  const totalPages = resultData.total_pages;
  // console.log("total pages");
  // console.log(totalPages);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    console.log("Result.jsx render count" + renderCount.current);
  }
  );


  const handleNextBtn = () => {
    let tmp = page + 1;
    if (tmp <= totalPages) {
      setPage(tmp);
    }
  }

  const handlePrevBtn = () => {
    let tmp = page - 1;
    if (tmp > 0) {
      setPage(tmp);
    }
  }


  const res = (
    <>
      <div id="resultFrame" className="flex flex-direction-x flex-center">
        {resultData["results"].map((elem, index) => (
          <Card props={elem} key={index} />
        ))}

        <div id="spinner">
          <span className="loader"></span>
        </div>
      </div>
      <div className="flex flex-center pagination">
        <button
          className="previousBtn"
          id="previousBtn" 
          onClick={handlePrevBtn}
        >
          ⬅ Previous
        </button>
        <span className="pageNumber">{`${page} / ${totalPages}`}</span>
        {/* <span className="pageNumber">{`1 / 1}`}</span> */}
        <button
          className="nextBtn"
          id="nextBtn"
          
          onClick={handleNextBtn}
        >
          Next ➡
        </button>
      </div>
    </>
  );
  // console.log(res);

  // resultBody['results'].map((elem, index) => {  });
  return res;
}

