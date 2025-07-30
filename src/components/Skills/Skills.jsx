import React from 'react';
import { DiReact, DiHtml5, DiCss3, DiJavascript1, DiNodejsSmall, DiPostgresql, DiMongodb, DiGit, DiPython, DiJava } from 'react-icons/di';
import { SiExpress, SiFigma, SiCplusplus } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";


const skillSet = [
    {
        id: 1,
        name: "React Js",
        icon: <DiReact size={70} />,
    },
    {
        id: 2,
        name: "HTML",
        icon: <DiHtml5 size={70} />,
    },
    {
        id: 3,
        name: "CSS",
        icon: <DiCss3 size={70} />,
    },
    {
        id: 4,
        name: "JavaScript",
        icon: <DiJavascript1 size={70} />,
    },
    {
        id: 5,
        name: "Node Js",
        icon: <DiNodejsSmall size={70} />,
    },
    {
        id: 6,
        name: "Express Js",
        icon: <SiExpress size={70} />,
    },
    {
        id: 7,
        name: "PostgreSQL",
        icon: <DiPostgresql size={70} />,
    },
    {
        id: 8,
        name: "Mongo DB",
        icon: <DiMongodb size={70} />,
    },
    {
        id: 9,
        name: "Git and GitHub",
        icon: <DiGit size={70} />,
    },
    {
        id: 10,
        name: "C++",
        icon: <SiCplusplus size={70} />,
    },
    {
        id: 11,
        name: "Python",
        icon: <DiPython size={70} />,
    },
    {
        id: 12,
        name: "Java",
        icon: <DiJava size={70} />,
    },
    {
        id: 13,
        name: "VS Code",
        icon: <VscVscode size={70} />,
    },
    {
        id: 14,
        name: "Figma",
        icon: <SiFigma size={70} />,
    },
]
function Skills() {
  return (
    <div className="bg-[#040033] min-h-screen pt-48 pb-20 px-4 sm:px-6 lg:px-8">
        <h1 className="text-white text-5xl md:text-7xl font-bold text-center mb-20">SKILLS</h1>
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {skillSet.map((skill) => (
                <div key={skill.id} className="flex flex-col items-center justify-center gap-4 p-6 bg-slate-800 rounded-xl shadow-lg hover:shadow-cyan-400/50 hover:scale-105 transition-all duration-300 ease-in-out">
                    <div className="text-cyan-400">
                        {skill.icon}
                    </div>
                    <p className="text-white text-lg font-semibold">{skill.name}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Skills