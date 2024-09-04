export default function handleVisibility(frame, screenWidth, screenSizes) {
  const containerTools = document.querySelector('.pcb-tools-container');
  const pcbSchematics = document.querySelector('.pcb-schematics');
  const diagrams = document.querySelector('#diagrams');
  const variants = document.querySelector('#variants');
  const netClasses = document.querySelector('#net-classes');
  const netNaming = document.querySelector('#net-naming');
  const detailing = document.querySelector('#detailing');
  const pcbComponents = document.querySelector('.pcb-components');
  const layerStack = document.querySelector('#layerStack');
  const signal = document.querySelector('#signal');
  const impedance = document.querySelector('#impedance');
  const ddr = document.querySelector('#ddr');
  const antena = document.querySelector('#antena');
  const pcbMechanical = document.querySelector('.pcb-mechanical');
  const dfm = document.querySelector('#dfm');
  const mechanical = document.querySelector('#mechanical');
  const modeling = document.querySelector('#modeling');
  const prototyping = document.querySelector('#prototyping');
  const production = document.querySelector('#production');

  if(containerTools) {
    if(screenWidth >= screenSizes.laptop) {
      if (frame >= 6 && frame <= 23) {
        containerTools.style.opacity = 1;
      } else {
        containerTools.style.opacity = 0;
      }
    }

    if (frame >= 9 && frame <= 23) {
      containerTools.style.opacity = 1;
    } else {
      containerTools.style.opacity = 0;
    }
  }

  if(pcbSchematics) {
    if (frame >= 27 && frame <= 56) {
      pcbSchematics.style.opacity = 1;
    } else {
      pcbSchematics.style.opacity = 0;
    }

    if(frame >= 27 && frame <= 31) {
      diagrams.style.color = '#cafb4b';
    } else {
      diagrams.style.color = '#fefffa';
    }

    if(frame >= 32 && frame <= 38) {
      variants.style.color = '#cafb4b';
    } else {
      variants.style.color = '#fefffa';
    }

    if(frame >= 39 && frame <= 44) {
      netClasses.style.color = '#cafb4b';
    } else {
      netClasses.style.color = '#fefffa';
    }

    if(frame >= 45 && frame <= 50) {
      netNaming.style.color = '#cafb4b';
    } else {
      netNaming.style.color = '#fefffa';
    }

    if(frame >= 51 && frame <= 56) {
      detailing.style.color = '#cafb4b';
    } else {
      detailing.style.color = '#fefffa';
    }
  }

  if(pcbComponents) {
    if (frame >= 57 && frame <= 114) {
      pcbComponents.style.opacity = 1;
    } else {
      pcbComponents.style.opacity = 0;
    }

    if(frame >= 57 && frame <= 67) {
      layerStack.style.color = '#cafb4b';
    } else {
      layerStack.style.color = '#2dac44';
    }

    if(frame >= 69 && frame <= 79) {
      signal.style.color = '#cafb4b';
    } else {
      signal.style.color = '#2dac44';
    }

    if(frame >= 81 && frame <= 91) {
      impedance.style.color = '#cafb4b';
    } else {
      impedance.style.color = '#2dac44';
    }

    if(frame >= 93 && frame <= 103) {
      ddr.style.color = '#cafb4b';
    } else {
      ddr.style.color = '#2dac44';
    }

    if(frame >= 105 && frame <= 114) {
      antena.style.color = '#cafb4b';
    } else {
      antena.style.color = '#2dac44';
    }
  }

  if(pcbMechanical) {
    if (frame >= 115 && frame <= 157) {
      pcbMechanical.style.opacity = 1;
    } else {
      pcbMechanical.style.opacity = 0;
    }

    if(frame >= 115 && frame <= 123) {
      dfm.style.color = '#cafb4b';
    } else {
      dfm.style.color = '#fefffa';
    }

    if(frame >= 124 && frame <= 132) {
      mechanical.style.color = '#cafb4b';
    } else {
      mechanical.style.color = '#fefffa';
    }

    if(frame >= 133 && frame <= 141) {
      modeling.style.color = '#cafb4b';
    } else {
      modeling.style.color = '#fefffa';
    }

    if(frame >= 142 && frame <= 149) {
      prototyping.style.color = '#cafb4b';
    } else {
      prototyping.style.color = '#fefffa';
    }

    if(frame >= 150 && frame <= 157) {
      production.style.color = '#cafb4b';
    } else {
      production.style.color = '#fefffa';
    }
  }
}