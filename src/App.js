import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";

function App() {

  const [sidebar , setSidebar] = React.useState(true)
  const [searchedText , setSearchText] = React.useState("")
  

  return (
    <div className="App">
      <Navbar setSidebar={setSidebar} searchedText={searchedText} setSearchText={setSearchText}/>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} searchedText={searchedText} setSearchText={setSearchText}/>}/>
        <Route path="/video/:categoryId/:videoId" element={<Video searchedText={searchedText}/>}/>
      </Routes>
    </div>
  );
}

export default App;
