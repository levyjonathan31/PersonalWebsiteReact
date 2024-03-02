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
      <p className="text-l w-3/4 mx-auto bg-slate-300 text-center">
        As a Senior majoring in Computer Science at the University of Florida, I
        am actively seeking full-time opportunities in Software Engineering and
        Data Science. My passion lies in developing software solutions that
        directly impact and improve lives. I particularly enjoy working on
        full-stack projects because they allow me to create applications that
        directly interact with users. I am also passionate about machine
        learning and data science, as I believe that they have the potential to
        revolutionize industries and vastly improve the human experience.{" "}
        <br></br> <br></br>If you are interested in learning more about me,
        please feel free to reach out to me via LinkedIn or my contact
        information in my resume. I am always open to new opportunities and
        connections.
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
            title={"Electric Company Practicum Project"}
            description={
              "Data Scientist for the Electric Company Practicum Project. Working with 5 other undergraduate students to develop a machine learning model to predict voltage sags."
            }
            technologies={"Dec 2023 - Present"}
            image={"/images/electric-icon.png"}
            altText={"Reactonaut Logo"}
            link={""}
            buttonTitle={"GitHub"}
          />
          <Card
            title={"Reactonaut"}
            description={
              "Full Stack Developer for Early Stage Startup Reactonaut. Worked in a small team to develop a web application for helping users learn React."
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
      <div className="w-3/4 divider before:bg-black after:bg-black mx-auto mt-14"></div>
      <div className="text-center">
        <h2 className="font-bold text-3xl mb-5" id="Portfolio">
          Portfolio
        </h2>
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
            title={"Geometry Dash AI"}
            technologies={"Python, Keras, Rainbow DQN"}
            description={
              "Using Reinforcement Learning to train an AI to develop a Geometry Dash bot capable of playing any level. Built with Python, Keras, and Rainbow DQN."
            }
            image={"/images/geo-dash-icon.png"}
            altText={"Manim Logo"}
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
        </div>
        <div className="lg:flex justify-center">
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
            title={"Focus Fracture"}
            technologies={"React, Node.js, Express, MongoDB"}
            description={
              "MERN Stack Web Application for tracking tasks. Learned how to use a REST API to perform CRUD operations."
            }
            image={"/images/task-image.png"}
            altText={"Task Image"}
            link={"https://github.com/levyjonathan31/focus-fracture"}
            buttonTitle={"GitHub"}
          />
          <Card
            title={"Autoencoder"}
            technologies={"Python, PyTorch"}
            description={
              "Autoencoder for Fashion MNIST built with PyTorch. Adjusted hyperparamets to improve accuracy."
            }
            image={"/images/autoencoder-image.png"}
            altText={"Autoencoder Image"}
            link={"https://github.com/levyjonathan31/MMLFinalProject"}
            buttonTitle={"GitHub"}
          />
        </div>
        <div className="lg:flex justify-center">
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
          <Card
            title={"Protest Plots"}
            technologies={"React"}
            description={
              "Website for organizing protests built with React. I was responsible for the functionality of the buttons."
            }
            image={"/images/protestplots-image.png"}
            altText={"Protest Plots Image"}
            link={"https://github.com/tiffdefaria/ProtestPlots-app:"}
            buttonTitle={"GitHub"}
          />
        </div>
        <div className="lg:flex justify-center">
          <Card
            title={"Former Personal Website"}
            technologies={"HTML, CSS"}
            description={
              "Personal Website built with HTML and CSS. My first wesbite... I have come a long way since then!"
            }
            image={"/images/personal-icon.png"}
            link={"https://github.com/levyjonathan31/levyjonathan31.github.io"}
            buttonTitle={"GitHub"}
          />
          <Card
            title={"You Owe Me"}
            technologies={"C++, SFML"}
            description={
              "C++ Application for reducing transactions to resolve debts between friends."
            }
            image={"/images/you-owe-me-image.png"}
            altText={"You Owe Me Image"}
            link={"https://github.com/akutuva21/You-Owe-Me"}
            buttonTitle={"GitHub"}
          />
          <Card
            title={"Minesweeper"}
            technologies={"C++, SFML"}
            description={
              "Minesweeper Game built with C++ and SFML. Adhered to all the rules of the game."
            }
            image={"/images/minesweeper-image.png"}
            altText={"Minesweeper Image"}
            link={"https://github.com/levyjonathan31/Minesweeper-Project"}
            buttonTitle={"GitHub"}
          />
        </div>
        <div>&nbsp;</div>
      </div>
    </div>
  );
}
