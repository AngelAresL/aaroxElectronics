"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useLanguageStore } from "../stores/languageStore";
import content from "../content.json";
import "./gallery.css";

export default function Gallery() {
  const language = useLanguageStore((state) => state.language);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImageIndex]);

  const images = [
    {
      src: "/gallery/01_Small.webp",
      alt: "01 Multi-I/O PLC",
      className: "small",
    },
    {
      src: "/gallery/01_Small.webp",
      alt: "01 Multi-I/O PLC",
      className: "small",
    },
    {
      src: "/gallery/03_Large.webp",
      alt: "03 Large Image",
      className: "large",
    },
    { src: "/gallery/04_Wide.webp", alt: "04 Wide Image", className: "wide" },
    { src: "/gallery/05_High.webp", alt: "05 High Image", className: "high" },
    {
      src: "/gallery/06_Small.webp",
      alt: "06 Small Image",
      className: "small",
    },
    {
      src: "/gallery/03_Large.webp",
      alt: "03 Large Image",
      className: "large",
    },
    {
      src: "/gallery/01_Small.webp",
      alt: "01 Multi-I/O PLC",
      className: "small",
    },
  ];

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const closeExpandedImage = () => {
    setSelectedImageIndex(null);
  };

  const goToNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      goToNextImage();
    }

    if (touchEndX.current - touchStartX.current > 50) {
      goToPreviousImage();
    }
  };

  return (
    <main className="gallery-main">
      <h1 className="gallery-title">{content[language].Gallery.title}</h1>
      <div
        className={`bento-grid ${
          selectedImageIndex !== null ? "blur-background" : ""
        }`}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`bento-item ${image.className} ${
              selectedImageIndex === index ? "selected" : ""
            }`}
            onClick={() => handleImageClick(index)}
          >
            <div className="image-container">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="bento-image"
              />
            </div>
            <div className="image-text">{image.alt}</div>
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div
          className="gallery-overlay"
          onClick={closeExpandedImage}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="expanded-image-container">
            <div className="expanded-image">
              <Image
                src={images[selectedImageIndex].src}
                alt={images[selectedImageIndex].alt}
                layout="intrinsic"
                width={800}
                height={533}
                className="bento-image"
              />
            </div>
            <div className="expanded-image-text">
              <h3>{images[selectedImageIndex].alt}</h3>
              <p>Programmable PLC with several inputs and outputs.</p>
              <p>
                Fully designed at Aarox, including HW, FW, SW and Remote Web for
                managing.
              </p>
              <p>First evolution of what now is Cobalto Modules.</p>
            </div>

            <button
              className="prev-arrow"
              onClick={(e) => {
                e.stopPropagation();
                goToPreviousImage();
              }}
            >
              &lt;
            </button>

            <button
              className="next-arrow"
              onClick={(e) => {
                e.stopPropagation();
                goToNextImage();
              }}
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
