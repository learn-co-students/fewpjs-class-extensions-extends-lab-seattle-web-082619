class Polygon {
  constructor(sides) {
    this.sides = sides
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce((accumulator, currentVal) => accumulator + currentVal, 0)
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides !== 3) {
      return false
    } else if (this.sides[0] + this.sides[1] > this.sides[2] && this.sides[0] + this.sides[2] > this.sides[1] && this.sides[1] + this.sides[2] > this.sides[0]) {
      return true
    } else {
      return false
    }
  }
}

class Square extends Polygon {
  get area() {
    return this.sides[0] * this.sides[1]
  }

  get isValid() {
    if (this.countSides !== 4) {
      return false
    } else {
      for (let i = 1; i < this.countSides; i++) {
        if (this.sides[i] !== this.sides[i - 1]) { 
          return false
        } else {
          return true
        }
      }
    }
  }
}