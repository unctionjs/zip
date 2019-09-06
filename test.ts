import zip from "./index";

test("works", () => {
  expect(zip(["1", "2", "3"])(["4", "5", "6"])).toEqual([["1", "4"], ["2", "5"], ["3", "6"]]);
});

test("works", () => {
  expect(zip({
    aaa: "1",
    bbb: "2",
    ccc: "0",
  })({
    aaa: "0",
    bbb: "0",
    ccc: "0",
  })).toEqual({
    aaa: ["1", "0"],
    bbb: ["2", "0"],
    ccc: ["0", "0"],
  });
});

test("works", () => {
  expect(() =>
    zip({
      aaa: "1",
      bbb: "2",
      ccc: "0",
    })(["4", "5", "6"])).toThrow();
});
