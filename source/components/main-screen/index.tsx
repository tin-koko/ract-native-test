import { SafeAreaView, ViewStyle } from "react-native";
import React, { FunctionComponent, ReactNode } from "react";
import ScreenStyles from "./styles";

type AppScreenProps = {
  children: ReactNode;
  styles?: ViewStyle;
};

const MainScreen: FunctionComponent<AppScreenProps> = ({
  children,
  styles,
}) => {
  return (
    <SafeAreaView
      testID="main-screen"
      style={{ ...ScreenStyles.container, ...styles }}
    >
      {children}
    </SafeAreaView>
  );
};

export default MainScreen;
