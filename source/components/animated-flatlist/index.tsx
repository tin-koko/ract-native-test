import { View, ActivityIndicator } from "react-native";
import React, { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";

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

type AnimatedFlashlistProps = {
  RenderItem: any;
  data?: Item[];
};

export type AnimatedFlashlistHandle = {
  toggleList: () => void;
  scrollToIndex: (index: number) => void;
};
const AnimatedFlashlist = React.forwardRef<
  AnimatedFlashlistHandle,
  AnimatedFlashlistProps
>(({ data, RenderItem }, ref) => {
  const flashRef = useRef<FlashList<Item> | null>(null);
  const navigation = useNavigation();
  const [isGrid, setGrid] = useState(false);
  const toggleList = () => {
    setGrid((prev) => !prev);
  };

  const scrollToIndex = (index: number) => {
    flashRef.current?.scrollToIndex({ animated: true, index: index });
  };
  React.useImperativeHandle(ref, () => ({
    toggleList,
    scrollToIndex,
  }));
  return (
    <FlashList
      testID="flashlist"
      keyboardShouldPersistTaps="always"
      keyExtractor={(item) => item.name}
      ref={flashRef}
      horizontal={isGrid}
      data={data}
      renderItem={({ item }) => (
        <RenderItem navigation={navigation} item={item} isGrid={isGrid} />
      )}
      estimatedItemSize={100}
      ListEmptyComponent={() => (
        <View>
          <ActivityIndicator color={"white"} />
        </View>
      )}
    />
  );
});

export default AnimatedFlashlist;
