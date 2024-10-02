import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './css/styles.css';

const Home = () => {
  const [dynamicText, setDynamicText] = useState('');
  const texts = ['Websites', 'UI/UX Design', 'Graphics', '3D Models'];
  const typingSpeed = 150;
  const deletingSpeed = 50;
  const delayBetweenWords = 1000;

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let currentText = '';
    let timeout;

    const type = () => {
      if (!isDeleting && currentText.length < texts[currentIndex].length) {
        currentText += texts[currentIndex][currentText.length];
        setDynamicText(currentText);
        timeout = setTimeout(type, typingSpeed);
      } else if (isDeleting && currentText.length > 0) {
        currentText = currentText.slice(0, -1);
        setDynamicText(currentText);
        timeout = setTimeout(type, deletingSpeed);
      } else if (!isDeleting && currentText.length === texts[currentIndex].length) {
        isDeleting = true;
        timeout = setTimeout(type, delayBetweenWords);
      } else if (isDeleting && currentText.length === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % texts.length;
        timeout = setTimeout(type, typingSpeed);
      }
    };

    type();

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="w-[100%] h-fit px-0 md:px-[5%]" id="home">
      <Swiper
        className="home-swiper"
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide className="swiper-slide">
          <div className="">
            <div className="py-[10%] px-[10%] text-center md:text-left">
              <h3 className=" font-[400] text-[16px] md:text-[20px] mb-[5px] text-center md:text-left">Heyy!</h3>
              <h1 className="text-[38px] md:text-[48px] mb-[20px]  text-center md:text-left">I am Pankaj</h1>
              <div className='flex flex-col gap-[10px] ' style={{paddingLeft:'0'}}>
                <div className="flex flex-row h-[20px] mb-[10px] items-center w-fit mx-auto md:mx-[0]" style={{paddingLeft: '0'}}>
                  <p className="text-[16px] md:text-[20px] text-gray-500">I create awesome</p>
                  <p className="fade-in text-[16px] md:text-[20px] text-white" id="demo">
                    {dynamicText}
                  </p>
                  {/* <p className="text-[16px] md:text-[20px] text-gray-500">at a time</p> */}
                </div>
                <div className="bg-white w-fit text-center px-3 rounded-full mt-8 cursor-pointer mb-[10px] mx-auto md:mx-0">
                  <span className="text-black text-[16px]">Download CV</span>
                  <button className="py-2 pl-3">
                    <a href="assets/Resume_pankajC57.pdf" download>
                      <p>&#10515;</p>
                    </a>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Home;
