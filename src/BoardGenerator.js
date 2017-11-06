import LivingNeighbors from './LivingNeighbors'
import CellShouldLive from './CellShouldLive'

const BoardGenerator = (oldBoard) => (
  oldBoard.map((row, x) => (
    row.map((cell, y) => (
      CellShouldLive(cell, LivingNeighbors(oldBoard, x, y))
    ))
  ))
)

export default BoardGenerator
