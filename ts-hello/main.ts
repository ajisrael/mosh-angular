// var vs let:
// var is scoped to nearest function.
// Can be accessed outside of {} blocks
// Let is contianed to {} blocks

// types:
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a'];

// enums:
// js way
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

// ts way
// Values are automatically assigned starting
// at 0. Best pracitice is to be explicit
enum Color {
  Red = 0,
  Green = 1,
  Blue = 2,
}
let backgroundColor = Color.Red;

// type assertions:
let message;
message = 'abc';
// Something wrong with compiler for endsWithMethod
// let endsWithC = (<string>message).endsWith('c');
// let alternateWay = (message as string).endsWith('c');

// arrow functions:
// old js way
let log = function (message) {
  console.log(message);
};

// ts way:
// don't need {} for one line functions
let doLog = (message) => {
  console.log(message);
};

// Interfaces
// Could have many parameters put into a function
// dont do this: let drawpoint = (x, y, z, a, b, c)
// better to pass a point object containing required variables
let drawPoint1 = (point) => {
  // ... does something
};

// should call function like this
drawPoint1({
  x: 1,
  y: 2,
});

// but could call function like this
// with no compile error.
drawPoint1({
  name: 'abc',
});

// solution in 2 ways
// 1st way is 'in-line annotation'
// good for simple functions but a bit verbose
let drawPoint2 = (point: { x: number; y: number }) => {
  // does something
};

// Better way is to use an interface
interface PointInterface {
  x: number;
  y: number;
  // just as a note you can do this in interfaces
  // but you cannot define the implementation
  draw: () => void;
}

// Then function declaration looks like this
// A lot cleaner and you can use PointInterface in multiple
// places and only have to change it in one place
let drawPoint3 = (point: PointInterface) => {
  // something else
};

// NOTE: the capitalization of the interface
// follows Pascal naming convention where
// first letter of every word in interface name
// is capitalized

// Classes:
// Cohesion should be preserved by keeping
// interface and related functions contained to
// the same class
// class Point {
//   x: number;
//   y: number;
//   // in classes we can define the implementation
//   draw() {
//     console.log('X: ' + this.x + ', Y: ' + this.y);
//   }

//   getDistance(another: Point) {
//     // ...
//   }
// }

// Objects:
// Instance of classes
// let point = new Point();
// point.x = 1;
// point.y = 2;
// point.draw();

// Constructors:
// Better way to create a new object and establish it's properties
class Point {
  // don't need this because of access modifier in constructor
  //private x: number;
  //private y: number;

  // ? makes a parameter optional
  // Can't have multiple constructors in typescript
  constructor(private x?: number, private y?: number) {
    // don't need this either because of access modifier
    // this.x = x;
    // this.y = y;
  }

  draw() {
    console.log('X: ' + this.x + ', Y: ' + this.y);
  }
}

let point = new Point(1, 2);
point.draw();

// can do this because x and y are optional parameters
let emptyPoint = new Point();

// Access Modifiers:
// public - all are public by default
// private - only accessable within a class
// point.x = 1 won't work
// protected
