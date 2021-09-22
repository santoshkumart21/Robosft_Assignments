class Shape {
    get area() {
      return 0
    }
  }
  export class RectangleArea extends Shape {
    constructor(length, width) {
      super()
      this.length = length
      this.width = width
    }
    get area() {
      return this.length * this.width
    }
  }
export class SquareArea extends Shape {
    constructor(length) {
      super()
      this.length = length
    }
    get area() {
      return this.length ** 2
    }
  }
 export class CircleArea extends Shape {
    constructor(diameter) {
      super()
      this.diameter = diameter
    }
    get area() {
      return this.diameter * 2
    }
}
  
export class EllipseArea extends Shape {
    constructor(majorAxis,minorAxis) {
      super()
      this.majorAxis = majorAxis
      this.minorAxis = minorAxis
    }
    get area() {
      return Math.PI * (this.majorAxis * this.minorAxis)
    }
  }
  