import { call, mail } from "../assets/index";
import { pages, utility } from "../constants/index";
import styles from "../styles";

const Footer = () => {
  return (
    <footer className="md:px-32 md:py-8 px-8">
      <div className="h-[1px] bg-secondary4 shadow-sm opacity-20"></div>
      <div className="py-24 flex md:flex-row flex-col items-start justify-between">
        <div className="md:max-w-[30%] ">
          <span className="font-bold text-primary2 text-xl">XeroCodee</span>
          <p className="text-md text-secondary4 font-nunito mt-8">
            You get just what you need to run your cloud workloads--no more, no
            less. Deploy from our single pane of glass, manage them with ease
            and scale up as fast as your workload grows . . .
          </p>
          <ul className="mt-8">
            <li className="flex items-start gap-x-2">
              <img src={mail} alt="mail" className="w-[20px] h-[20px] mt-2" />
              <div className="flex flex-col items-start">
                <span className={`${styles.footeritem}`}>
                  hello@xerocodee.com
                </span>
                <span className={`${styles.footeritem}`}>
                  xerocodee@gmail.com
                </span>
              </div>
            </li>
            <li className="flex items-start gap-x-2">
              <img src={call} alt="call" className="w-[20px] h-[20px] mt-2" />
              <div className="flex flex-col items-start">
                <span className={`${styles.footeritem}`}>+987 6541 3654</span>
                <span className={`${styles.footeritem}`}>+001 6547 6589</span>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <span className="font-bold text-primary2 text-xl">Pages</span>
          <div className="h-[1px] bg-secondary4 shadow-sm opacity-20 mt-8"></div>

          <ul className="mt-[30px]">
            {pages.map((line, index) => (
              <li
                key={index}
                className="text-md text-secondary4 font-nunito [word-spacing:2px] mb-[14px] hover:text-primary1 hover:font-extrabold cursor-pointer"
              >
                {line}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="font-bold text-primary2 text-xl">Utility Pages</span>
          <div className="h-[1px] bg-secondary4 shadow-sm opacity-20 mt-8"></div>

          <ul className="mt-[30px]">
            {utility.map((line, index) => (
              <li
                key={index}
                className="text-md text-secondary4 font-nunito [word-spacing:2px] mb-[14px]"
              >
                {line}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-[20px] bg-secondary1 rounded-lg md:max-w-[30%]">
          <span className="font-nunito text-xs font-[800] text-primary1">
            Getting Started
          </span>
          <h3 className="font-[800] text-primary2 text-xl font-nunito">
            Infrastructure Automation & Compliance
          </h3>
          <p className="text-sm text-secondary4 font-nunito">
            With a few clicks, you can integrate your preferred DevOps tools to
            enable Single Pane of Glass DevOps
          </p>
          <div className="flex items-center gap-x-4 mt-10">
            <div className="bg-secondary3 md:flex hidden items-center justify-center text-sm font-semibold text-white rounded-[39px] max-w-[140px] px-[40px] py-[16px]">
              Google
            </div>
            <div className="bg-secondary1 md:flex hidden items-center justify-center text-sm font-semibold text-secondary3 border-[1px] border-secondary3 rounded-[39px] max-w-[140px] px-[40px] py-[16px]">
              Github
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
