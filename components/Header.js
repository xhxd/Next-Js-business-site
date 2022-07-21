import { useState, useEffect } from "react";
import Image from "next/image";
import HeaderLogo from "../public/images/Logo2.png";
import Link from "next/link";

const styles = {
  header: `w-screen h-[55px] bg-white flex border-b border-solid border-[rgb(228, 228, 228)] shadow-[5px_5px_10px_#e4e4e4] sticky top-0 z-20`,
  headerLeft: `h-full flex items-center w-[30%] justify-start`,
  headerMiddle: `flex h-[100%] w-[50%] justify-center items-center`,
  search: `h-[65%] w-[230px] flex items-center my-0 mx-[20px] rounded-[50px] bg-[#f0f2f5]`,
  searchInput: `border-0 w-[70%] text-[17px] text-[#797979] bg-transparent focus:outline-none`,
  headerOption: `h-[100%] flex px-[45px] items-center cursor-pointer hover:bg-[#eff2f5] hover:rounded-[10px] hover:items-center hover:border-b-none`,
  headerOptionActive: `border-b-[5px] border-solid border-[#e24f54] hover:rounded-b-[0px]`,
  headerRight: `flex items-center w-[25%] justify-end`,
  contactUs: `flex h-[50px] items-center w-[135px] justify-center bg-transparent border-none text-[#e24f54] cursor-pointer mx-[2vw] rounded-[5px] hover:bg-[#e24f54] hover:text-[white]`,
};

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    var urlArr = window.location.href.split("/");

    switch (urlArr[3]) {
      case "":
        setActiveTab("Home");
        break;
      case "aboutus":
        setActiveTab("AboutUs");
        break;
      case "saved":
        setActiveTab("Saved");
        break;
      default:
        setActiveTab("Home");
    }

    console.log(urlArr);
  }, []);

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

  console.log(windowSize);

  const headerLarge = () => (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <div className="h-[100%] ml-[20px] items-center justify-center">
          <Image src={HeaderLogo} alt="" height={55} width={30} />
        </div>
        <div className={styles.search}>
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
            className={styles.searchInput}
            placeholder="Search..."
          />
        </div>
      </div>
      <div className={styles.headerMiddle}>
        <Link href="/">
          <a className="h-[100%]">
            <div
              className={`${styles.headerOption}  ${
                activeTab === "Home" ? styles.headerOptionActive : ""
              }`}
              onClick={() => {
                setActiveTab("Home");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className={`bi bi-house-door ${
                  activeTab === "Home" ? "text-[#e24f54]" : "text-[#949494]"
                }`}
                viewBox="0 0 16 16"
              >
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
              </svg>
            </div>
          </a>
        </Link>
        <Link href="/aboutus">
          <a className="h-[100%]">
            <div
              className={`${styles.headerOption} ${
                activeTab === "AboutUs" ? styles.headerOptionActive : ""
              }`}
              onClick={() => {
                setActiveTab("AboutUs");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className={`bi bi-info-circle text-[#949494] ${
                  activeTab === "AboutUs" ? "text-[#e24f54]" : "text-[#949494]"
                }`}
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
            </div>
          </a>
        </Link>
        <div
          className={`${styles.headerOption} ${
            activeTab === "Saved" ? styles.headerOptionActive : ""
          }`}
          onClick={() => {
            setActiveTab("Saved");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className={`bi bi-bookmarks text-[#949494] ${
              activeTab === "Saved" ? "text-[#e24f54]" : "text-[#949494]"
            }`}
            viewBox="0 0 16 16"
          >
            <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z" />
            <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z" />
          </svg>
        </div>
      </div>
      <div className={styles.headerRight}>
        <span>
          <button className={styles.contactUs}>
            <h3 className="bg-transparent">Contact us</h3>
          </button>
        </span>
      </div>
    </div>
  );

  const headerSmall = () => (
    <div className="menu-wrap">
      <input type="checkbox" className="toggler" />
      <div className="hamburger">
        <div></div>
      </div>
      <div className="menu">
        <div>
          <div>
            <ul>
              <li>
                <Image
                  src={HeaderLogo}
                  alt=""
                  className="headerMenu__logo"
                  height={100}
                  width={60}
                />
              </li>
              <Link href="/">
                <a>
                  <li>Home</li>
                </a>
              </Link>
              <Link href="aboutus">
                <a>
                  <li>About Us</li>
                </a>
              </Link>
              <li>Bookmarks</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  if (windowSize.width >= 770) {
    return headerLarge();
  } else if (windowSize.width < 770) {
    return headerSmall();
  }
};

export default Header;
