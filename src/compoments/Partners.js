import React, { useState } from "react";
import Card from "./Card";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
const Partners = (props) =>{
let reviews=props.reviews;
const [index,setIndex] =useState(0);
function leftShiftHandler(){
 if(index -1 < 0 ){
    setIndex(reviews.length -1);
 }
 else{
    setIndex(index-1);
 }
}
function rightShiftHandler(){
if(index >= reviews.length -1 ){
    setIndex(0);
}
else{
    setIndex(index+1);
}
}
function surpriseHandler(){
 let ramdomIndex =Math.floor(Math.random()* reviews.length);
 setIndex(ramdomIndex);
}

    return(
<div className="w-[85vw] md:w-[700px] bg-white rounded-md flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl" >
    <Card review = {reviews[index]} />
    <div className="flex text-xl mt-10 gap-3 text-violet-400 font-bold mx-auto">
                <button onClick={leftShiftHandler}
                className="cursor-pointer hover:text-violet-700 " >
                    <FaLessThan />
                </button>
                <button onClick={rightShiftHandler}
                className="cursor-pointer hover:text-violet-700 ">
                    <FaGreaterThan />
                </button>
            </div>
            <div className="mt-6">
                <button onClick={surpriseHandler}
                 className=" cursor-pointer px-10 py-3 rounded-md text-white text-lg bg-violet-400 hover:bg-violet-600 transition-all duration-200 ">Surprise Me</button>
            </div>
</div>
    );

}
export default Partners;