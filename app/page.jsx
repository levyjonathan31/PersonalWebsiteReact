import { NavigationBar } from "./components/NavigationBar.jsx";
import { AvatarCircle } from "./components/AvatarCircle.jsx";
import { Card } from "./components/Card.jsx";

export default function Home() {
  return (
    <div className="bg-slate-300 text-black">
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
          <p className="italic mx-5 lg:text-xl">Hello, I'm</p>
          <p className="text-3xl font-bold my-2">Jonathan Levy</p>
          <p className="text-3xl text-slate-500">Software Developer</p>
        </div>
      </div>
      <div className="w-3/4 divider before:bg-black after:bg-black mt-14 mx-auto"></div>
      <h2 className="font-bold text-3xl mb-5 text-center" id={"About"}>
        About Me
      </h2>
      <p className="text-xl w-3/4 mx-auto bg-slate-300 text-center">
        I am a Senior at the University of Florida majoring in Computer Science.
        I am currently looking for full-time opportunities in Software
        Engineering. My interests include Machine Learning and Full Stack.
        {/* <br></br>
        <br></br>Click my name at the top of the page to learn more about me! */}
      </p>
      <div className="w-3/4 divider before:bg-black after:bg-black mt-14 mx-auto"></div>
      <div className="text-center">
        <h2 className="font-bold text-3xl mb-5" id="Experience">
          Experience
        </h2>
        <div className="lg:flex justify-center ">
          <Card
            title={"Open Source Club"}
            dateRange={"March 2023 - Present"}
            description={"Technical Lead for Manim project"}
            image={"/images/osc-logo.png"}
            altText={"Open Source Club Logo"}
            link={"https://github.com/ufosc"}
            buttonTitle={"GitHub"}
          />
          <Card
            title={"Reactonaut"}
            description={
              "Full Stack Developer for Early Stage Startup Reactonaut"
            }
            dateRange={"July 2023 - August 2023"}
            image={"/images/reactonaut-logo.png"}
            altText={"Reactonaut Logo"}
            link={"https://github.com/asj9469/Reactonaut"}
            buttonTitle={"GitHub"}
          />
        </div>
      </div>
      <div className="w-3/4 divider before:bg-black after:bg-black mx-auto mt-14"></div>
      <div className="text-center">
        <h2 className="font-bold text-3xl mb-5" id="Portfolio">
          Portfolio
        </h2>
        <div className="lg:flex justify-center">
          <Card
            title={"Personal Website"}
            dateRange={"September 2023 - Present"}
            description={"Personal Website built with React and TailwindCSS"}
            image={"/images/react-logo.png"}
            altText={"React Logo"}
            link={"https://github.com/levyjonathan31/PersonalWebsiteReact"}
            buttonTitle={"GitHub"}
          />
          <Card
            title={"Focus Fracture"}
            dateRange={"May 2023 - July 2023"}
            description={
              "MERN Stack Web Application for tracking tasks built with React, Node.js, Express, and MongoDB"
            }
            image={"/images/task-image.png"}
            altText={"Task Image"}
            link={"https://github.com/levyjonathan31/focus-fracture"}
            buttonTitle={"GitHub"}
          />
          <Card
            title={"Autoencoder"}
            dateRange={"April 2023 - May 2023"}
            description={"Autoencoder for Fashion MNIST built with PyTorch"}
            image={"/images/autoencoder-image.png"}
            altText={"Autoencoder Image"}
            link={"https://github.com/levyjonathan31/MMLFinalProject"}
            buttonTitle={"GitHub"}
          />
        </div>
        <div className="lg:flex justify-center">
          <Card
            title={"Manim"}
            dateRange={"March 2023 - Present"}
            description={
              "Open Source Project for creating computer animations built with Python and Manim Library"
            }
            image={"/images/manim-logo.png"}
            altText={"Manim Logo"}
            link={"https://github.com/ufosc/manim-data-structures"}
            buttonTitle={"GitHub"}
          />
          <Card
            title={"Manuela"}
            dateRange={"March 2023"}
            description={
              "AI Counselor Hackathon Project for RoboTech 2023 built with Python"
            }
            image={"/images/manuela-image.png"}
            altText={"Manuela Logo"}
            link={"https://github.com/ByteOfKathy/manuela"}
            buttonTitle={"GitHub"}
          />
          <Card
            title={"Former Personal Website"}
            dateRange={"November 2022 - September 2023"}
            description={"Personal Website built with HTML and CSS"}
            image={"/images/personal-icon.png"}
            link={"https://github.com/levyjonathan31/levyjonathan31.github.io"}
            buttonTitle={"GitHub"}
          />
        </div>
        <div className="lg:flex justify-center">
          <Card
            title={"Protest Plots"}
            dateRange={"September 2022 - December 2022"}
            description={"Website for organizing protests built with React"}
            image={"/images/protestplots-image.png"}
            altText={"Protest Plots Image"}
            link={"https://github.com/tiffdefaria/ProtestPlots-app:"}
            buttonTitle={"GitHub"}
          />
          <Card
            title={"You Owe Me"}
            dateRange={"July 2022 - August 2022"}
            description={
              "C++ Application for reducing transactions to resolve debts between friends"
            }
            image={"/images/you-owe-me-image.png"}
            altText={"You Owe Me Image"}
            link={"https://github.com/akutuva21/You-Owe-Me"}
            buttonTitle={"GitHub"}
          />
          <Card
            title={"Minesweeper"}
            dateRange={"July 2021 - August 2021"}
            description={"Minesweeper Game built with C++"}
            image={"/images/minesweeper-image.png"}
            altText={"Minesweeper Image"}
            link={"https://github.com/levyjonathan31/Minesweeper-Project"}
            buttonTitle={"GitHub"}
          />
        </div>
      </div>
    </div>
  );
}
