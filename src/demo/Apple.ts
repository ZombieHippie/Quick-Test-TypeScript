class Apple {
  constructor (private ripeness = .3) {}

  // Returns true if fruit is ready to eat
  isReadyToEat (): boolean {
    return this.ripeness > .5;
  }
}
let a = new Apple();
let b = new Apple(.7);

b
