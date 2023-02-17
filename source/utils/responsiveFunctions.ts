import { PixelRatio } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/variables";

// Frame according to figma design
// Using my device size as there's no design
const frame = { height: 844, width: 390 };

const widthBaseScale = SCREEN_WIDTH / frame.width;
const heightBaseScale = SCREEN_HEIGHT / frame.height;

function normalize(size: number, based = "width") {
  const newSize =
    based === "height" ? size * heightBaseScale : size * widthBaseScale;
  return PixelRatio.roundToNearestPixel(newSize);
}

// for width  pixel
const widthPixel = (size: number) => normalize(size, "width");
// for height  pixel
const heightPixel = (size: number) => normalize(size, "height");
// for font size
const fontPixel = (size: number) => widthPixel(size);

export { fontPixel as fp, heightPixel as hp, widthPixel as wp };
