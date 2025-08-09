import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";
import BtnAccount from "../../ui/buttons/BtnAccount";
import ResponsiveNav from "./ResponsiveNave";

const Nav = () => {
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);

  const navItems = [
    {
      id: 1,
      title: "Home",
      protected: false,
      path: "/",
    },
    {
      id: 3,
      title: "Services",
      path: "/services",
      protected: false,
    },
    {
      id: 5,
      title: "Contact",
      path: "/contact",
      protected: false,
    },
    {
      id: 2,
      title: "About Us",
      path: "/about",
      protected: false,
    },
    {
      id: 6,
      title: "Dashboard",
      protected: !isAuthenticated,
      path: `/dashboard/${user?.role as string}`,
    },
  ];

  return (
    <nav className="bg-slate-900 w-full">
      <div className="container mx-auto md:px-[4%] px-4 text-white font-semibold flex justify-between items-center">
        <div className="hidden md:block">
          {navItems.map((item, index) => (
            <NavLink
              to={item.path}
              key={item.id}
              className={({ isActive }) =>
                `h-full border-b-2 text-center inline-block transition-colors py-5 ${
                  isActive
                    ? "border-primary text-primary"
                    : "border-slate-900 hover:border-primary hover:text-primary"
                } ${item.protected ? "hidden" : "block"}`
              }
            >
              <span
                className={`px-5 ${
                  index !== navItems.length - 1
                    ? "border-r border-slate-400"
                    : ""
                }`}
              >
                {item.title}
              </span>
            </NavLink>
          ))}
        </div>
        <ResponsiveNav />
        <BtnAccount />
      </div>
    </nav>
  );
};

export default Nav;
