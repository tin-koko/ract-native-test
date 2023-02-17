import {
  FlatList,
  LayoutAnimation,
  ListRenderItem,
  Platform,
  UIManager,
} from "react-native";
import React, { useState } from "react";

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

type Item = {
  name: string;
};

type AnimatedFlatlistProps = {
  renderItem: ListRenderItem<Item>;
  data?: Item[];
};

export type AnimatedFlatlistHandle = {
  toggleGrid: () => void;
};
const AnimatedFlatlist = React.forwardRef<
  AnimatedFlatlistHandle,
  AnimatedFlatlistProps
>(({ data, renderItem }, ref) => {
  const [isGrid, setIsGrid] = useState(true);
  const toggleGrid = () => {
    LayoutAnimation.configureNext({
      duration: 400,
      delete: { type: "easeOut", property: "scaleY" },
      update: { type: "easeInEaseOut", property: "scaleY" },
      create: { type: "easeIn", property: "scaleY" },
    });
    setIsGrid((prev) => !prev);
  };
  React.useImperativeHandle(ref, () => ({
    toggleGrid,
  }));
  return <FlatList horizontal={isGrid} data={data} renderItem={renderItem} />;
});

export default AnimatedFlatlist;
