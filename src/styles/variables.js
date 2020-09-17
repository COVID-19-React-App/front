const PrimaryColor = "#060405";
const PrimaryColor85 = 'rgba(6, 4, 5, 0.85)';
const AccentColor = "#FFFFFF";
const BackgroundColor = "#DE3643";
const FontSizeSm = "12px";
const FontSizeBase = "30px";
const FontSizeLg = "48px";
const CommonShadow = `
-webkit-box-shadow: 0 10px 20px 0 rgba(0,0,0,0.32);
-moz-box-shadow: 0 10px 20px 0 rgba(0,0,0,0.32);
box-shadow: 0 10px 20px 0px rgba(0,0,0,0.32);
`

const CommonTextShadow = `
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const Transition = (seconds) => {
  return (
    `
      transition: ${seconds};
      -moz-transition: ${seconds};
      -webkit-transition: ${seconds};
      -o-transition: ${seconds};
    `
  )
}

const DarkGradient = `linear-gradient(180deg, #262626 23.96%, rgba(38, 38, 38, 0) 100%);`
const LightGradient = `linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0.5) 100%);`

export {
  PrimaryColor,
  PrimaryColor85,
  AccentColor,
  BackgroundColor,
  CommonShadow,
  CommonTextShadow,
  FontSizeSm,
  FontSizeBase,
  Transition,
  FontSizeLg,
  DarkGradient,
  LightGradient,
};
