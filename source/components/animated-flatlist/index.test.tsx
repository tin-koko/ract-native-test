import React from "react";
import { render } from "@testing-library/react-native";
import AnimatedFlatlist from ".";
import { NavigationContainer } from "@react-navigation/native";

describe("AnimatedFlatlist", () => {
  it("should render the list in vertical format", () => {
    const mockData = [
      {
        name: "John Doe",
        emoji: "👨",
        phone: "256",
        languages: [{ code: "en", name: "English" }],
        continent: { name: "Asia" },
      },
      {
        name: "Jane Doe",
        emoji: "👩",
        phone: "234",
        languages: [{ code: "fr", name: "French" }],
        continent: { name: "Europe" },
      },
    ];

    const renderItem = jest.fn(() => <></>);

    const { getByTestId } = render(
      <NavigationContainer>
        <AnimatedFlatlist RenderItem={renderItem} data={mockData} />
      </NavigationContainer>
    );

    const flatList = getByTestId("flashlist");
    expect(flatList.props.horizontal).toBe(false);
  });
});
