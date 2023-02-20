/**
 * @format
 */

import "react-native";
import React from "react";
import App from "../../App";
import { MockedProvider } from "@apollo/client/testing";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import { GET_COUNTRIES } from "../graphql/queries";
import { Item } from "../components/animated-flatlist";

const mocks: any = [
  {
    request: {
      query: GET_COUNTRIES,
    },
    result: {
      data: {
        countries: [
          {
            __typename: "Country",
            code: "AD",
            continent: { __typename: "Continent", code: "AF", name: "Africa" },
            emoji: "🇦🇩",
            languages: [
              {
                __typename: "Language",
                code: "ar",
                name: "Arabic",
                native: "العربية",
                rtl: true,
              },
              {
                __typename: "Language",
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
              },
            ],
            name: "Andorra",
            native: "Andorra",
            phone: "376",
          },
        ],
      },
    },
  },
];

it("renders correctly", () => {
  renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />{" "}
    </MockedProvider>
  );
});
