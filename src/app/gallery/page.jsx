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
  const uno = 1;

  const images = [
    {
      src: "/gallery/01_Wide.webp",
      alt: content[language].Gallery.image1.title,
      className: "wide",
    },
    {
      src: "/gallery/02_Large.webp",
      alt: content[language].Gallery.image2.title,
      className: "large",
    },
    {
      src: "/gallery/03_Small.webp",
      alt: content[language].Gallery.image3.title,
      className: "small",
    },
    {
      src: "/gallery/04_Small.webp",
      alt: content[language].Gallery.image4.title,
      className: "small",
    },
    {
      src: "/gallery/05_Large.webp",
      alt: content[language].Gallery.image5.title,
      className: "large",
    },
    {
      src: "/gallery/06_Large.webp",
      alt: content[language].Gallery.image6.title,
      className: "large",
    },
    {
      src: "/gallery/07_Small.webp",
      alt: content[language].Gallery.image7.title,
      className: "small",
    },
    {
      src: "/gallery/08_Small.webp",
      alt: content[language].Gallery.image8.title,
      className: "small",
    },
    {
      src: "/gallery/09_Large.webp",
      alt: content[language].Gallery.image9.title,
      className: "large",
    },
    {
      src: "/gallery/10_Small.webp",
      alt: content[language].Gallery.image10.title,
      className: "small",
    },
    {
      src: "/gallery/11_Small.webp",
      alt: content[language].Gallery.image11.title,
      className: "small",
    },
    {
      src: "/gallery/12_Large.webp",
      alt: content[language].Gallery.image12.title,
      className: "large",
    },
    {
      src: "/gallery/13_High.webp",
      alt: content[language].Gallery.image13.title,
      className: "high",
    },
    {
      src: "/gallery/14_High.webp",
      alt: content[language].Gallery.image14.title,
      className: "high",
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
            <div className="image-text">
              <div className="index-title">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </div>
              <div>{image.alt}</div>
            </div>
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
                
                width={800}
                height={533}
                className="bento-image"
              />
            </div>
            <div className="expanded-image-text">
              <div className="title-container">
                <h3 className="index-title">
                  {selectedImageIndex + 1 < 10
                    ? `0${selectedImageIndex + 1}`
                    : selectedImageIndex + 1}
                </h3>
                <h3>{images[selectedImageIndex].alt}</h3>
              </div>

              <p>
                {
                  content[language].Gallery[`image${selectedImageIndex + 1}`]
                    .text1
                }
              </p>
              <p>
                {
                  content[language].Gallery[`image${selectedImageIndex + 1}`]
                    .text2
                }
              </p>
              <p>
                {
                  content[language].Gallery[`image${selectedImageIndex + 1}`]
                    .text3
                }
              </p>
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
