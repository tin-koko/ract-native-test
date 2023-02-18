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

type Map = {
  name: string;
};

export type Item = {
  name: string;
  emoji: string;
  phone: string;
  languages: Map[];
  continent: Map;
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
  const [columns, setColumns] = useState(1);
  const toggleList = () => {
    LayoutAnimation.configureNext({
      duration: 700,
      update: { type: "easeInEaseOut", property: "scaleXY" },
    });
    setColumns((prev) => {
      if (prev === 2) {
        return 1;
      } else {
        return prev + 1;
      }
    });
  };
  React.useImperativeHandle(ref, () => ({
    toggleList,
  }));
  return (
    <FlatList
      key={columns}
      numColumns={columns}
      data={data}
      renderItem={renderItem}
    />
  );
});

export default AnimatedFlatlist;
