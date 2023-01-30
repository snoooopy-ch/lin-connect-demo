import number_format from "../../../utils/number_format";

describe("formatNumber", () => {
  test.each([
    {
      name: "0 -> ￥0",
      data: {
        num: 0,
      },
      expected: "￥0",
    },
    {
      name: "10 -> ￥10",
      data: {
        num: 10,
      },
      expected: "￥10",
    },
    {
      name: "100 -> ￥100",
      data: {
        num: 100,
      },
      expected: "￥100",
    },
    {
      name: "1000 -> ￥1,000",
      data: {
        num: 1000,
      },
      expected: "￥1,000",
    },
    {
      name: "1000000 -> ￥1,000,000",
      data: {
        num: 1000000,
      },
      expected: "￥1,000,000",
    },
    {
      name: "0.1 -> ￥0.1",
      data: {
        num: 0.1,
      },
      expected: "￥0",
    },
    {
      name: "-100 -> ￥0",
      data: {
        num: 0.1,
      },
      expected: "￥0",
    },
  ])("$name", ({ data, expected }) => {
    expect(number_format(data.num)).toBe(expected);
  });
});
