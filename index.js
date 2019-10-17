class Polygon {
  constructor(sides){
    this.sides = sides;
    this.count = this.sides.length
  }




  get countSides() {
    let count = 0
    for (let i = 0; i < this.sides.length ;i++) {
      count++
    } 
    return count;
  }

  get  perimeter(){
    let sum = 0;
    for (let i = 0;i < this.sides.length; i++){
      sum = sum + this.sides[i]; 
    }
    return sum;
  }

}

class Triangle extends Polygon {

  // get isValid(){
  //   if (countSides === 3){
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

}

class Square extends Polygon {

  get isValid(){
    if (this.sides )
  }

  get area(){
    countSides
  }


  //take aways - nesting with classes and defining methods within the scope of that class
  //using the extends keyword to inheret from another class to have all methods available for that class.

}