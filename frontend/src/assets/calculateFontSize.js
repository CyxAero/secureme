// const calculateFontSize = (text) => {
//   if (text.length <= 38) return "4xl";
//   // if (text.length <= 28) return "3xl";
//   if (text.length <= 50) return "3xl";
//   // if (text.length <= 36) return "2xl";
//   if (text.length <= 60) return "xl";
//   if (text.length <= 68) return "lg";
//   return "sm";
// };

// function calculateFontSize(text) {
//   const minLength = 10;
//   const maxLength = 50;
//   const minFontSize = 1rem;
//   const maxFontSize = 3rem;

//   const textLength = text.length;
//   const fontSize = (textLength - minLength) / (maxLength - minLength) * (maxFontSize - minFontSize) + minFontSize;

//   return fontSize;
// }

// function calculateFontSize(text) {
//   const minLength = 10;
//   const maxLength = 50;
//   const maxFontSize = 2.25; // largest font size (in rem)
//   const minFontSize = 0.875; // smallest font size (in rem)

//   const textLength = text.length;
//   const fontSize =
//     maxFontSize -
//     ((textLength - minLength) / (maxLength - minLength)) *
//       (maxFontSize - minFontSize);

//   return fontSize + "rem";
// }

function calculateFontSize(text) {
  const minLength = 10;
  const maxLength = 50;
  const maxFontSizeDesktop = 2.25; // largest font size for desktop (in rem)
  const minFontSizeDesktop = 0.875; // smallest font size for desktop (in rem)
  const maxFontSizeMobile = 1.5; // largest font size for mobile (in rem)
  const minFontSizeMobile = 0.625; // smallest font size for mobile (in rem)

  const textLength = text.length;
  const fontSizeDesktop =
    maxFontSizeDesktop -
    ((textLength - minLength) / (maxLength - minLength)) *
      (maxFontSizeDesktop - minFontSizeDesktop);
  const fontSizeMobile =
    maxFontSizeMobile -
    ((textLength - minLength) / (maxLength - minLength)) *
      (maxFontSizeMobile - minFontSizeMobile);

  return {
    desktop: fontSizeDesktop + "rem",
    mobile: fontSizeMobile + "rem",
  };
}

export default calculateFontSize;
