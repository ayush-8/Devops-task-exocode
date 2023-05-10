import { hero1, hero2 } from "../assets/index";

const PicContainer = ({ pic }: any) => {
  return (
    <div className={`rounded-3xl overflow-hidden max-h-[400px]`}>
      <img src={pic} alt="hero image" className="overflow-hidden"/>
    </div>
  );
};

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-primary2 text-[64px] font-bold font-nunito">
          Careers
        </h1>
        <p className="max-w-[460px] text-center font-nunito text-[16px] text-secondary4 font-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          repudiandae vero molestias est.
        </p>
        <div className="bg-primary1 flex items-center justify-center text-sm font-light mt-[30px] text-white rounded-[39px] px-[50px] py-[10px]">
          Browse Open Positions
        </div>
      </div>
      <div className="flex items-start mt-[30px] justify-center gap-x-6">
        <PicContainer pic={hero1} />
        <PicContainer pic={hero2} />
      </div>
    </>
  );
};

export default Hero;
