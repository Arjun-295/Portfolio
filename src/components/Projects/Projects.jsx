import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Sansthaein Aur Samvidhan",
      description:
        "Teaches about the Constitution of India through games and animated lectures. It's made with HTML, CSS and JavaScript.",
      preview: "#",
      github: "https://github.com/KTJAGANNATHAN0/Constution-Website",
    },
    {
      title: "WEB DEV BRIEF",
      description:
        "Gives you a real-world project brief based on your tech stack and level. Ideal for practicing web development.",
      preview: "#",
      github: "#",
    },
    {
      title: "Blog Application",
      description:
        "A simple blog application built while learning React.js from Chai aur Code YouTube channel.",
      preview: "#",
      github: "#",
    },
  ];

  return (
    <div className="bg-[#040033] min-h-screen text-white py-16">
      <h1 className="text-5xl font-bold text-center p-2 md:p-10">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-blue-300 text-black rounded-lg p-6 flex flex-col justify-between min-h-[400px]"
          >
            <div className="text-left">
              <h2 className="font-bold text-2xl md:text-3xl mb-3">{project.title}</h2>
              <p className="text-lg leading-relaxed">{project.description}</p>
            </div>
            <div className="mt-auto pt-6 flex justify-start gap-4">
              <a
                href={project.preview}
                className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 duration-200 hover:shadow-xl"
              >
                Preview
              </a>
              <a
                href={project.github}
                className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 duration-200 hover:shadow-xl"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
