import React, { useState, useRef, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Results from "./components/Results/Results";


const App = () => {
  const [resultData, setResultData] = useState({results: [], total_pages: 1});
  const [page, setPage] = useState(1);
  const renderCount = useRef(0);
  const [forceRender, setForceRender] = useState(0);

  useEffect(() => {
    renderCount.current += 1;
    console.log("App.jsx render count" + renderCount.current);
  });

  const res = (
    <>
      <div id="outerFrame">
        <Header setResult={setResultData} page={page} setPage={setPage} forceRender={forceRender} setForceRender={setForceRender}/>
        <Results resultData={resultData} page={page} setPage={setPage}/>

      </div>
    </> 
  )
  return res;
};

export default App;
