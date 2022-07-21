import { useState, useEffect } from "react";
import Header from "../components/Header";
import PackingMachines from "../components/PackingMachines";
import Sidebar from "../components/Sidebar";
import Slideshow from "../components/Slideshow";

export default function Home() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const giveSearchBar = () => {
    if (windowSize.width < 770) {
      return (
        <div
          className={`float-right my-[20px] mx-[50px] flex items-center h-[39px] w-[200px] bg-white rounded-[10px] shadow-[10px_10px_10px_#f6f6f6]`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search my-0 mx-[10px] text-[#797979]"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className={`border-none h-[30px] text-[15px] focus:outline-none bg-white`}
          />
        </div>
      );
    } else {
      return;
    }
  };

  return (
    <div>
      <Header />
      <div className="flex">
        <div className="md:w-[20%]">
          <Sidebar />
        </div>
        <div className="md:w-[80%] w-[100%]">
          {giveSearchBar()}
          <Slideshow />
          <PackingMachines />
        </div>
      </div>
    </div>
  );
}
