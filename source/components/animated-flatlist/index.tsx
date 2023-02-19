import {
  LayoutAnimation,
  Platform,
  UIManager,
  FlatList,
  FlatListProps,
} from "react-native";
import React, { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { hp, wp } from "../../utils/responsiveFunctions";
import { LIST_ITEM_HEIGHT, LIST_ITEM_WIDTH } from "../../constants/variables";

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
  languages: Array<{ code: string; name: string }>;
  continent: Map;
};

type AnimatedFlatlistProps = {
  RenderItem: any;
  data?: Item[];
};

export type AnimatedFlatlistHandle = {
  toggleList: () => void;
  scrollToIndex: (index: number) => void;
};
const AnimatedFlatlist = React.forwardRef<
  AnimatedFlatlistHandle,
  AnimatedFlatlistProps
>(({ data, RenderItem }, ref) => {
  const flatRef = useRef<FlatList>(null);
  const navigation = useNavigation();
  const [isGrid, setGrid] = useState(false);
  const toggleList = () => {
    LayoutAnimation.configureNext({
      duration: 700,
      update: { type: "easeInEaseOut", property: "scaleXY" },
    });
    setGrid((prev) => !prev);
  };

  const scrollToIndex = (index: number) => {
    flatRef.current?.scrollToIndex({ animated: true, index: index });
  };
  React.useImperativeHandle(ref, () => ({
    toggleList,
    scrollToIndex,
  }));
  return (
    <FlatList
      onScrollToIndexFailed={(info) => {
        const wait = new Promise((resolve) => setTimeout(resolve, 500));
        wait.then(() => {
          flatRef.current?.scrollToIndex({ index: info.index, animated: true });
        });
      }}
      ref={flatRef}
      horizontal={isGrid}
      data={data}
      renderItem={({ item }) => (
        <RenderItem navigation={navigation} item={item} isGrid={isGrid} />
      )}
      getItemLayout={(_, index) => ({
        length: isGrid ? LIST_ITEM_WIDTH + wp(40) : LIST_ITEM_HEIGHT + hp(20),
        offset: isGrid
          ? (LIST_ITEM_WIDTH + wp(40)) * index
          : (LIST_ITEM_HEIGHT + hp(20)) * index,
        index,
      })}
    />
  );
});

export default AnimatedFlatlist;
