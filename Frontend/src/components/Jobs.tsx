import { Link } from "../../node_modules/react-router-dom/dist/index";
import { JobIntr } from "../constants";

const JobPost = ({
  _id,
  role,
  location,
  jobtype,
}: JobIntr) => {
  return (
    <div className="border-[1px] border-secondary4 px-[20px] py-[40px] cursor-pointer rounded-xl flex flex-col items-start justify-start group hover:bg-primary1 hover:border-transparent">
      <h4 className="font-nunito font-bold text-xl group-hover:text-secondary5">
        {role}
      </h4>
      <div className="flex items-center font-nunito text-sm gap-x-4 group-hover:text-secondary5">
        <p>{location}</p>
        <p>|</p>
        <p className="text-primary1 group-hover:text-secondary5">{jobtype}</p>
      </div>
      <p className="items-center font-nunito text-md text-secondary4 mt-[16px] group-hover:text-secondary5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quis
        non animi vero.
      </p>
      <Link to={`/job/${_id}`}>
        <div className="bg-secondary5 border-[1px] flex items-center justify-center text-sm font-semibold text-primary2 rounded-[39px]  px-[30px] py-[16px] mt-[40px]">
          Apply Now
        </div>
      </Link>
    </div>
  );
};

const Jobs = ({ jobs }: any) => {
  return (
    <div className="flex flex-col items-center mt-32">
      <h2 className="font-black font-nunito text-3xl mt-[10px]">
        Current job open positions
      </h2>

      {/* <div className="bg-primary1 md:flex hidden items-center justify-center text-sm font-semibold text-white rounded-[39px] max-w-[140px] px-[40px] py-[16px]">
        Add Job
      </div> */}

      <div className="grid md:grid-cols-2 grid-cols-1 mt-[20px] gap-6">
        {jobs?.map((job: JobIntr, index: any) => (
          <JobPost {...job} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
