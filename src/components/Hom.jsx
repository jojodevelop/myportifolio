import React from "react";

import {
  FaFacebook,
  FaFontAwesome,
  FaTwitter,
  FaVoicemail,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Hom() {
  return (
    <>
      <div>
        <div className="flex m-4 flex-col-reverse md:flex-row items-center justify- center  mt-[100px] gap-[100px]  ">
          <div className="text-white text-[15px] md:ml-[200px] ">
            <div className="text-[25px]">
              <h1>
                <b>HELLO, IT'S ME</b>
              </h1>
              <h1>
                <b>
                  <i className="text-sky-300">JOS</i>IANE{" "}
                  <i className="text-sky-300">NIYOM</i>UMBA
                </b>
              </h1>
              <h1 className="w-[400px]">
                {" "}
                <span>I' M WebSite Developer</span>
              </h1>
              <h2 className="md:w-[700px] mt-3 ">
                i am a student in IPRC-NGOMA in department of ICT LEVEL6 YEAR2
                My goal is to contribute to the web development community and
                build a career in this dynamic field
              </h2>
              <div className="md:flex mt-3 gap-[50px]">
                <div className="flex  ">
                  <div className="hover:bg-sky-300">
                    {" "}
                    <a href="mailto:niyojosiane@gmail.com">
                      {" "}
                      <h1>Email</h1>
                      <h3 className="text-[15px]">nijosiane2001@gmail.com</h3>
                    </a>
                  </div>
                </div>
                <div className="hover:bg-sky-300 rounded-sm">
                  <a href="tel:+250 781637795">
                    {" "}
                    <h1>PHONE</h1>
                    <h3 className="text-[15px]">(+250)781637795</h3>
                  </a>
                </div>
                <div>
                  <Link
                    to={
                      "https://drive.google.com/file/d/19RFA6sUr6WSQbqWtrmxWDjXl_L5g2ySj/view?usp=sharing"
                    }
                    target="_blank"
                  >
                    {" "}
                    <button className="text-white bg-sky-300 hover:bg-sky-500 rounded-lg">
                      Download Cv
                    </button>
                  </Link>
                </div>
              </div>
              {/* <button className="text-white border bg-sky-500 rounded-2xl hover:scale-50">DOWNLOAD CV</button>
               */}
            </div>

            <div className="text-white flex text-[30px] gap-[10px] mt-3 ml-5  text-[40px]">
              <Link
                to={"https://www.facebook.com/josiane.inezapeace"}
                target="_blank"
              >
                <FaFacebook className="border rounded-[50%]   hover:bg-sky-300  border-sky-500 shadow-lg p-1" />
              </Link>
              <Link to={"https://wa.me/781637795"} target="_blank">
                {" "}
                <FaWhatsapp className="border rounded-[50%]   hover:bg-sky-300  border-sky-500 shadow-lg p-1" />
              </Link>
              <a href="tel:+025 781637793">
                {" "}
                <FaPhone className="border rounded-[50%]   hover:bg-sky-300  border-sky-500 shadow-lg p-1" />
              </a>
              <FaTwitter className="border rounded-[50%]   hover:bg-sky-300  border-sky-500 shadow-lg p-1" />
            </div>
          </div>
          <div className="w-[300px]  ">
            <div
            // style={{
            //   clipPath:
            //     "polygon(0% 20%,30% 0%,100% 0%,90% 80%, 70% 100%, 10% 100%)",
            // }}
            // className="overflow-hidden border border-4 rounded-lg h-[10rem] w-[10rem]"
            >
              <img
                src="./jojo.png"
                className="h-fit mix-blend-screen"
                // className=" h-[13rem] mix-blend-color-dodge w-[14rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
