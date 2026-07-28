import { useState, useEffect } from "react";
import { Box, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { id: 1, name: "Home", path: "#home" },
  { id: 2, name: "Categories", path: "#categories" },
  { id: 3, name: "Suppliers", path: "#suppliers" },
  { id: 4, name: "Testimonials", path: "#testimonials" },
  { id: 5, name: "About", path: "#about" },
  { id: 6, name: "Contact", path: "#contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Hide drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isAuthPage =
    location.pathname === "/auth/login" || location.pathname === "/auth/signup";

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full bg-white text-gray-600 py-3.5 shadow-sm shadow-black/5">
        <div className="w-[90%] mx-auto flex items-center justify-between gap-6">
          <Link
            to="/"
            className="logo flex items-center gap-2 text-2xl font-bold shrink-0"
          >
            <div className="bg-[#0F1B2E] rounded-md p-1">
              <Box className="text-[#D97B3F]" />
            </div>
            <h1 className="text-[#0F1B2E]">
              Trade<span className="text-[#D97B3F]">Bridge</span>
            </h1>
          </Link>

          {!isAuthPage && (
            <nav
              aria-label="Primary"
              className="hidden lg:flex items-center flex-1 justify-center"
            >
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

          <div
            className={`flex items-center gap-3 shrink-0 ${isAuthPage ? "" : "hidden lg:flex"}`}
          >
            <Link
              to="/auth/login"
              className="inline-flex items-center justify-center px-5 py-2 font-semibold text-[#0F1B2E]"
            >
              Login
            </Link>
            <Link
              to="/auth/signup"
              className="inline-flex items-center justify-center rounded-md bg-[#D97B3F] px-5 py-2 font-semibold text-white transition-colors duration-300 hover:bg-[#c56e36]"
            >
              Register
            </Link>
          </div>

          {/* ── Hamburger Button: only on non-auth pages, mobile only ── */}
          {!isAuthPage && (
            <button
              id="navbar-hamburger"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen((prev) => !prev)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md text-[#0F1B2E] hover:bg-[#F4F6F8] transition-colors duration-200"
            >
              {isOpen ? (
                <X size={22} strokeWidth={2.2} />
              ) : (
                <Menu size={22} strokeWidth={2.2} />
              )}
            </button>
          )}
        </div>
      </header>

      {/* ── Mobile Drawer Overlay ── */}
      {isOpen && (
        <div
          aria-hidden="true"
          onClick={handleLinkClick}
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px] lg:hidden"
          style={{ top: "57px" }}
        />
      )}

      {/* ── Mobile Drawer Menu ── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation"
        className={`
          fixed left-0 w-full z-40 bg-white shadow-lg lg:hidden
          transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
        `}
        style={{ top: "57px" }}
      >
        <div className="w-[90%] mx-auto py-4">
          {!isAuthPage && (
            <nav aria-label="Mobile primary">
              <ul className="flex flex-col">
                {navLinks.map((link, i) => (
                  <li key={link.id}>
                    <a
                      href={link.path}
                      onClick={handleLinkClick}
                      className="flex items-center py-3 font-medium text-[#0F1B2E] hover:text-[#D97B3F] transition-colors duration-200"
                      style={{ animationDelay: `${i * 40}ms` }}
                    >
                      {link.name}
                    </a>
                    {i < navLinks.length - 1 && (
                      <hr className="border-[#E4E9EE]" />
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Auth Buttons in drawer — only shown on non-auth pages */}
          {!isAuthPage && (
            <div className="flex flex-col gap-3 mt-4 pb-2">
              <Link
                to="/auth/login"
                onClick={handleLinkClick}
                className="w-full inline-flex items-center justify-center px-5 py-2.5 font-semibold text-[#0F1B2E] border border-[#E4E9EE] rounded-md hover:bg-[#F4F6F8] transition-colors duration-200"
              >
                Login
              </Link>
              <Link
                to="/auth/signup"
                onClick={handleLinkClick}
                className="w-full inline-flex items-center justify-center rounded-md bg-[#D97B3F] px-5 py-2.5 font-semibold text-white transition-colors duration-300 hover:bg-[#c56e36]"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
