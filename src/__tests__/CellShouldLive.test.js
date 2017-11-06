import CellShouldLive from '../CellShouldLive'

describe('CellShouldLive', () => {
  describe('true cell', () => {
    it('is false with less than 2 live neighbors', () => {
      expect(CellShouldLive(true, 1)).toEqual(false)
    })

    it('is true with 3 live neighbors', () => {
      expect(CellShouldLive(true, 3)).toEqual(true)
    })

    it('is false with more than 3 live neighbors', () => {
      expect(CellShouldLive(true, 4)).toEqual(false)
    })
  })

  describe('with 2 live neighbors', () => {
    it('is false with false cell', () => {
      expect(CellShouldLive(false, 2)).toEqual(false)
    })

    it('is true with true cell', () => {
      expect(CellShouldLive(true, 2)).toEqual(true)
    })
  })
})
