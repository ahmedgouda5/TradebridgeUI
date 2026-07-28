import { Box } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const Location = useLocation();
  console.log(Location);
  const navLinks = [
    {
      id: 1,
      name: "Home",
      path: "#home",
    },
    {
      id: 2,
      name: "Categories",
      path: "#categories",
    },
    {
      id: 3,
      name: "Suppliers",
      path: "#suppliers",
    },
    {
      id: 4,
      name: "Testimonials",
      path: "#testimonials",
    },
    {
      id: 5,
      name: "About",
      path: "#about",
    },
    {
      id: 6,
      name: "Contact",
      path: "#contact",
    },
  ];
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white text-gray-600 py-3.5 shadow-sm shadow-black/5">
      <div className="w-[90%] mx-auto flex items-center justify-between gap-6">
        <Link
          to="/"
          className="logo flex items-center gap-2 text-2xl font-bold"
        >
          <div className="bg-[#0F1B2E] rounded-md p-1">
            <Box className="text-[#D97B3F]" />
          </div>
          <h1 className="text-[#0F1B2E]">
            Trade<span className="text-[#D97B3F]">Bridge</span>
          </h1>
        </Link>
        {Location.pathname !== "/login" && Location.pathname !== "/signup" && (
          <nav aria-label="Primary" className="flex items-center">
            <ul className="flex items-center gap-8 text-[#0F1B2E]">
              {navLinks.map((link) => (
                <li className="group relative" key={link.id}>
                  <a
                    href={link.path}
                    className="block py-1 font-medium transition-colors duration-300 group-hover:text-[#D97B3F]"
                  >
                    {link.name}
                  </a>
                  <span className="absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 bg-[#D97B3F] transition-transform duration-300 group-hover:scale-x-100" />
                </li>
              ))}
            </ul>
          </nav>
        )}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="inline-flex items-center justify-center  px-5 py-2 font-semibold text-[#0F1B2E] "
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="inline-flex items-center justify-center rounded-md bg-[#D97B3F] px-5 py-2 font-semibold text-white transition-colors duration-300 hover:bg-[#c56e36]"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
