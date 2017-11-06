const beginning = (y) => Math.max(y - 1, 0)

const wrappedIndex = (array, n) => {
  if (n < 0) {
    return n + array.length
  } else if (n >= array.length ) {
    return n - array.length
  } else {
    return n
  }
}

const wrappedArray = (array, index) => array[wrappedIndex(array, index)]

const LivingNeighbors = (board, x, y) => {
  let count = 0

  for (let x1 = x - 1; x1 <= x + 1; x1++) {
    for (let y1 = y - 1; y1 <= y + 1; y1++) {
      if (!(y1 == y && x1 == x) && wrappedArray(wrappedArray(board, x1), y1)) {
        count++
      }
    }
  }

  return count
}

export default LivingNeighbors
