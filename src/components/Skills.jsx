import React from "react";
import ProgresBar from "./ProgresBar";

export default function Skills() {
  return (
    <>
   
    
      <div className=" text-white ">
        <div className="ml-[100px]  ">
          <div className="text-center">
      <h1>what I know</h1>
      <h1 className="text-sky-300 font-semibold text-[25px] ">MY SKILLS</h1>
      </div>
      <div className=" md:flex gap-[100px]  ">
        <div>
        
        <div>
      <h1 className="md:ml-[100px] text-[30px] "><b>CODING SKILLS</b></h1>
      </div>
      <div className="md:w-[500px] p-5 border ">
       
        <div className="pb-2">
         <div className="flex justify-between"><h1>HTML</h1><h1>70%</h1></div> 
         <p> <ProgresBar percent={70} className="" /></p>
        </div>
        <div className="pb-2">
         <div className="flex justify-between"> <h1>CSS</h1><h1>60%</h1></div>
          <ProgresBar percent={60} />
        </div>
        <div className="pb-2">
         <div className="flex justify-between"> <h1>JS</h1><h1>60%</h1></div>
          <ProgresBar percent={60} />
        </div>
        <div className="pb-2">
         <div className="flex justify-between"> <h1>REACT</h1><h1>75%</h1></div>
          <ProgresBar percent={75} />
        </div>
        <div className="pb-2">
         <div className="flex justify-between"> <h1>FIGMA</h1><h1>80%</h1></div>
          <ProgresBar percent={80} />
        </div>
        <div className="pb-2">
         <div className="flex justify-between"> <h1>TAILWINDCSS</h1><h1>65%</h1></div>
          <ProgresBar percent={65} />
        </div>
      </div>
      </div>
      <div>
      <div>
      <h1 className="md:ml-[100px] text-[30px] "><b>PROFESSIONAL SKILLS</b></h1>
      </div>
      <div className="md:w-[500px] p-5 border ">
       
        <div className="pb-2">
        <div className="flex justify-between">  <h1>TEAMWORK</h1><h1>80%</h1></div>
         <p> <ProgresBar percent={80} /></p>
        </div>
        <div className="pb-2">
        <div className="flex justify-between">  <h1>COMMUNICATION</h1><h1>70%</h1></div>
          <ProgresBar percent={70} />
        </div>
        <div className="pb-2">
        <div className="flex justify-between">  <h1>CREATIVITY</h1><h1>55%</h1></div>
          <ProgresBar percent={70} />
        </div>
        
      </div>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}
