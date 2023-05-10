import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { JobIntr } from "../constants/index";
import axios from "axios";

const JobDetail = ({
  aboutdesc,
  aboutPoints,
  offersdesc,
  offersPoints,
  name,
  email,
  contact,
}: JobIntr) => {
  return (
    <div className="mt-[40px] bg-secondary1 rounded-xl w-full py-[60px] px-[50px]">
      <div>
        <div className="flex md:flex-row flex-col-reverse items-center justify-between">
          <h3 className="text-xl font-extrabold font-nunito">About the role</h3>
          <p className="text-sm font-nunito font-light">
            <span className="text-md font-bold text-secondary4">Posted</span>:
            25 November, 2023
          </p>
        </div>
        <p className="text-secondary4 font-xs mt-[20px] leading-12">
          {aboutdesc}
        </p>
        <ul className="list-disc list-inside mt-[30px] marker:text-secondary3">
          {aboutPoints?.map((line, index) => (
            <li
              key={index}
              className="text-md text-secondary4 font-nunito [word-spacing:2px] mb-[14px]"
            >
              {line}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-[50px]">
        <h3 className="text-xl font-extrabold font-nunito">
          If the feeling is mutual, we offer:
        </h3>
        <p className="text-secondary4 font-xs mt-[20px] leading-12">
          {offersdesc}
        </p>
        <ul className="list-disc list-inside mt-[30px] marker:text-secondary3">
          {offersPoints?.map((line, index) => (
            <li
              key={index}
              className="text-md text-secondary4 font-nunito [word-spacing:2px] mb-[14px]"
            >
              {line}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-extrabold font-nunito mt-8">Contact Us!</h3>
        <p className="mt-[20px] font-xs text-secondary4">
          Reach out to discuss the opportunity & send your answers to:
        </p>
        <div className="flex flex-col items-start justify-start mt-[20px]">
          <span className="font-bold text-secondary3 font-nunito">{name}</span>
          <span className="font-xs text-secondary4">{email}</span>
          <span className="font-xs text-secondary4">{contact}</span>
        </div>
      </div>
      <div className="bg-secondary3 text-secondary1 max-w-[200px] border-[1px] flex items-center justify-center text-sm font-semibold rounded-[39px] px-[30px] py-[16px] mt-[40px]">
        Apply Now
      </div>
    </div>
  );
};

const Job = () => {
  const location = useLocation();
  const jobId = location.pathname.split("/")[2];

  const [job, setJob] = useState<JobIntr | null>(null);

  const getJob = async () => {
    try {
      const res = await axios.get(`https://job-api-one.vercel.app/v1/job/${jobId}`);
      if (res.status === 200) {
        setJob(res.data);
      }
    } catch (err: any) {
      alert(err.message);
    }
  };

  useEffect(() => {
    getJob();
  }, []);

  return (
    <>
      {job != null ? (
        <>
          <div className={`md:px-32 py-8 px-8`}>
            <div className="flex flex-col items-center pt-[70px]">
              <h1 className="text-primary2 text-[56px] font-extrabold font-nunito">
                {job.role}
              </h1>
              <div className="flex items-center font-nunito text-sm gap-x-4 group-hover:text-secondary5">
                <p>{job.location}</p>
                <p>|</p>
                <p className="text-primary1 group-hover:text-secondary5">
                  {job.jobtype}
                </p>
              </div>
              <div className="bg-primary1 border-[1px] flex items-center justify-center text-sm font-semibold rounded-[39px] text-white px-[30px] py-[16px] mt-[40px]">
                Apply Now
              </div>
              <JobDetail {...job} />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Job;
