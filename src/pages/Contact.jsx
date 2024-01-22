import React from 'react'
import { socialLinks } from '../constants/index.js'

const Contact = () => {
  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in touch!</h1>

        <form className='w-full flex flex-col gap-7 mt-12'>

          <label>
            Name
            <input
              type="text"
              name="name"
              className='input'
              placeholder='Utkarsh Singh'
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              className='input'
              placeholder='utkarshs0307@gmail.com'
            />
          </label>
          <label>
            Your Message
            < textarea
              name="message"
              className='input'
              placeholder='How can I help you?'
              
            />
          </label>

          <button
            type="submit"
            className='btn'
          >Send Message</button>
          
        </form>

      </div>

      <div className="flex justify-start mt-12">
        {socialLinks.map((link) => (
          <a
            // key={link.name}
            href={link.link}
            target="_blank"
            className="mr-8 "
          >
            <img src={link.iconUrl} alt={link.name} className="w-6 h-6 hover:scale-125 object-contain"  />
            {/* <span className="ml-2 text-sm">{link.name}</span> */}
          </a>
        ))}
      </div>

    </section>
  )
}

export default Contact