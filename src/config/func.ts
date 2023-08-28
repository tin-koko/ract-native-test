import { Dimensions, PixelRatio } from "react-native";

import type { Country, FilterProps } from "src/types";

/**
 * Filters an array of objects based on a specific property and a search key.
 *
 * @param {string} options.key - The search key to filter by.
 * @param {Country[]} options.data - The array of objects to be filtered.
 * @param {string} options.by - The property name to filter by.
 * @returns {Country[]} - An array of filtered objects.
 */

export const filterFunc = ({ key, data, by }: FilterProps) => {
  if (!data) return [];
  return data.filter((c: Country) =>
    c[by].toLowerCase().includes(key.toLowerCase().trim())
  );
};

// just for fonts and margin and padding measurement
const { width: ScreenW } = Dimensions.get("window");
const fontScale = 385;
export const scaledSizes = (size: number) =>
  PixelRatio.roundToNearestPixel((ScreenW / fontScale) * size);
