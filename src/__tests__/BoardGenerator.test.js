import BoardGenerator from "../BoardGenerator"

describe("BoardGenerator", () => {
  it("survives, kills, and reproduces", () => {
    const oldBoard = [
      [false, true, false],
      [true, true, true],
      [false, true, false],
    ]

    const newBoard = BoardGenerator(oldBoard);

    expect(newBoard).toEqual([
      [true, true, true],
      [true, false, true],
      [true, true, true],
    ]);
  });
});
