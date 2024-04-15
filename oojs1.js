class Shape {
    constructor(name, sides, sideLength) {
      this.name = name;
      this.sides = sides;
      this.sideLength = sideLength;
    }
  
    calcPerimeter() {
      const perimeter = this.sides * this.sideLength;
      console.log(`El perímetro de la forma ${this.name} es: ${perimeter}`);
    }
  }
  
  // Crear una instancia de Square
  const square = new Shape("square", 4, 5);
  square.calcPerimeter();
  
  // Crear una instancia de Triangle
  const triangle = new Shape("triangle", 3, 3);
  triangle.calcPerimeter();
  