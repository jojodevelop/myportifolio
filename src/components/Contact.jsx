import React from "react";
import Futer from "./Futer";

export default function Contact() {
  return (
    <div className="  mt-[100px] text-center text-white ">
        <div> 
            <h3>ASK ME QUESTION </h3>
            <h1 className="mb-10 text-[20px] text-sky-500"><b>CONTACT ME</b></h1>
        </div><div>
          <div className="">  </div>
        </div>
      
      <form className=" ">
        <div className="gap-[30px] flex justify-center ">
          <div>
            <label>
              <b>FIRSTNAME</b>
            </label>
            <br></br>
            <input
              type="text"
              id="FIRSTNAME"
              placeholder="FIRSTNAME"
              className="border mt-3 border-black p-2 rounded-lg"
            />
          </div>
          <div>
            <label>LASTNAME</label>
            <br></br>

            <input
              type="text"
              id="LASTNAME"
              placeholder="LASTNAME"
              className="border mt-3 border-black p-2 rounded-lg"
            />
          </div>
        </div>
        <div className="flex  justify-center gap-[30px]">
          <div>
            <label>PHONE</label>
            <br></br>
            <input
              type="text"
              id="PHONENUMBER"
              placeholder="PHONENUMBER"
              className="border mb-3 border-black p-2 rounded-lg "
            />
          </div>
          <div>
            <label>EMAIL</label>
            <br></br>
            <input
              type="EMAIL"
              id="EMAIL"
              placeholder="EMAIL"
              className="border border-black p-2 rounded-lg"
            />
          </div>
        </div>
        <div className="">
          <label>MESSAGE</label>
          <br></br>
          <input
            type="text"
            placeholder="sending me a message"
            id="  MESSAGE"
            className="p-10 border border-black  text-black mt-3"
          />
        </div>
        <button className="bg-sky-500 hover:scale-125 mb-7 text-white p-3 w-[200px] mt-10 rounded-xl font-semibold">Submit</button>
      </form>
      <footer className="bg-sky-500 pt-3 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2023 Niyomushumba  Josiane</p>
      </div>
    </footer>
    </div>
   
  );
}
