const beginning = (y) => Math.max(y - 1, 0)
const livingNeighbors = (board, x, y) => {
  let count = 0

  for (let x1 = beginning(x); x1 < board.length && x1 <= x + 1; x1++) {
    for (let y1 = beginning(y); y1 < board[x1].length && y1 <= y + 1; y1++) {
      if (!(y1 == y && x1 == x) && board[x1][y1]) {
        count++
      }
    }
  }

  return count
}

const BoardGenerator = (oldBoard) => (
  oldBoard.map((row, x) => (
    row.map((cell, y) => {
      const liveNeighbors = livingNeighbors(oldBoard, x, y)

      switch (true) {
        case liveNeighbors < 2:
        case liveNeighbors > 3:
          return false
        case cell && liveNeighbors == 2:
        case liveNeighbors == 3:
          return true
        default:
          return false
      }
    })
  ))
)

export default BoardGenerator
