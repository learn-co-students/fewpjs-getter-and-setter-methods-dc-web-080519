// Add your Circle class here
class Circle {

  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    return this.radius*2;
  }

  get circumference() {
    return this.diameter * Math.PI;
  }

  get area() {
    return Math.PI * this.radius**2
  }

  set diameter(newDiam) {
    this.radius = newDiam/2;
  }

  set circumference(newCircum) {
    this.radius = newCircum / (2 * Math.PI);
  }

  set area(newArea) {
    this.radius = Math.sqrt(newArea/Math.PI);
  }
}
