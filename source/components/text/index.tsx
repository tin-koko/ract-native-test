import { StyleSheet, Text as RNText, View } from "react-native";
import React, { ReactNode } from "react";
import TextStyles from "./styles";

type TextProps = {
  children: ReactNode;
};

const Text = ({ children }: TextProps) => {
  return <RNText style={TextStyles.icon}>{children}</RNText>;
};

export default Text;

const styles = StyleSheet.create({});
