import { Outlet } from "react-router";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import { useEffect, useState } from "react";
import Loading from "../Pages/Home/Home/Loading/Loading";
const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <div>
      {/* Adjust z-index for Navbar */}

      {isLoading ? (
        <Loading></Loading>
      ) : (
        <div className="w-[1920px]" >
          <div className="">
            <Navbar />
          </div>

          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

export default Main;
