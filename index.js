class Polygon {
  constructor(sides) {
    this.sides = sides
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    let length = 0;
    for(const side of this.sides)
      length += side;
    return length;
  }
}

class Triangle extends Polygon {
  get isValid() {
    if(this.countSides !== 3 || !this.validSides)
      return false;
    return true;
  }

  get validSides() {
    this.sides.sort();
    return (this.sides[0] + this.sides[1] > this.sides[2]);
  }
}

class Square extends Polygon {
  get isValid() {
    let sideLength = this.sides[0];

    for(let i = 0; i < this.sides.length; i++) {
      if(sideLength !== this.sides[i])
        return false;
    }

    return true;
  }

  get area() {
    return this.sides[0] ** 2;
  }
}