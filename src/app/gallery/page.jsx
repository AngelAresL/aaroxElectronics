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
      src: "/gallery/01_High.webp",
      alt: content[language].Gallery.image1.title,
      className: "high",
    },
    {
      src: "/gallery/02_Small.webp",
      alt: content[language].Gallery.image2.title,
      className: "small",
    },
    {
      src: "/gallery/03_Large.webp",
      alt: content[language].Gallery.image3.title,
      className: "large",
    },
    {
      src: "/gallery/04_Small.webp",
      alt: content[language].Gallery.image4.title,
      className: "small",
    },
    {
      src: "/gallery/05_Wide.webp",
      alt: content[language].Gallery.image5.title,
      className: "wide",
    },
    {
      src: "/gallery/06_Small.webp",
      alt: content[language].Gallery.image6.title,
      className: "small",
    },
    {
      src: "/gallery/07_Small.webp",
      alt: content[language].Gallery.image7.title,
      className: "small",
    },
    {
      src: "/gallery/08_Wide.webp",
      alt: content[language].Gallery.image8.title,
      className: "wide",
    },
    {
      src: "/gallery/09_Small.webp",
      alt: content[language].Gallery.image9.title,
      className: "small",
    },
    {
      src: "/gallery/10_Small.webp",
      alt: content[language].Gallery.image10.title,
      className: "small",
    },
    {
      src: "/gallery/11_Large.webp",
      alt: content[language].Gallery.image11.title,
      className: "large",
    },
    {
      src: "/gallery/12_High.webp",
      alt: content[language].Gallery.image12.title,
      className: "high",
    },
    {
      src: "/gallery/13_High.webp",
      alt: content[language].Gallery.image13.title,
      className: "high",
    },
    {
      src: "/gallery/14_Large.webp",
      alt: content[language].Gallery.image14.title,
      className: "large",
    },
    {
      src: "/gallery/15_Large.webp",
      alt: content[language].Gallery.image15.title,
      className: "large",
    },
    {
      src: "/gallery/16_Large.webp",
      alt: content[language].Gallery.image16.title,
      className: "large",
    },
    {
      src: "/gallery/17_Large.webp",
      alt: content[language].Gallery.image17.title,
      className: "large",
    },
    {
      src: "/gallery/18_Large.webp",
      alt: content[language].Gallery.image18.title,
      className: "large",
    },
    {
      src: "/gallery/19_Small.webp",
      alt: content[language].Gallery.image19.title,
      className: "small",
    },
    {
      src: "/gallery/20_High.webp",
      alt: content[language].Gallery.image20.title,
      className: "high",
    },
    {
      src: "/gallery/21_Small.webp",
      alt: content[language].Gallery.image21.title,
      className: "small",
    },
    {
      src: "/gallery/22_Large.webp",
      alt: content[language].Gallery.image22.title,
      className: "large",
    },
    {
      src: "/gallery/23_Large.webp",
      alt: content[language].Gallery.image23.title,
      className: "large",
    },
    {
      src: "/gallery/24_Wide.webp",
      alt: content[language].Gallery.image24.title,
      className: "wide",
    },
    {
      src: "/gallery/25_Large.webp",
      alt: content[language].Gallery.image25.title,
      className: "large",
    },
    {
      src: "/gallery/26_Small.webp",
      alt: content[language].Gallery.image26.title,
      className: "small",
    },
    {
      src: "/gallery/27_Small.webp",
      alt: content[language].Gallery.image27.title,
      className: "small",
    },
    {
      src: "/gallery/28_Large.webp",
      alt: content[language].Gallery.image28.title,
      className: "large",
    },
    {
      src: "/gallery/29_Large.webp",
      alt: content[language].Gallery.image29.title,
      className: "large",
    },
    {
      src: "/gallery/30_Small.webp",
      alt: content[language].Gallery.image30.title,
      className: "small",
    },
    {
      src: "/gallery/31_Small.webp",
      alt: content[language].Gallery.image31.title,
      className: "small",
    },
    {
      src: "/gallery/32_Large.webp",
      alt: content[language].Gallery.image32.title,
      className: "large",
    },
    {
      src: "/gallery/33_Small.webp",
      alt: content[language].Gallery.image33.title,
      className: "small",
    },
    {
      src: "/gallery/34_Small.webp",
      alt: content[language].Gallery.image34.title,
      className: "small",
    },
    {
      src: "/gallery/35_Large.webp",
      alt: content[language].Gallery.image35.title,
      className: "large",
    },
    {
      src: "/gallery/36_High.webp",
      alt: content[language].Gallery.image36.title,
      className: "high",
    },
    {
      src: "/gallery/37_High.webp",
      alt: content[language].Gallery.image37.title,
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
          <div
            className={`expanded-image-container ${
              images[selectedImageIndex].className === "high" ? "high" : ""
            }`}
          >
            <div className="expanded-image">
              <Image
                src={images[selectedImageIndex].src}
                alt={images[selectedImageIndex].alt}
                width={800}
                height={533}
                className={`bento-image ${images[selectedImageIndex].className}`}
              />
            </div>
            <div className="expanded-image-text">
              <div className="title-container">
                <h3 className="index-title">
                  {selectedImageIndex + 1 < 10
                    ? `0${selectedImageIndex + 1}`
                    : selectedImageIndex + 1}
                </h3>
                <h3 className="popo">{images[selectedImageIndex].alt}</h3>
              </div>

              <p
                className={`dynamic-padding ${
                  selectedImageIndex + 1 === 1 || selectedImageIndex + 1 === 7
                    ? "index-01-07"
                    : selectedImageIndex + 1 === 11
                    ? "index-11"
                    : selectedImageIndex + 1 === 21 ||
                      selectedImageIndex + 1 === 31
                    ? "small-index"
                    : selectedImageIndex + 1 >= 20 &&
                      selectedImageIndex + 1 <= 39
                    ? "index-20-30"
                    : selectedImageIndex + 1 < 10
                    ? "large-index"
                    : "small-index"
                }`}
              >
                {
                  content[language].Gallery[`image${selectedImageIndex + 1}`]
                    .text1
                }
              </p>
              <p
                className={`dynamic-padding ${
                  selectedImageIndex + 1 === 1 || selectedImageIndex + 1 === 7
                    ? "index-01-07"
                    : selectedImageIndex + 1 === 11
                    ? "index-11"
                    : selectedImageIndex + 1 === 21 ||
                      selectedImageIndex + 1 === 31
                    ? "small-index"
                    : selectedImageIndex + 1 >= 20 &&
                      selectedImageIndex + 1 <= 39
                    ? "index-20-30"
                    : selectedImageIndex + 1 < 10
                    ? "large-index"
                    : "small-index"
                }`}
              >
                {
                  content[language].Gallery[`image${selectedImageIndex + 1}`]
                    .text2
                }
              </p>
              <p
                className={`dynamic-padding ${
                  selectedImageIndex + 1 === 1 || selectedImageIndex + 1 === 7
                    ? "index-01-07"
                    : selectedImageIndex + 1 === 11
                    ? "index-11"
                    : selectedImageIndex + 1 === 21 ||
                      selectedImageIndex + 1 === 31
                    ? "small-index"
                    : selectedImageIndex + 1 >= 20 &&
                      selectedImageIndex + 1 <= 39
                    ? "index-20-30"
                    : selectedImageIndex + 1 < 10
                    ? "large-index"
                    : "small-index"
                }`}
              >
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
