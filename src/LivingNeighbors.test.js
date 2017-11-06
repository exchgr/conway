import LivingNeighbors from './LivingNeighbors'

describe('LivingNeighbors', () => {
  it('counts living neighbors', () => {
    const board = [
      [true, true, false],
      [true, false, true],
      [false, false, true]
    ]

    expect(LivingNeighbors(board, 1, 0)).toEqual(2)
  })
})
