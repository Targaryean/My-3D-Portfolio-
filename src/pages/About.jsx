import React from "react";
import { skills } from "../constants";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold">Utkarsh</span>
      </h1>

      <div className="mt-2 flex flex-col gap-3 text-slate-500">
        <p>
          {" "}
          Apiring Software Developer, specializing in web development. I have
          passion for creating visually appealing and user-friendly websites. I
          am constantly seeking new challenges and opportunities to improve my
          skills.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text"> Background</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I'm a B.Tech student at NIT Silchar with a passion for cutting-edge
            technologies like React, Next.js, blockchain, and 3D design. I've
            excelled academically (CGPA 8.64), built innovative projects like a
            Web 3.0 app and AI chatbot, and demonstrated leadership in student
            initiatives. My problem-solving skills are top-notch (ranked in the
            top 7.5% globally on LeetCode), and I'm always eager to learn and
            collaborate. I'm excited to leverage my skills to create impactful
            solutions and drive positive change in the tech world.
          </p>
        </div>
      </div>

      <hr className="border-slate-300"/>

      <CTA/>
    </section>
  );
};

export default About;
