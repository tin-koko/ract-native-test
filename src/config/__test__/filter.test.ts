import { expect } from "@jest/globals";
import { filterFunc } from "src/config/func";
import { Country } from "src/types";

const sample = [
  {
    name: "USA",
    currency: "USD",
    code: "USD",
  },
  {
    name: "Canada",
    currency: "CAD",
    code: "CAD",
  },
  {
    name: "United Kingdom",
    currency: "GBP",
    code: "GBP",
  },
  {
    name: "Germany",
    currency: "EUR",
    code: "EUR",
  },
  {
    name: "Japan",
    currency: "JPY",
    code: "JPY",
  },
] as Country[];

describe("testing filter function", () => {
  it("filters countries by any key", () => {
    const result = filterFunc({
      key: "JPY",
      data: sample,
      by: "code",
    });
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Japan");
  });

  it("remove spacing", () => {
    const result = filterFunc({
      key: "  Canada  ",
      data: sample,
      by: "name",
    });
    expect(result).toHaveLength(1);
    expect(result[0].code).toBe("CAD");
  });
});
