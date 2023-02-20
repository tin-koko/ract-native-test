import React from "react";
import { TextInput } from "react-native";
import renderer from "react-test-renderer";

import SearchInput from ".";

describe("SearchInput", () => {
  const data = [
    {
      __typename: "Country",
      code: "AD",
      continent: { __typename: "Continent", code: "EU", name: "Europe" },
      emoji: "🇦🇩",
      languages: [
        {
          __typename: "Language",
          code: "ca",
          name: "Catalan",
          native: "Català",
          rtl: false,
        },
      ],
      name: "Andorra",
      native: "Andorra",
      phone: "376",
    },
  ];

  it("should call scrollToIndex with the correct index when the text input changes", () => {
    const scrollToIndex = jest.fn();
    const component = renderer.create(
      <SearchInput scrollToIndex={scrollToIndex} data={data} />
    );
    const textInput = component.root.findByType(TextInput);

    // simulate typing in the text input
    textInput.props.onChangeText("and");

    // make sure scrollToIndex was called with the correct index
    expect(scrollToIndex).toHaveBeenCalledWith(0);
  });
});
