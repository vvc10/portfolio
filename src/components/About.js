import React from 'react';

const About = () => {
  const knowMoreClick = () => {
    // Logic to handle "Know More" click event
    console.log("Know more clicked");
  };

  return (
    <section className="section about hidden" id="aboutauth">
      <div className="about__container container grid">
        <div className="about__data">
          <h2 className="section__title_about about__title">About me</h2>
          <p className="about__description" id="about__descriptionid">
            <label>Independent Web Developer</label>
            <br />
            <span>
              Hi! My name is Pankaj Yadav. I am from Mumbai, India. I'm currently engaged in different skills - say web
              dev., app dev., Graphic designing, etc. But my expertise is in web designing. I am determined to become a
              FullStack Web Developer & Programmer for working as a Professional Freelancer & Entrepreneur. I love
              coding, solving problems, and reading books. I'm very passionate and dedicated to my work and love to
              learn new things every day. I'm working hard to fulfill my dream. I believe there's no limit to learning!
            </span>
          </p>
          <button className="button btn_knowmore" id="knowmore_btn" onClick={knowMoreClick}>
            Know more
          </button>
        </div>

        <div className="sa2_r">
          <SkillProgress title="Front end development" percentage="90%" className="skill1" />
          <SkillProgress title="Back end development" percentage="80%" className="skill5" />
          <SkillProgress title="App development" percentage="70%" className="skill2" />
          <SkillProgress title="UI designing" percentage="90%" className="skill3" />
          <SkillProgress title="Graphic designing" percentage="80%" className="skill4" />
        </div>
      </div>
    </section>
  );
};

const SkillProgress = ({ title, percentage, className }) => {
  return (
    <div>
      <p>{title}</p>
      <div className="container_pb">
        <span>{percentage}</span>
        <div className={`skill ${className}`}></div>
      </div>
    </div>
  );
};

export default About;
