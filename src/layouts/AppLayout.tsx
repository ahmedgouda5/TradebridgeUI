import Footer from "../shared/Footer/page";
import Navbar from "../shared/Navbar/page";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[65px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
