"use client";

import { NavigationBar } from "./components/NavigationBar.jsx";
import { AvatarCircle } from "./components/AvatarCircle.jsx";
import { Card } from "./components/Card.jsx";
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

export default function Home() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const [constructionProgress, setConstructionProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(true);
  const [activeTab, setActiveTab] = useState('ml-ai');
  
  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      try {
        vantaEffect.current = NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xff0000,
          backgroundColor: 0x0a0f1c,
          points: 20.00,
          maxDistance: 1.00,
          spacing: 15.00
        });

        // Animate maxDistance from 3 to 22 (desktop) or 20 (mobile) over 25 seconds
        const animateMaxDistance = () => {
          const duration = 25000; 
          const startValue = 3;
          const isMobile = window.innerWidth < 640; // sm breakpoint
          const endValue = isMobile ? 15 : 22;
          const startTime = Date.now();
          
          // Update points for mobile
          if (isMobile && vantaEffect.current) {
            vantaEffect.current.setOptions({
              points: 10.00
            });
          }
          
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Simple linear animation
            const currentValue = startValue + (endValue - startValue) * progress;
            
            // Update progress state for the indicator (1-100%)
            const progressPercentage = Math.round(progress * 100);
            setConstructionProgress(progressPercentage);
            
            if (vantaEffect.current) {
              vantaEffect.current.setOptions({
                maxDistance: currentValue
              });
            }
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              // Hide progress indicator when animation is complete
              setTimeout(() => setShowProgress(false), 1000);
            }
          };
          
          requestAnimationFrame(animate);
        };
        
        // Start animation after a short delay
        setTimeout(animateMaxDistance, 1000);
        
      } catch (error) {
        console.error('Vanta.js initialization error:', error);
      }
    }

    return () => {
      if (vantaEffect.current) {
        try {
          vantaEffect.current.destroy();
        } catch (error) {
          console.error('Error destroying Vanta effect:', error);
        } finally {
          vantaEffect.current = null;
        }
      }
    };
  }, []);

  return (
    <>
      {/* Neural Net Construction Progress Indicator */}
      {showProgress && (
        <div className={`fixed top-20 right-2 sm:right-4 z-50 bg-slate-900/80 backdrop-blur-sm border border-red-500/50 rounded-lg p-3 text-white transition-opacity duration-1000 max-w-[calc(100vw-16px)] sm:max-w-[250px] ${constructionProgress >= 100 ? 'opacity-0' : 'opacity-100'}`}>
          <div className="flex items-center gap-2">
            <div className="animate-pulse">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
            <span className="text-xs sm:text-sm font-mono">Constructing Network</span>
          </div>
          <div className="text-lg sm:text-xl font-bold text-red-400 mt-1">
            {constructionProgress}%
          </div>
          <div className="w-full bg-slate-700 rounded-full h-1 mt-2">
            <div 
              className="bg-red-500 h-1 rounded-full transition-all duration-300"
              style={{ width: `${constructionProgress}%` }}
            ></div>
          </div>
        </div>
      )}
      
      {/* Vanta Background - Separate element that won't interfere with content */}
      <div 
        ref={vantaRef} 
        className="fixed inset-0 w-full h-full overflow-hidden"
      />
      
      {/* Main Content - Completely separate from Vanta */}
      <div className="relative bg-slate-900/20 backdrop-blur-sm text-white min-h-screen w-full">
      <NavigationBar
        title={"Jonathan Levy"}
        firstOption={"About"}
        secondOption={"Experience"}
        thirdOption={"Portfolio"}
      />
      <div className="lg:flex justify-center text-center mt-10">
        <AvatarCircle
          imgSrc={"/images/photo-personal-portrait.jpg"}
          altText={"Potrait of Jonathan Levy"}
        />
        <div className="flex flex-col justify-center">
          <p className="italic mx-5 lg:text-xl text-slate-300">Hello, I'm</p>
          <p className="text-3xl font-bold my-2 text-white">Jonathan Levy</p>
          <p className="text-3xl text-blue-400">Software Developer</p>
        </div>
      </div>
      <div className="w-3/4 divider before:bg-blue-400 after:bg-blue-400 mt-14 mx-auto"></div>
      <h2 className="font-bold text-3xl mb-5 text-center text-white" id={"About"}>
        About Me
      </h2>
      <div className="w-3/4 mx-auto bg-slate-800/60 backdrop-blur-sm text-slate-200 text-center p-6 rounded-lg border border-blue-400/30 space-y-4">
        <p className="text-lg leading-relaxed">
          I'm a full-stack developer at BNY Pershing, where I build tools for financial services. 
          Currently, I'm working on Angular applications in a micro frontend setup, 
          improving data integration for better client insights, and writing SQL queries 
          to deliver the most relevant data to our clients.
        </p>
        
        <p className="text-lg leading-relaxed">
          Outside of work, I love tinkering with neural networks and experimenting with reinforcement learning algorithms like DQN. 
          There's something satisfying about training an AI to beat a game or solve a problem from scratch. 
          When I'm not coding, you'll probably find me gaming.
        </p>
      </div>
      <div className="w-3/4 divider before:bg-blue-400 after:bg-blue-400 mt-14 mx-auto"></div>
      <div className="text-center">
        <h2 className="font-bold text-3xl mb-5 text-white" id="Experience">
          Experience
        </h2>
        <div className="lg:flex justify-center mb-16">
          <div className="relative transform scale-110 lg:scale-125 group">
            {/* "Current Position" Badge - positioned on the actual card's top border */}
            <div className="absolute top-20 sm:top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition-transform duration-300 group-hover:-translate-y-6">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg transition-all duration-300 group-hover:shadow-xl">
                CURRENT
              </span>
            </div>
            <Card
              title={"BNY Pershing"}
              description={
                "Full Stack Developer at BNY Pershing. Building modern, scalable tools for financial services. Working with Angular and Java Spring Boot."
              }
              technologies={"August 2024 - Present"}
              image={"/images/bny-logo.png"}
              altText={"BNY Logo"}
              link={""}
              buttonTitle={""}
            />
          </div>
	  </div>
	  <div className="lg:flex justify-center">
          <Card
            title={"Electric Company Practicum Project"}
            description={
              "Data Scientist for the Electric Company Practicum Project. Working with 5 other undergraduate students to develop a machine learning model to predict voltage sags."
            }
            technologies={"Dec 2023 - April 2024"}
            image={"/images/electric-icon.png"}
            altText={"Reactonaut Logo"}
            link={""}
            buttonTitle={"GitHub"}
          />
          <Card
            title={"Reactonaut"}
            description={
              "Full Stack Developer Intern for Early Stage Startup Reactonaut. Worked in a small team to develop a web application for helping users learn React."
            }
            technologies={"July 2023 - Aug 2023"}
            image={"/images/reactonaut-logo.png"}
            altText={"Reactonaut Logo"}
            link={"https://github.com/asj9469/Reactonaut"}
            buttonTitle={"GitHub"}
          />
          <Card
            title={"Open Source Club"}
            technologies={"Jan 2023 - Present"}
            description={
              "Technical Lead for Manim project. Leading a team of students to develop a Manim plugin for creating computer science animations."
            }
            image={"/images/osc-logo.png"}
            altText={"Open Source Club Logo"}
            link={"https://github.com/ufosc"}
            buttonTitle={"GitHub"}
          />
        </div>
      </div>
      <div className="w-3/4 divider before:bg-blue-400 after:bg-blue-400 mx-auto mt-14"></div>
      <div className="text-center">
        <h2 className="font-bold text-3xl mb-8 text-white" id="Portfolio">
          Portfolio
        </h2>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-lg p-1 border border-blue-400/30">
            <button
              onClick={() => setActiveTab('ml-ai')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'ml-ai' 
                  ? 'bg-blue-500 text-white shadow-lg' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              ML & AI
            </button>
            <button
              onClick={() => setActiveTab('fullstack')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'fullstack' 
                  ? 'bg-blue-500 text-white shadow-lg' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              Web Dev
            </button>
            <button
              onClick={() => setActiveTab('opensource')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'opensource' 
                  ? 'bg-blue-500 text-white shadow-lg' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              Open Source
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {/* Machine Learning & AI Tab */}
          {activeTab === 'ml-ai' && (
            <div className="animate-in fade-in duration-300">
              <h3 className="text-xl font-semibold text-blue-400 mb-6">Machine Learning & AI</h3>
              <div className="lg:flex justify-center">
                <Card
                  title={"Geometry Dash AI"}
                  technologies={"Python, Keras, Rainbow DQN"}
                  description={
                    "Using Reinforcement Learning to train an AI to develop a Geometry Dash bot capable of playing any level. Built with Python, Keras, and Rainbow DQN."
                  }
                  image={"/images/geo-dash-icon.png"}
                  altText={"Geometry Dash AI"}
                  link={"https://github.com/levyjonathan31/GeometryDashBot"}
                  buttonTitle={"GitHub"}
                />
                <Card
                  title={"Numpy Convolutional Neural Network"}
                  technologies={"Python, Numpy, SciPy"}
                  description={
                    "Built a convolutional neural network from scratch using Numpy and SciPy for the purpose of learning the inner workings of neural networks."
                  }
                  image={"/images/neural-net-icon.png"}
                  link={"https://github.com/levyjonathan31/GoogleCollabCNN"}
                  buttonTitle={"GitHub"}
                />
                <Card
                  title={"Autoencoder"}
                  technologies={"Python, PyTorch"}
                  description={
                    "Autoencoder for Fashion MNIST built with PyTorch. Adjusted hyperparameters to improve accuracy."
                  }
                  image={"/images/autoencoder-image.png"}
                  altText={"Autoencoder Image"}
                  link={"https://github.com/levyjonathan31/MMLFinalProject"}
                  buttonTitle={"GitHub"}
                />
              </div>
            </div>
          )}

          {/* Full Stack Applications Tab */}
          {activeTab === 'fullstack' && (
            <div className="animate-in fade-in duration-300">
              <h3 className="text-xl font-semibold text-blue-400 mb-6">Web Development</h3>
              <div className="lg:flex justify-center">
                <Card
                  title={"DynaCV"}
                  technologies={"Vite, React, Flask, AWS RDS, MySQL, GoogleOAuth"}
                  description={
                    "Developing a Full Stack Web Application for creating and managing resumes with a few of my peers. Built with Vite, React, Flask, and AWS RDS."
                  }
                  image={"/images/resume-dyna-icon.png"}
                  altText={"Resume Image"}
                  link={"https://github.com/cbloodsworth/bedrock"}
                  buttonTitle={"GitHub"}
                />
                <Card
                  title={"Personal Website"}
                  technologies={"React, TailwindCSS"}
                  description={
                    "Personal Website built with React and TailwindCSS. It's what you are on right now!"
                  }
                  image={"/images/react-logo.png"}
                  altText={"React Logo"}
                  link={"https://github.com/levyjonathan31/PersonalWebsiteReact"}
                  buttonTitle={"GitHub"}
                />
                <Card
                  title={"Manuela"}
                  technologies={
                    "React, OpenCV, Google Text To Speech, Deepface Library"
                  }
                  description={
                    "AI Counselor Hackathon Project for RoboTech 2023 built with Python. Integrated voice and facial recognition input to provide mental health support."
                  }
                  image={"/images/manuela-image.png"}
                  altText={"Manuela Logo"}
                  link={"https://github.com/ByteOfKathy/manuela"}
                  buttonTitle={"GitHub"}
                />
              </div>
            </div>
          )}

          {/* Open Source Tab */}
          {activeTab === 'opensource' && (
            <div className="animate-in fade-in duration-300">
              <h3 className="text-xl font-semibold text-blue-400 mb-6">Open Source</h3>
              <div className="lg:flex justify-center">
                <Card
                  title={"Manim"}
                  technologies={"Python, Manim"}
                  description={
                    "Open Source Project for creating computer animations built with Python and Manim Library for the purpose of creating educational content."
                  }
                  image={"/images/manim-logo.png"}
                  altText={"Manim Logo"}
                  link={"https://github.com/ufosc/manim-data-structures"}
                  buttonTitle={"GitHub"}
                />
              </div>
            </div>
          )}
        </div>

        <div>&nbsp;</div>
      </div>
      
      <div className="w-3/4 divider before:bg-blue-400 after:bg-blue-400 mx-auto mt-14"></div>
      <div className="text-center">
        <h2 className="font-bold text-3xl mb-5 text-white" id="Contact">
          Contact Me
        </h2>
        <div className="w-3/4 mx-auto bg-slate-800/60 backdrop-blur-sm text-slate-200 text-center p-6 rounded-lg border border-blue-400/30">
          <p className="text-lg leading-relaxed">
            I love connecting with new people and discussing new ideas. I am always open to new opportunities 
            and collaborations, so don't hesitate to reach out if you have a project in mind or just want to chat!
          </p>
          <div className="mt-6">
            <a 
              href="https://www.linkedin.com/in/levyjonathan31/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
