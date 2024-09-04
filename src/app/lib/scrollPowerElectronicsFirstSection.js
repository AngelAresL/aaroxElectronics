import { screenSizes } from './screenSizes';

export default function handleColorOpacity() {
  const scrollPosition = window.scrollY;
  const screenWidth = window.innerWidth;
  
  const power = document.querySelector('#power');
  const battery = document.querySelector('#battery');
  const ev = document.querySelector('#ev');
  const wireless = document.querySelector('#wireless');
  const bms = document.querySelector('#bms');
  const inverters = document.querySelector('#inverters');
  const controls = document.querySelector('#controls');
  const lighting = document.querySelector('#lighting');

  const containerDefs = document.querySelector('.container-defs');
  const containerSmallDashboard = document.querySelector('.container-smallDashboard');

  if(power && battery && ev && wireless && bms && inverters && controls && lighting) {
    if (scrollPosition >= 0 && scrollPosition <= 188) {
      power.classList.add('span-highlighted');
    } else {
      power.classList.remove('span-highlighted');
    }
  
    if (scrollPosition >= 188 && scrollPosition <= 376) {
      battery.classList.add('span-highlighted');
    } else {
      battery.classList.remove('span-highlighted');
    }
  
    if (scrollPosition >= 376 && scrollPosition <= 564) {
      ev.classList.add('span-highlighted');
    } else {
      ev.classList.remove('span-highlighted');
    }
  
    if (scrollPosition >= 564 && scrollPosition <= 752) {
      wireless.classList.add('span-highlighted');
    } else {
      wireless.classList.remove('span-highlighted');
    }
  
    if (scrollPosition >= 752 && scrollPosition <= 940) {
      bms.classList.add('span-highlighted');
    } else {
      bms.classList.remove('span-highlighted');
    }
  
    if (scrollPosition >= 940 && scrollPosition <= 1128) {
      inverters.classList.add('span-highlighted');
    } else {
      inverters.classList.remove('span-highlighted');
    }
  
    if (scrollPosition >= 1128 && scrollPosition <= 1316) {
      controls.classList.add('span-highlighted');
    } else {
      controls.classList.remove('span-highlighted');
    }
  
    if (scrollPosition >= 1316) {
      lighting.classList.add('span-highlighted');
    } else {
      lighting.classList.remove('span-highlighted');
    }
  }

  if(containerDefs && containerSmallDashboard) {
    if(screenWidth < screenSizes.tablet) {
      if(scrollPosition >= 1500) {
        containerDefs.style.transform = 'translateX(45%)';
        containerSmallDashboard.style.transform = 'translateX(70%)';
      } else {
        containerDefs.style.transform = 'translateX(0)';
        containerSmallDashboard.style.transform = 'translateX(0)';
      }
    } else if(screenWidth < screenSizes.laptop) {
      if(scrollPosition >= 1500) {
        containerDefs.style.transform = 'translateX(55%)';
        containerSmallDashboard.style.transform = 'translateX(70%)';
      } else {
        containerDefs.style.transform = 'translateX(0)';
        containerSmallDashboard.style.transform = 'translateX(0)';
      }
    } else if(screenWidth < screenSizes.desktop) {
      if(scrollPosition >= 1500) {
        containerDefs.style.transform = 'translateX(235%)';
        containerSmallDashboard.style.transform = 'translateX(70%)';
      } else {
        containerDefs.style.transform = 'translateX(0)';
        containerSmallDashboard.style.transform = 'translateX(0)';
      }
    } else {
      if(scrollPosition >= 1500) {
        containerDefs.style.transform = 'translateX(200%)';
        containerSmallDashboard.style.transform = 'translateX(70%)';
      } else {
        containerDefs.style.transform = 'translateX(0)';
        containerSmallDashboard.style.transform = 'translateX(0)';
      }
    }
  }
}