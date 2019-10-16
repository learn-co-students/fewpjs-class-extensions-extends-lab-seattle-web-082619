class Polygon {
  constructor(sidesOfShape) {
    this.sidesOfShape = sidesOfShape
  }

  get countSides() {
    return this.sidesOfShape.length
  }

  get perimeter() {
    let reducer = (sum, sideLength) => sum + sideLength
    return this.sidesOfShape.reduce(reducer)
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides === 3 && this.sidesOfShape[0] + this.sidesOfShape[1] > this.sidesOfShape[2] && this.sidesOfShape[0] + this.sidesOfShape[2] > this.sidesOfShape[1] && this.sidesOfShape[1] + this.sidesOfShape[2] > this.sidesOfShape[0]) {
      return true
    }
    else {
      return false
    }
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.perimeter / 4 == this.sidesOfShape[0]) {
      return true
    }
    else {
      return false
    }
  }

  get area() {
    return this.sidesOfShape[0] ** 2
  }
}
