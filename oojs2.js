class Square extends Shape {
    constructor(sideLength) {
      super("square", 4, sideLength);
    }
  
    calcArea() {
      const area = this.sideLength * this.sideLength;
      console.log(`El área del cuadrado es: ${area}`);
    }
  }
  
  // Crear una instancia de Square
  const square = new Square(5);
  square.calcPerimeter(); // Calcular el perímetro del cuadrado
  square.calcArea(); // Calcular el área del cuadrado
  