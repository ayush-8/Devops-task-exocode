import { useState, useEffect } from "react";
import { Hero, Values } from "../components/index";
import Jobs from "../components/Jobs";
import axios from "axios";
import { JobIntr } from "../constants";

const Home = () => {
  const [toggle, setToggle] = useState<Boolean>(false);
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [jobtype, setJobtype] = useState("");
  const [aboutDesc, setAboutDesc] = useState("");
  const [aboutDetails, setAboutDetails] = useState("");
  const [offersDesc, setOffersDesc] = useState("");
  const [offersDetails, setOffersDetails] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log({
      role,
      location,
      jobtype,
      aboutDesc,
      aboutDetails,
      offersDesc,
      offersDetails,
      name,
      email,
      contact,
    });

    if (
      !role ||
      !location ||
      !jobtype ||
      !aboutDesc ||
      !aboutDetails ||
      !offersDesc ||
      !offersDetails ||
      !name ||
      !email ||
      !contact
    ) {
      alert("Fields cannot be Empty");
      return;
    }

    try {
      const res = await axios.post("https://job-api-one.vercel.app/v1/add", {
        role: role,
        location: location,
        jobtype: jobtype,
        aboutdesc: aboutDesc,
        aboutdetails: aboutDetails,
        offersdesc: offersDesc,
        offersdetails: offersDetails,
        name: name,
        email: email,
        contact: contact,
      });

      if (res.status === 201) {
        alert("New Job Added Successfully");
        fetchAllJobs();
      }
    } catch (err: any) {
      alert(err.message);
    } finally {
      setRole("");
      setAboutDesc("");
      setLocation("");
      setEmail("");
      setContact("");
      setAboutDetails("");
      setOffersDetails("");
      setOffersDesc("");
      setJobtype("");
      setName("");
      setToggle((prev) => !prev);
    }
  };

  const [jobs, setJobs] = useState<[JobIntr] | null>(null);

  useEffect(() => {
    fetchAllJobs();
  }, []);

  const fetchAllJobs = async () => {
    try {
      const res = await axios.get("https://job-api-one.vercel.app/v1/all");

      if (res.status === 200) {
        setJobs(res.data);
      }
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div
      className={`md:px-32 md:py-8 px-8 relative flex flex-col items-center`}
    >
      <Hero />
      <Values />
      <Jobs jobs={jobs} />
      <div className="flex items-start w-full">
        <div
          className={`${
            toggle ? "bg-secondary3" : "bg-primary1"
          } md:flex hidden items-center justify-center text-sm font-semibold text-white rounded-[39px] max-w-[140px] px-[40px] py-[16px] mt-12 cursor-pointer`}
          onClick={handleToggle}
        >
          {toggle ? "Close" : "Add Job"}
        </div>
      </div>

      {toggle ? (
        <div
          className={`bg-secondary1 w-[900px]  rounded-xl absolute bottom-[100px] py-16 px-8 flex}`}
        >
          <h3 className="font-[600] font-nunito text-3xl mt-[10px] flex items-center justify-center">
            Job Details
          </h3>
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto font-nunito"
          >
            <div className="mb-4">
              <label htmlFor="role" className="block font-medium mb-2">
                Role:
              </label>
              <input
                type="text"
                id="role"
                name="role"
                value={role}
                onChange={(event) => setRole(event.target.value)}
                required
                className="w-full px-3 py-2 rounded-lg border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="location" className="block font-medium mb-2">
                Location:
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                required
                className="w-full px-3 py-2 rounded-lg border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <span className="block font-medium mb-2">Job Type:</span>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="part-time"
                  name="jobtype"
                  value="Part Time"
                  checked={jobtype === "Part Time"}
                  onChange={(event) => setJobtype(event.target.value)}
                  required
                  className="mr-2"
                />
                <label htmlFor="part-time" className="mr-6">
                  Part Time
                </label>
                <input
                  type="radio"
                  id="full-time"
                  name="jobtype"
                  value="Full Time"
                  checked={jobtype === "Full Time"}
                  onChange={(event) => setJobtype(event.target.value)}
                  required
                  className="mr-2"
                />
                <label htmlFor="full-time">Full Time</label>
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="aboutDesc" className="block font-medium mb-2">
                About Description:
              </label>
              <textarea
                id="aboutDesc"
                name="aboutDesc"
                value={aboutDesc}
                onChange={(event) => setAboutDesc(event.target.value)}
                required
                className="w-full px-3 py-2 rounded-lg border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="aboutDetails" className="block font-medium mb-2">
                About Details (Seperate Poings by ,):
              </label>
              <textarea
                id="aboutDetails"
                name="aboutDetails"
                value={aboutDetails}
                onChange={(event) => setAboutDetails(event.target.value)}
                required
                className="w-full px-3 py-2 rounded-lg border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="offersDesc" className="block font-medium mb-2">
                What we Offer Description:
              </label>
              <textarea
                id="offersDesc"
                name="offersDesc"
                value={offersDesc}
                onChange={(event) => setOffersDesc(event.target.value)}
                required
                className="w-full px-3 py-2 rounded-lg border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="offersDetails" className="block font-medium mb-2">
                What we Offers Details (Seperate Poings by ,):
              </label>
              <textarea
                id="offersDetails"
                name="offersDetails"
                value={offersDetails}
                onChange={(event) => setOffersDetails(event.target.value)}
                required
                className="w-full px-3 py-2 rounded-lg border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-2">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                className="w-full px-3 py-2 rounded-lg border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="w-full px-3 py-2 rounded-lg border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="contact" className="block font-medium mb-2">
                Contact:
              </label>
              <input
                type="tel"
                id="contact"
                name="contact"
                value={contact}
                onChange={(event) => setContact(event.target.value)}
                required
                className="w-full px-3 py-2 rounded-lg border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Home;
