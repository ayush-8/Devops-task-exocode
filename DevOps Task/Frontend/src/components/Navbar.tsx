import { navList } from "../constants/index";
import { NavItem } from "../constants/index";
import styles from "../styles";
const Navbar = () => {
  return (
    <nav
      className={`md:${styles.defaultPadding} ${styles.defaultPaddingMin} flex items-center justify-between`}
    >
      <div>
        <span className="font-bold text-primary2 text-xl">XeroCodee</span>
      </div>
      <div className="flex items-center justify-between gap-x-8">
        <ul className="sm:flex hidden items-center bg-secondary1 rounded-[39px] px-[40px] py-[16px] gap-x-8">
          {navList.map((link: NavItem, index) => (
            <li className="text-secondary3 font-medium text-sm flex items-center" key={index}>
              {link.name}
              {link.icon ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="512"
                  height="512"
                  viewBox="0 0 512 512"
                  id="down-arrow"
                  className="h-[12px] w-[12px]"
                >
                  <path d="M98.9 184.7l1.8 2.1 136 156.5c4.6 5.3 11.5 8.6 19.2 8.6 7.7 0 14.6-3.4 19.2-8.6L411 187.1l2.3-2.6c1.7-2.5 2.7-5.5 2.7-8.7 0-8.7-7.4-15.8-16.6-15.8H112.6c-9.2 0-16.6 7.1-16.6 15.8 0 3.3 1.1 6.4 2.9 8.9z"></path>
                </svg>
              ) : (
                ""
              )}
            </li>
          ))}
        </ul>
        <div className="bg-primary1 md:flex hidden items-center justify-center text-sm font-semibold text-white rounded-[39px] max-w-[140px] px-[40px] py-[16px]">
          Sign In
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
