import React from 'react';

const ProjectCards = ({ project }) => {
  return (
    <div className="flex flex-col w-full  rounded-[20px] gap-[2px] border-[0.5px] border-[rgba(255,255,255,0.1)] shadow-lg shadow-black/20" style={{padding: '10px'}}>
      <div className="h-[200px] w-full bg-gray-800 rounded-t-[20px]">
      <img src={project.banner} className="h-full w-full object-cover rounded-t-[12px]" />
      </div>
      <div className="flex flex-row justify-between items-center mx-[10px]" style={{paddingLeft:'0', marginTop:'10px'}}>
        <div className="w-[80%] text-left">
          <h3 className="text-white text-[16px]">{project.title}</h3>
          <span className="text-gray-500 text-[14px]">{project.description}</span>
        </div>
        <a href={project.link} className="bg-white/20 text-white/60 w-fit h-fit px-[10px] py-[3px] rounded-full hover:bg-white hover:text-black transition-all">
          &#8599;
        </a>
      </div>
    </div>
  );
};

export default ProjectCards;
