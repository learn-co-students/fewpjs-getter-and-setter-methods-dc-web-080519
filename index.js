
class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    return this.radius * 2
  }

  get circumference() {
    return this.diameter * Math.PI;
  }

  get area() {
    return Math.PI * (this.radius * this.radius)
  }

  set diameter(d) {
    this.radius = d / 2
  }

  set circumference(c) {
    this.radius = c / (2 * Math.PI)
  }

  set area(a) {
    let apie = Math.PI * a
    this.radius = Math.sqrt(apie)
  }
}









































document.addEventListener("DOMContentLoaded", console.log('getter/setter'))
