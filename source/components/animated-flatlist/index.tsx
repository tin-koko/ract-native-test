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
  toggleList: () => void;
};
const AnimatedFlatlist = React.forwardRef<
  AnimatedFlatlistHandle,
  AnimatedFlatlistProps
>(({ data, renderItem }, ref) => {
  const [isGrid, setIsGrid] = useState(false);
  const toggleList = () => {
    LayoutAnimation.configureNext({
      duration: 700,
      update: { type: "linear", property: "scaleY" },
    });
    setIsGrid((prev) => !prev);
  };
  React.useImperativeHandle(ref, () => ({
    toggleList,
  }));
  return <FlatList horizontal={isGrid} data={data} renderItem={renderItem} />;
});

export default AnimatedFlatlist;
