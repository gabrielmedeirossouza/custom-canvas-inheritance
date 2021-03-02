/**
 * Custom canvas method
 *
 * @description draw lines with received coords
 *
 * @param {array} array - expects an array of objects with two params: x {number}, y {number}
*/
export default function LineCoord (array) {
  this.beginPath()

  array.forEach((node, index) => {
    if (index === 0) this.moveTo(node.x, node.y)
    this.lineTo(node.x, node.y)
  })

  this.stroke()
  this.closePath()
}
