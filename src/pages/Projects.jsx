import React from 'react'
import { projects } from '../constants'
import {Link} from 'react-router-dom'
import CTA from '../components/CTA'

const Projects = () => {
  return (
    <section className="max-container">
    <h1 className="head-text">
      My  <span className="blue-gradient_text font-semibold">Projects</span>
    </h1>

    <div className="mt-2 flex flex-col gap-3 text-slate-500">
      <p>
      My journey began with a spark of curiosity, ignited by the challenge of creating an AI chatbot that could hold meaningful conversations. Since then, I've been hooked. Each project has been a thrilling puzzle, pushing me to learn new languages, algorithms, and design principles. From the intricate animations of my immersive canvas app to the efficient algorithms behind my sudoku solver, these projects are not just lines of code, they're testaments to my creativity, problem-solving skills, and unwavering passion for building something meaningful. So, come explore with me! I hope you like what you see.
       
      </p>
    </div>

    <div className='flex flex-wrap my-20 gap-16'>
      {projects.map((project) => (
        <div className='lg:w-[400px] w-full' key={project.name}>
          <div className='block-container w-12 h-12'>
            <div className={`btn-back rounded-xl ${project.theme}`}/>

            <div className='btn-front rounded-xl flex justify-center items-center'>
             
             <img
             src={project.iconUrl}
             alt="Project Icon"
             className='w-1/2 h-1/2 object-contain'
             />
            </div>
            </div>


            <div className='mt-4 flex flex-col'>
              <h4 className='subhead-text'>{project.name}</h4>

              <p>
                {project.description}
              </p>
              
              <div className='mt-2 flex items-center gap-1 font-poppins'>
              <Link 
              to={project.link}
             target ="_blank"
             rel ="noreferrer noopener"
             className='font-semibold text-blue-600'>
                Github Link
              </Link>
              </div>
            </div>
          </div>
      ))}

    </div>

    <hr className='border-[1px] border-slate-300'/>
    <CTA/>
    </section>
  )
}

export default Projects