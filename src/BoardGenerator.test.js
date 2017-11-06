import Immutable from "immutable"
import BoardGenerator from "./BoardGenerator"

describe("BoardGenerator", () => {
  describe("underpopulation", () => {
    it("kills the cell", () => {
      const oldBoard = [
        [false, false, false],
        [false, true, false],
        [false, true, false],
      ]
      const newBoard = BoardGenerator(oldBoard);
      expect(newBoard).toEqual([
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ]);
    });
  });
  describe("good population", () => {
    it("survives & reproduces", () => {
      const oldBoard = [
        [false, false, false],
        [true, true, false],
        [false, true, false],
      ]
      const newBoard = BoardGenerator(oldBoard);
      expect(newBoard).toEqual([
        [false, false, false],
        [true, true, false],
        [true, true, false],
      ]);
    });
  });
  describe("overpopulation", () => {
    it("kills", () => {
      const oldBoard = [
        [true, false, false],
        [true, true, false],
        [true, true, false],
      ]
      const newBoard = BoardGenerator(oldBoard);
      expect(newBoard).toEqual([
        [true, true, false],
        [false, false, false],
        [true, true, false],
      ]);
    });
  });
});
