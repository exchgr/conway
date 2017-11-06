import BoardGenerator from "../BoardGenerator"

describe("BoardGenerator", () => {
  it("survives, kills, and reproduces", () => {
    const oldBoard = [
      [false, false, false, false],
      [false, false, true, false],
      [true, false, false, false],
      [true, true, false, false],
    ]

    const newBoard = BoardGenerator(oldBoard);

    expect(newBoard).toEqual([
      [false, true, false, false], // 1 spawn
      [false, false, false, false], // 1 death
      [true, false, false, true], // 1 survival, one spawn
      [true, true, false, false], // 2 survival
    ]);
  });
});
