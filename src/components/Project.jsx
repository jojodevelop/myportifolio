import React from "react";
import { FaCircle } from "react-icons/fa";

export default function Project() {
  return (
    <>
    <div>
     <div className="text-center mt-8">
           <h2 className="text-white">WHAT I WAS DONE </h2>
        <h1 className="text-sky-500 text-[25px]"><b>MY PROJECT </b></h1></div>
        <div className="flex gap-[100px] justify-center mt-[50px]">
            <div className="mt-[0px]"><img src="./logo.jpg" className="w-[200px] h-full "/></div>
<div className=" justify-center mt-[50px] gap-[30px]">
    <div>
<div className="text-white  gap-[10px] md:flex mb-3 ">
   <div><img src="odine.JPG"className="w-[120px]"/></div> 
  <div className="pt-5">  <h1><b>ODINE RECIPIES</b></h1>
    <h2>Technologies  <FaCircle className="text-sky-300 text-[10px] "/>HTML<b className="gap-[2px] pl-6 hover:bg-white rounded-lg text-sky-300"><a href="https://github.com/jojodevelop/odin-recipes">View</a></b></h2> </div>
</div>
<div className="text-white md:flex gap-5 pt-3 ">
<div><img src="project2.JPG"className="w-[120px]"/></div>
 <div>   <h1><b>WEBDESIGN</b></h1>
    <h2>Technologies  <FaCircle className="text-sky-300 text-[10px] "/>FIGMA <b className="gap-[2px] pl-6 hover:bg-white rounded-lg text-sky-300">View</b></h2></div>
</div>
</div>
<div>

<div className="text-white  md:flex gap-5 pt-5">
<div> <img src="project.JPG"className="w-[120px]"/></div>
   <div> <h1><b>PROJECT MANAGEMENT OF TRAINEEMARK'S</b></h1>
  <h2>Technologies  <FaCircle className="text-sky-300 text-[10px] "/>FIGMA<b className="gap-[2px] pl-6 hover:bg-white rounded-lg text-sky-300">View</b></h2>   </div>
</div>
<div className="text-white md:flex gap-5 mt-7">
<div><img src="project1.JPG"className="w-[120px] flex"/></div>
  <div>  <h1><b>MOVIECARD</b></h1>
    <h2>Technologies  <FaCircle className="text-sky-300 text-[10px] "/><ul className="flex  space-x-2"><li>html</li>
    <li>tailwindcss</li>
    <li>React</li><li> <b className="gap-[2px] pl-6 hover:bg-white rounded-lg text-sky-300">View</b></li></ul></h2>  </div> 
</div>
</div>
</div>
</div>

    </div>
    </>
  );
}
