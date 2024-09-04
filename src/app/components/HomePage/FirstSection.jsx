import Image from "next/image";
import Link from "next/link";
import content from "../../content.json";
import Logo from "../../assets/images/logo.svg";
import CheckWindowWidth from "../../hooks/useWindowWidth.jsx";
import { useLanguageStore } from "../../stores/languageStore.jsx";
import borderLarge from "../../assets/images/homePage/borderLarge.svg";
import border from "../../assets/images/homePage/border.svg";
import pcb1 from "../../assets/images/homePage/pcb1.webp";
import pcb2 from "../../assets/images/homePage/pcb2.webp";
import pcb3 from "../../assets/images/homePage/pcb3.webp";
import pcb4 from "../../assets/images/homePage/pcb4.webp";
import pcb5 from "../../assets/images/homePage/pcb5.webp";
import arrowRight from "../../assets/images/homePage/arrowRight.svg";
import ScrollArrow from "../HomePage/scrollArrow.jsx";
import { useEffect, useRef, useState } from "react";
import { screenSizes } from "../../lib/screenSizes";
import { Work_Sans } from "next/font/google";
import "./firstSection.css";

const workSans = Work_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function FirstSection() {
  const { screenWidth } = CheckWindowWidth();
  const language = useLanguageStore((state) => state.language);
  const pcbsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const animateZoom = () => {
      const pcb = pcbsRef.current[activeIndex];
      if (pcb) {
        pcb.classList.add("zoom");
        setTimeout(() => {
          pcb.classList.remove("zoom");
        }, 9500);
      }
    };

    animateZoom();

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 10000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="container-first-section">
      {screenWidth >= 1366 && (
        <div className="scroll-arrow" onClick={handleScroll}>
          <ScrollArrow />
        </div>
      )}
      <section className="home-first-section">
        <div className="home-title">
          <Image
            src={Logo}
            alt="Logo Aarox Electronics"
            width={screenWidth < screenSizes.tablet ? 197 : 329}
            height={screenWidth < screenSizes.tablet ? 60 : 100}
            priority={true}
          />
          <h2 className={workSans.className}>
            {content[language].HomePage.title}
            <br />
            {content[language].HomePage.subtitle}
          </h2>
        </div>
        <div className="border-zoom-image">
          <Image
            src={screenWidth >= screenSizes.laptop ? borderLarge : border}
            alt="Image container border"
            fill={true}
            className="border-image"
            priority={true}
          />
          <div className="pcb-container">
            <Image
              src={pcb1}
              alt="PCB 1"
              fill={true}
              className={`pcb ${activeIndex === 0 ? "active" : "inactive"}`}
              ref={(el) => (pcbsRef.current[0] = el)}
            />
            <Image
              src={pcb2}
              alt="PCB 2"
              fill={true}
              className={`pcb ${activeIndex === 1 ? "active" : "inactive"}`}
              ref={(el) => (pcbsRef.current[1] = el)}
            />
            <Image
              src={pcb3}
              alt="PCB 3"
              fill={true}
              className={`pcb ${activeIndex === 2 ? "active" : "inactive"}`}
              ref={(el) => (pcbsRef.current[2] = el)}
            />
            <Image
              src={pcb4}
              alt="PCB 4"
              fill={true}
              className={`pcb ${activeIndex === 3 ? "active" : "inactive"}`}
              ref={(el) => (pcbsRef.current[3] = el)}
            />
            <Image
              src={pcb5}
              alt="PCB 5"
              fill={true}
              className={`pcb ${activeIndex === 4 ? "active" : "inactive"}`}
              ref={(el) => (pcbsRef.current[4] = el)}
            />
          </div>
        </div>
        <div className="our-approach">
          <p>{content[language].HomePage.stay}</p>
          <Link href={"/gallery"}>
            <button>
              {content[language].HomePage.textButton}
              <Image
                src={arrowRight}
                width={24}
                height={24}
                alt="Right arrow"
                className="bounce"
              />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
