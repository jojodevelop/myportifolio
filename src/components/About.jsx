import React from "react";

export default function About() {
  return (
    <>
      <div className="">
        <div className="md:flex item-center gap-[20px] mt-[60px] md:ml-[100px]     ">
          <div>
            <div
              style={{
                clipPath: "",
              }}
            >
              <img
                src="./joyy.png"
                className="h-full "
              />
            </div>
          </div>
          <div className="text-white text-[20px] mt-[30px]">
            <h1> LET ME INTRODUCE MYSELF</h1>
            <h1 className="p-2 text-sky-300 mb-3 text-[25px]">
              <b>ABOUT ME</b>
            </h1>
            <p className="md:w-[800px]">
            Hello, I'm <b> NIYOMUSHUMBA JOSIANE </b> ,an aspiring website developer with a strong passion for creating digital experiences. While I may not have any formal experience yet, I've been self-studying web development for some time. My skills include HTML, CSS, and JavaScript, and I'm eager to expand my knowledge. I love crafting visually appealing and user-friendly websites. Problem-solving is a skill I'm constantly honing, and I'm open to learning from experienced developers. I'm a fast learner and excited to collaborate on web projects to gain practical experience. My goal is to contribute to the web development community and build a career in this dynamic field. Let's work together to bring digital ideas to life!
            </p>
            <button className=" p-2 bg-sky-500 hover:scale-110  rounded-lg">ReadMore</button>
          </div>
        </div>
      </div>
    </>
  );
}
