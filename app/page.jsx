import { NavigationBar } from "./components/NavigationBar.jsx";
import { AvatarCircle } from "./components/AvatarCircle.jsx";

export default function Home() {
  return (
    <div className="bg-slate-100">
      <NavigationBar
        title={"Jonathan Levy"}
        firstOption={"About"}
        secondOption={"Experience"}
        thirdOption={"Portfolio"}
      />
      <div className="flex justify-center text-center mt-5">
        <div className="w-2/5 flex">
          <AvatarCircle
            imgSrc={"/images/photo-personal-portrait.jpg"}
            alt={"Personal Potrait of Jonathan Levy"}
          />
          <p className="flex italic items-center">
            Hi, I'm Jonathan.<br></br>
            Senior Computer Science Major at the University of Florida.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <h2 className="font-bold text-2xl">About Me</h2>
      </div>
    </div>
  );
}
