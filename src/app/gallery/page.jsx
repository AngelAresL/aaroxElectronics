"use client";
import Image from "next/image";
import { useLanguageStore } from "../stores/languageStore";
import content from "../content.json";
import "./gallery.css";

export default function Gallery() {
  const language = useLanguageStore((state) => state.language);
  return (
    <main className="gallery-main">
      <h1 className="gallery-title">{content[language].Gallery.title}</h1>
      <div class="bento-grid">
        <div class="bento-item small">
          <div className="image-container">
            <Image
              src="/gallery/01_Small.webp"
              alt="Small Image"
              objectFit="cover"
              fill
            />
          </div>

          <div className="image-text">01 Multi-I/O PLC</div>
        </div>
        <div class="bento-item small">
          <div className="image-container">
            <Image
              src="/gallery/01_Small.webp"
              alt="Small Image"
              objectFit="cover"
              fill
            />
          </div>
          <div className="image-text">01 Multi-I/O PLC</div>
        </div>
        <div class="bento-item large">
          <div className="image-container">
            <Image
              src="/gallery/03_Large.webp"
              alt="Small Image"
              objectFit="cover"
              fill
            />
          </div>
          <div className="image-text">01 Multi-I/O PLC</div>
        </div>
        <div class="bento-item small">
          <div className="image-container">
            <Image
              src="/gallery/02_Small.webp"
              alt="Small Image"
              objectFit="cover"
              fill
            />
          </div>
          <div className="image-text">01 Multi-I/O PLC</div>
        </div>
        <div class="bento-item small">
          <div className="image-container">
            <Image
              src="/gallery/06_Small.webp"
              alt="Small Image"
              objectFit="cover"
              fill
            />
          </div>
          <div className="image-text">01 Multi-I/O PLC</div>
        </div>
        <div class="bento-item high">
          <div className="image-container">
            <Image
              src="/gallery/05_High.webp"
              alt="Small Image"
              objectFit="cover"
              fill
            />
          </div>
          <div className="image-text">01 Multi-I/O PLC</div>
        </div>
        <div class="bento-item small">
          <div className="image-container">
            <Image
              src="/gallery/08_Small.webp"
              alt="Small Image"
              objectFit="cover"
              fill
            />
          </div>
          <div className="image-text">01 Multi-I/O PLC</div>
        </div>
        <div class="bento-item small">
          <div className="image-container">
            <Image
              src="/gallery/09_Small.webp"
              alt="Small Image"
              objectFit="cover"
              fill
            />
          </div>
          <div className="image-text">01 Multi-I/O PLC</div>
        </div>
        <div class="bento-item small">
          <div className="image-container">
            <Image
              src="/gallery/10_Small.webp"
              alt="Small Image"
              objectFit="cover"
              fill
            />
          </div>
          <div className="image-text">01 Multi-I/O PLC</div>
        </div>
        <div class="bento-item large">
          <div className="image-container">
            <Image
              src="/gallery/03_Large.webp"
              alt="Small Image"
              objectFit="cover"
              fill
            />
          </div>
          <div className="image-text">01 Multi-I/O PLC</div>
        </div>
        <div class="bento-item high">
          <div className="image-container">
            <Image
              src="/gallery/05_High.webp"
              alt="Small Image"
              objectFit="cover"
              fill
            />
          </div>
          <div className="image-text">01 Multi-I/O PLC</div>
        </div>
        <div class="bento-item wide">
          <div className="image-container">
            <Image className="image"
              src="/gallery/04_Wide.webp"
              alt="Small Image"
              objectFit="cover"
              fill
            />
          </div>
          <div className="image-text">01 Multi-I/O PLC</div>
        </div>
        <div class="bento-item wide">
          <div className="image-container">
            <Image
              src="/gallery/07_Wide.webp"
              alt="Small Image"
              objectFit="cover"
              fill
            />
          </div>
          <div className="image-text">01 Multi-I/O PLC</div>
        </div>
      </div>
    </main>
  );
}
