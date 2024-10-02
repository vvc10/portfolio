import React from 'react';
import { MdMarkEmailUnread } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import './css/styles.css';

const Contact = () => {
  // Define an array for the contact methods
  const contactMethods = [
    {
      id: 1,
      icon: <MdMarkEmailUnread className='text-white' />,
      title: 'Write me an Email',
      link: 'mailto:pankajy8928@gmail.com',
      linkText: 'pankajy8928@gmail.com'
    },
    {
      id: 2,
      icon: <IoCallSharp className='text-white' />,
      title: 'Discuss on Call',
      link: 'tel:+918928090554',
      linkText: '+91-8928090554'
    },
    {
      id: 3,
      icon: <FaTelegramPlane className='text-white' />,
      title: 'Text me, hi!',
      link: 'https://telegram.me/@pankchillin',
      linkText: '@pankchillin'
    }
  ];

  return (
    <section className="px-[5%] py-[5%] w-full h-fit" id="projects">
      <div className="flex flex-row text-left justify-between items-center mb-[20px]" style={{paddingLeft:'0'}}>
        <h2 className="font-[500] text-[18px] text-left" >
          wanna talk?
          <p className="text-gray-500 font-[400] text-[15px] py-2">
            Drop Hi or Mail me  
          </p>
        </h2>
      </div>
      <div className='grids_form mb-[30px]'>
        {contactMethods.map((method) => (
          <div
            key={method.id}
            className="flex items-center gap-4 px-[10px] py-[20px] bg-[#202125] rounded-[20px] border border-[rgba(255,255,255,0.1)]"
          >
            {method.icon}
            <div className="flex flex-col text-left">
              <span className="text-white text-[16px] text-left">{method.title}</span>
              <p className="text-gray-400 text-[14px] text-left">
                <a href={method.link} className="hover:text-white transition-all">
                  {method.linkText}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Feedback Form Section */}
      <div className="flex flex-row text-left justify-between items-center mb-[20px]"style={{paddingLeft:'0'}}>
        <h2 className="font-[500] text-[18px]">
        I'd love your feedback!
          
        </h2>
      </div>
      <div className="mt-[20px] p-[20px] bg-[#1a1b1e] rounded-[20px] border border-[rgba(255,255,255,0.1)]">
         <form className="flex flex-col gap-[15px]" style={{paddingLeft: '0'}}>
          <input
            type="text"
            placeholder="Your Name"
            className="p-[10px] bg-[#2a2b2e] text-white rounded-[10px] border-none focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-[10px] bg-[#2a2b2e] text-white rounded-[10px] border-none focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="p-[10px] bg-[#2a2b2e] text-white rounded-[10px] border-none focus:outline-none"
          />
          <button
            type="submit"
            className="w-fit px-4 py-2 mt-[10px] rounded-[20px] text-white bg-[#2a2b2e] hover:bg-white hover:text-black transition-all"
          >
            Send Feedback
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
