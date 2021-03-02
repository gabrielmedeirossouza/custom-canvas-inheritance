/**
 * @fileoverview Helper plugin for manipulate the canvas - CanvasRenderingContext2D
 * @author Gabriel Medeiros Souza
*/

import RectRounded from './RectRounded.js'
import LineCoord from './LineCoord.js'

/**
 * Instance of Canvas
 *
 * @description Bootstrap of canvas helper
 *
 * @param {string|number|number}
 * @param {string} canvasElement - expects a class of type getElementsByClassName to instantiate a new canvas context
 * @param {number} width - is the width size of the canvas HTML element
 * @param {number} height - is similiar to the item above, with the only difference being the height size
 *
 * @returns {function} functions with native (context) and custom (custom functions) for manipulate the canvas
 */
export default function Canvas ({ canvasElement, width = window.innerWidth, height = window.innerHeight }) {
  const canvas = document.getElementsByClassName(canvasElement)[0]
  const ctx = canvas.getContext('2d')

  canvas.width = width
  canvas.height = height

  const rectRounded = RectRounded.bind(ctx)
  const lineCoord = LineCoord.bind(ctx)

  return {
    native: ctx,
    custom: {
      rectRounded,
      lineCoord
    }
  }
}
