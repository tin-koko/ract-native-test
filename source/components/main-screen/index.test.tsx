import React from "react";
import { View, Text } from "react-native";
import { render } from "@testing-library/react-native";
import MainScreen from ".";

describe("MainScreen", () => {
  it("renders its children", () => {
    const { getByText } = render(
      <MainScreen>
        <View>
          <Text>Test content</Text>
        </View>
      </MainScreen>
    );
    expect(getByText("Test content")).toBeDefined();
  });
});
