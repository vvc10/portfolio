import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './components/css/styles.css';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Contact from './components/Contact';
import DevProjects from './components/DevProjects';
import DesignProjects from './components/DesignProjects';
import vidbg from './components/img/bgvid.mp4';

function App() {
  const repositoryName = "portfolio";
  const repositoryOwner = "vvc10";

  fetch(
    `https://api.github.com/repos/${repositoryOwner}/${repositoryName}/commits`
  )
    .then(response => response.json())
    .then(data => {
      const lastCommitDate = new Date(data[0].commit.committer.date);
      document.getElementById("last-commit-date").innerHTML =
        "Last push on " + lastCommitDate.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });
    });



  return (
    <Router>
      <div className="absolute top-0 w-full h-full">
        {/* Background Video */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src={vidbg} type="video/mp4" />
          </video>
        </div>

        <div className='w-[100%] bg-[#15161af5] text-center py-[5px] text-[gray] text-[10px] italic' id='last-commit-date'></div>

        <div className="md:flex flex-col md:flex-row w-full h-full bg-[#15161af5] pl-0 md:pl-[5%]">
          <Sidebar />
          <main className="w-[100%] h-[100%] bg-[#15161af5] overflow-y-scroll pb-[90px] md:pb-[50px]">
            <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/projects" element={<DevProjects />} />
              <Route path="/designprojects" element={<DesignProjects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
