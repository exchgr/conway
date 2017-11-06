const CellShouldLive = (cell, liveNeighbors) => {
  switch (true) {
    case cell && liveNeighbors == 2:
    case liveNeighbors == 3:
      return true
    case liveNeighbors < 2:
    case liveNeighbors > 3:
    default:
      return false
  }
}

export default CellShouldLive
