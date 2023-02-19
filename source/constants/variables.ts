import { Dimensions } from "react-native";
import { hp } from "../utils/responsiveFunctions";

export const SCREEN_WIDTH = Dimensions.get("window").width;
export const SCREEN_HEIGHT = Dimensions.get("window").height;
export const LIST_ITEM_HEIGHT = hp(70);
export const LIST_ITEM_WIDTH = SCREEN_WIDTH / 1.5;
