import {
  wallet,
  rocket,
  aeroplane,
  profile,
  add,
  clock,
} from "../assets/index";

export interface NavItem {
  name: String;
  icon: Boolean;
}

const navList: NavItem[] = [
  {
    name: "Home",
    icon: false,
  },
  {
    name: "About",
    icon: false,
  },
  {
    name: "Features",
    icon: true,
  },
  {
    name: "Pages",
    icon: true,
  },
  {
    name: "Blog",
    icon: false,
  },
  {
    name: "Contact",
    icon: false,
  },
];

export interface ValueItem {
  icon: any;
  title: String;
  description: String;
}

const ValueList: ValueItem[] = [
  {
    icon: profile,
    title: "Patients come first",
    description:
      "Contrary to popular belief, Ipsum is not simply random text. It has roots in a piece.",
  },
  {
    icon: wallet,
    title: "Competitive salary",
    description:
      "Contrary to popular belief, Ipsum is not simply random text. It has roots in a piece.",
  },
  {
    icon: rocket,
    title: "Career growth",
    description:
      "Contrary to popular belief, Ipsum is not simply random text. It has roots in a piece.",
  },
  {
    icon: aeroplane,
    title: "Holidays & Parental",
    description:
      "Contrary to popular belief, Ipsum is not simply random text. It has roots in a piece.",
  },
  {
    icon: clock,
    title: "Flexible hours",
    description:
      "Contrary to popular belief, Ipsum is not simply random text. It has roots in a piece.",
  },
  {
    icon: add,
    title: "Medical insurance",
    description:
      "Contrary to popular belief, Ipsum is not simply random text. It has roots in a piece.",
  },
];

const AboutLines: String[] = [
  "You are going to use a passage of Lorem Ipsum, you need to be",
  "Sure there isn't embarrassing hidden in the middle of text. All the",
  "Lorem Ipsum generators on the Internet tend to repeat predefined",
  "Chunks as necessary, making this the first true generator ",
];

const WeOffer: String[] = [
  "Gross salary starting at 1,500 EUR/month",
  "Remote workplace (work from anywhere – you can chill in the Bahamas in your pyjamas!",
  "A growth-oriented tribe. We value health, awareness, consciousness and enjoy being Human",
  "Position in one of the fastest-growing startups in Lithuania",
  "Constant learning (500 EUR yearly budget for training to keep you sharp-minded)",
  "Remote workplace (work from anywhere – you can chill in the Bahamas in your pyjamas!)",
];

const pages: String[] = [
  "Home",
  "About Us",
  "Integrations",
  "Pricing",
  "Features",
  "Contact Us",
];

const utility: String[] = [
  "Password",
  "Protected",
  "404 Not Found",
  "Style Guide",
  "Licenses",
  "Changelog",
];

export interface JobIntr {
  _id: any,
  role: String,
  location: String,
  jobtype: String,
  aboutdesc: String,
  aboutPoints: [String],
  offersdesc: String,
  offersPoints: [String],
  name: String,
  email: String,
  contact: String,
}

export { navList, ValueList, AboutLines, WeOffer, pages, utility };
