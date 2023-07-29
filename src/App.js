import React from "react";
import reviews from "./data";
import Partners from "./compoments/Partners";
const App = () => {
  return (
  <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200 ">
    <div className="text-center">
    <h1 className="text-4xl font-bold">Our Partners</h1>
    <div className="h-[4px] bg-violet-400 w-1/5 mt-1 mx-auto"></div>
    <Partners reviews={reviews}/>

    </div>
    </div>
    );
};

export default App;
