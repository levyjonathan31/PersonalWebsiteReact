import { NavigationBar } from "./components/NavigationBar.jsx";
import { AvatarCircle } from "./components/AvatarCircle.jsx";

export default function Home() {
  return (
    <div className="bg-slate-300 text-black">
      <NavigationBar
        title={"Jonathan Levy"}
        firstOption={"About"}
        secondOption={"Experience"}
        thirdOption={"Portfolio"}
      />
      <div className="flex justify-center text-center mt-10">
        <div className="w-1/2 flex">
          <AvatarCircle
            imgSrc={"/images/photo-personal-portrait.jpg"}
            alt={"Personal Potrait of Jonathan Levy"}
          />
          <p className="flex italic items-center mx-5 text-xl">
            Hi, I'm Jonathan.<br></br>
            Senior Computer Science Major at the University of Florida.
          </p>
        </div>
      </div>
      <div className="w-3/4 divider before:bg-black after:bg-black mx-auto mt-12"></div>
      <div className="text-center">
        <h2 className="font-bold text-3xl mb-5">About Me</h2>
        <p className="text-xl w-1/2 mx-auto bg-slate-300">
          I am a senior at the University of Florida majoring in Computer
          Science. I am currently looking for full-time opportunities in
          Software Engineering.
        </p>
      </div>
      <div className="w-3/4 divider before:bg-black after:bg-black mx-auto mt-12"></div>
      <div className="text-center">
        <h2 className="font-bold text-3xl mb-5">Experience</h2>
        <div className="flex justify-evenly">
          <div className="card w-96 bg-slate-500 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="/images/osc-logo.png"
                alt="Open Source Club Logo"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Open Source Club</h2>
              <p>Technical Lead of the Manim Project</p>
              <div className="card-actions">
                <a className="btn btn-primary" href="https://github.com/ufosc">
                  OSC Github
                </a>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-slate-500 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="/images/osc-logo.png"
                alt="Open Source Club Logo"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Open Source Club</h2>
              <p>Technical Lead of the Manim Project</p>
              <div className="card-actions">
                <a className="btn btn-primary" href="https://github.com/ufosc">
                  OSC Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/4 divider before:bg-black after:bg-black mx-auto mt-12"></div>
      <div className="text-center">
        <h2 className="font-bold text-3xl mb-5">Portfolio</h2>
      </div>
    </div>
  );
}
