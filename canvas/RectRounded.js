/**
 * Custom canvas method
 *
 * @description Custom canvas method for drawing rectangles with rounded border (like border-radius of css)
 *
 * @param {number} x - horizontal axis point
 * @param {number} y - vertical axis point
 * @param {number} width - horizontal size
 * @param {number} height - vertical size
 * @param {number} rounded - border radius !most be less than the lowest value of width and height!
 * @param {object} params - accepts the basics methods of canvas, like: fillStyle
*/
function DrawRectRounded (x, y, width, height, rounded) {
  const halfRadians = (2 * Math.PI) / 2
  const quarterRadians = (2 * Math.PI) / 4

  this.arc(rounded + x, rounded + y, rounded, -quarterRadians, halfRadians, true)
  this.lineTo(x, y + height - rounded)
  this.arc(rounded + x, height - rounded + y, rounded, halfRadians, quarterRadians, true)
  this.lineTo(x + width - rounded, y + height)
  this.arc(x + width - rounded, y + height - rounded, rounded, quarterRadians, 0, true)
  this.lineTo(x + width, y + rounded)
  this.arc(x + width - rounded, y + rounded, rounded, 0, -quarterRadians, true)
  this.lineTo(x + rounded, y)
  this.fill()
}

export default DrawRectRounded
