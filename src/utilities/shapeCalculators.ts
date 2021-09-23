interface areaInterface {
  area(): number
}

class Shape implements areaInterface {
  area = (): number => {
    return 0
  }
}

export class RectangleArea extends Shape {
  length: number
  width: number
  constructor(length: number, width: number) {
    super()
    this.length = length
    this.width = width
  }
  area = (): number => {
    return this.length * this.width
  }
}

export class CircleArea extends Shape {
  diameter: number
  constructor(diameter: number) {
    super()
    this.diameter = diameter
  }
  area = (): number => {
    return this.diameter * 2
  }
}

export class SquareArea extends Shape {
  length: number
  constructor(length: number) {
    super()
    this.length = length
  }
  area = (): number => {
    return this.length ** 2
  }
}

export class EllipseArea extends Shape {
  majorAxis: number
  minorAxis: number
  constructor(majorAxis: number, minorAxis: number) {
    super()
    this.majorAxis = majorAxis
    this.minorAxis = minorAxis
  }
  area = (): number => {
    return Math.PI * (this.majorAxis * this.minorAxis)
  }
}