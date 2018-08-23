// Minima of each width category
const viewportWidthTiny = 375
const viewportWidthSmall = 768
const viewportWidthMedium = 992
const viewportWidthLarge = 1200
const viewportWidthXLarge = 1680

// Maxima of each width category
const viewportWidthExtraSmallMax = viewportWidthSmall - 1
const viewportWidthSmallMax = viewportWidthMedium - 1
const viewportWidthMediumMax = viewportWidthLarge - 1
const viewportWidthLargeMax = viewportWidthXLarge - 1

// Strings usable directly after '@media'
export const mediaSmallMinus = `(max-width: ${viewportWidthSmallMax}px)`
export const mediaSmallPlus = `(min-width: ${viewportWidthSmall}px)`
export const mediaMediumPlus = `(min-width: ${viewportWidthMedium}px)`
export const mediaMediumMinus = `(max-width: ${viewportWidthMediumMax}px)`
export const mediaLargePlus = `(min-width: ${viewportWidthLarge}px)`
export const mediaLargeMinus = `(max-width: ${viewportWidthLargeMax}px)`

export const mediaTiny = `(max-width: ${viewportWidthTiny}px)`
export const mediaExtraSmall = `(max-width: ${viewportWidthExtraSmallMax}px)`
export const mediaSmall = `${mediaSmallPlus} and ${mediaSmallMinus}`
export const mediaMedium = `${mediaMediumPlus} and ${mediaMediumMinus}`
export const mediaLarge = `${mediaLargePlus} and ${mediaLargeMinus}`
export const mediaXLarge = `(min-width: ${viewportWidthXLarge}px)`
