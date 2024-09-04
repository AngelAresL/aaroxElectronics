import Image from 'next/image';
import pandas from '../../assets/images/embedded/techCarousel/pandas.webp';
import tina from '../../assets/images/embedded/techCarousel/tina.webp';
import plecs from '../../assets/images/embedded/techCarousel/plecs.webp';
import excel from '../../assets/images/embedded/techCarousel/excel.webp';
import lt from '../../assets/images/embedded/techCarousel/lt.webp';
import matlab from '../../assets/images/embedded/techCarousel/matlab.webp';
import './techCarousel.css';

export default function TechCarousel() {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide"><Image src={tina} alt='Tina' fill={true} /></div>
        <div className="slide"><Image src={pandas} alt='Pandas' fill={true} /></div>
        <div className="slide"><Image src={plecs} alt='Plecs' fill={true} /></div>
        <div className="slide"><Image src={excel} alt='Excel' fill={true} /></div>
        <div className="slide"><Image src={lt} alt='LT' fill={true} /></div>
        <div className="slide"><Image src={matlab} alt='Matlab' fill={true} /></div>
        <div className="slide"><Image src={tina} alt='Tina' fill={true} /></div>
        <div className="slide"><Image src={pandas} alt='Pandas' fill={true} /></div>
        <div className="slide"><Image src={plecs} alt='Plecs' fill={true} /></div>
        <div className="slide"><Image src={excel} alt='Excel' fill={true} /></div>
        <div className="slide"><Image src={lt} alt='LT' fill={true} /></div>
        <div className="slide"><Image src={matlab} alt='Matlab' fill={true} /></div>
      </div>
    </div>
  );
}