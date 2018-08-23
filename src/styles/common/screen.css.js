export const screen = {
  // Minima of each width category
  viewportWidthTiny: 375,
  viewportWidthSmall: 768,
  viewportWidthMedium: 992,
  viewportWidthLarge: 1200,
  viewportWidthxLarge: 1680,

  // Maxima of each width category
  viewportWidthExtraSmallMax: this.viewportWidthsmall - 1,
  viewportWidthSmallMax: this.viewportWidthmedium - 1,
  viewportWidthMediumMax: this.viewportWidthlarge - 1,
  viewportWidthLargeMax: this.viewportWidthxlarge - 1,

  // Strings usable directly after '@media'
  mediaTiny: `(max-width: ${this.viewportWidthTiny}px)`,
  mediaExtraSmall: `(max-width: ${this.viewportWidthExtraSmallMax}px)`,
  mediaSmallPlus: `(min-width: ${this.viewportWidthSmall}px)`,
  mediaSmallMinus: `(max-width: ${this.viewportWidthSmallMax}px)`,
  mediaSmall: `${this.mediaSmallPlus} and ${this.mediaSmallMinus}`,
  mediaMediumPlus: `(min-width: ${this.viewportWidthMedium}px)`,
  mediaMediumMinus: `(max-width: ${this.viewportWidthMediumMax}px)`,
  mediaMedium: `${this.mediaMediumPlus} and ${this.mediaMediumMinus}`,
  mediaLargePlus: `(min-width: ${this.viewportWidthLarge}px)`,
  mediaLargeMinus: `(max-width: ${this.viewportWidthLargeMax}px)`,
  mediaLarge: `${this.mediaLargePlus} and ${this.mediaLargeMinus}`,
  mediaXLarge: `(min-width: ${this.viewportWidthXLarge}px)`
}
