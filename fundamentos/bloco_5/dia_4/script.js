const btnContainer = document.getElementById('btn-container');
const darkmodeBtn = document.getElementById('darkmode-btn');
const fontColor = document.getElementById('font-color');
const fontSize = document.getElementById('font-size');
const fontSpace = document.getElementById('font-space');
const fontFamily = document.getElementById('font-family');
const textContainer = document.getElementById('text');
let verifyDarkMode = false;

darkmodeBtn.addEventListener(
  'click',
  (callDarkMode = () => {

    if (verifyDarkMode === false) {
      document.body.style.backgroundColor = 'black';
      textContainer.style.color = 'white';
      darkmodeBtn.style.backgroundColor = 'white';
      darkmodeBtn.style.color = 'black';
    } else {
      document.body.style.backgroundColor = 'white';
      textContainer.style.color = 'black';
      darkmodeBtn.style.backgroundColor = 'black';
      darkmodeBtn.style.color = 'white';
    }

    if (verifyDarkMode) {
      verifyDarkMode = false;
    } else {
      verifyDarkMode = true;
    }

    localStorage.setItem('darkmode', JSON.stringify(verifyDarkMode));
  })
);

function initDarkMode() {
  const darkmodeStorage = JSON.parse(localStorage.getItem('darkmode'));
  if (darkmodeStorage) {
    verifyDarkMode = darkmodeStorage;
  }

  if (verifyDarkMode === true) {
    document.body.style.backgroundColor = 'black';
    textContainer.style.color = 'white';
    darkmodeBtn.style.backgroundColor = 'white';
    darkmodeBtn.style.color = 'black';
  } else {
    document.body.style.backgroundColor = 'white';
    textContainer.style.color = 'black';
    darkmodeBtn.style.backgroundColor = 'black';
    darkmodeBtn.style.color = 'white';
  }
}

fontSize.addEventListener(
  'input',
  (callFontSize = () => {
    textContainer.style.fontSize = `${fontSize.value}px`;

    localStorage.setItem('fontSize', JSON.stringify(textContainer.style.fontSize));
  })
);

function initFontSize() {
  const fontSizeStorage = JSON.parse(localStorage.getItem('fontSize'));
  if (fontSizeStorage) {
    textContainer.style.fontSize = fontSizeStorage;
    fontSize.value = parseInt(fontSizeStorage);
  }

}

fontSpace.addEventListener(
  'input',
  (callFontSpace = () => {
    textContainer.style.lineHeight = `${fontSpace.value}px`;

    localStorage.setItem('fontSpace', JSON.stringify(textContainer.style.lineHeight));
  })
);

function initFontSpace() {
  const fontSpaceStorage = JSON.parse(localStorage.getItem('fontSpace'));
  if (fontSpaceStorage) {
    textContainer.style.lineHeight = fontSpaceStorage;
    fontSpace.value = parseInt(fontSpaceStorage);
  }

}

fontFamily.addEventListener(
  'change',
  (callFontFamily = () => {
    const fontSelected = fontFamily.value;
    console.log(fontSelected);

    switch (fontSelected) {
      case 'font 1':
        textContainer.style.fontFamily = '"Poppins", sans-serif';
        break;
      case 'font 2':
        textContainer.style.fontFamily = '"Courier New", Courier, monospace';
        break;
      case 'font 3':
        textContainer.style.fontFamily =
          '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif';
        break;
      case 'font 4':
        textContainer.style.fontFamily =
          '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif';
        break;
      default:
        break;
    }

    localStorage.setItem('fontSelected', fontFamily.value);
  })
);

function initFontFamily() {
  const fontFamilyStorage = localStorage.getItem('fontSelected');
  if(fontFamilyStorage) {
    switch (fontFamilyStorage) {
      case 'font 1':
        textContainer.style.fontFamily = '"Poppins", sans-serif';
        break;
      case 'font 2':
        textContainer.style.fontFamily = '"Courier New", Courier, monospace';
        break;
      case 'font 3':
        textContainer.style.fontFamily =
          '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif';
        break;
      case 'font 4':
        textContainer.style.fontFamily =
          '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif';
        break;
      default:
        break;
    }

    fontFamily.value = fontFamilyStorage;
  }
}

fontColor.addEventListener(
  'change',
  (callFontColor = () => {
    const fontColorSelected = fontColor.value;
    
    switch (fontColorSelected) {
      case 'White':
        textContainer.style.color = 'white';
        break;
      case 'Black':
        textContainer.style.color = 'black';
        break;
      case 'Red':
        textContainer.style.color = 'red';
        break;
      case 'Blue':
        textContainer.style.color = 'blue';
        break;
      default:
        break;
    }

    localStorage.setItem('fontColor', fontColorSelected);
  })
);

function initFontColor() {
  const fontColorStorage = localStorage.getItem('fontColor');
    if (fontColorStorage) {
      const fontColorSelected = fontColorStorage;
      fontColor.value = fontColorStorage;

      switch (fontColorSelected) {
        case 'White':
          textContainer.style.color = 'white';
          break;
        case 'Black':
          textContainer.style.color = 'black';
          break;
        case 'Red':
          textContainer.style.color = 'red';
          break;
        case 'Blue':
          textContainer.style.color = 'blue';
          break;
        default:
          break;
      }

    }
}

window.onload = () => {
  initDarkMode();
  initFontSize();
  initFontSpace();
  initFontFamily();
  initFontColor();
};
