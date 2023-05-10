import { ValueList } from "../constants/index";
import { ValueItem } from "../constants/index";

const ValueItemCard = ({ icon, title, description }: ValueItem) => {
  return (
    <div className="flex flex-col justify-between items-start border-none px-[20px] py-[40px] shadow-3xl rounded-[20px] gap-y-4">
      <img src={icon} alt="icon" className="h-[70px] w-[70px]"/>
      <h3 className={`font-bold text-primary2 text-[18px] font-nunito`}>{title}</h3>
      <p className={`text-secondary4`}>{description}</p>
    </div>
  );
};

const Values = () => {
  return (
    <div className="flex flex-col items-center mt-[70px]">
      <div className="flex flex-col items-center">
        <div className="bg-secondary2 flex items-center justify-center text-sm font-semibold text-primary1 rounded-[39px] max-w-[140px] px-[40px] py-[16px]">
          Values
        </div>
        <h2 className="font-[600] font-nunito text-3xl mt-[10px]">
          Values that define us
        </h2>
      </div>
      <div className="grid md:grid-rows-2 md:grid-cols-3 grid-cols-1 mt-[30px] gap-4">
        {ValueList.map((item, index) => (
          <ValueItemCard key = {index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Values;
