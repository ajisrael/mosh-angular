// var vs let:
// var is scoped to nearest function.
// Can be accessed outside of {} blocks
// Let is contianed to {} blocks
// types:
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a'];
// enums:
// js way
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
// ts way
// Values are automatically assigned starting
// at 0. Best pracitice is to be explicit
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var backgroundColor = Color.Red;
// type assertions:
var message;
message = 'abc';
// Something wrong with compiler for endsWithMethod
// let endsWithC = (<string>message).endsWith('c');
// let alternateWay = (message as string).endsWith('c');
// arrow functions:
// old js way
var log = function (message) {
    console.log(message);
};
// ts way:
// don't need {} for one line functions
var doLog = function (message) {
    console.log(message);
};
// Interfaces
// Could have many parameters put into a function
// dont do this: let drawpoint = (x, y, z, a, b, c)
// better to pass a point object containing required variables
var drawPoint1 = function (point) {
    // ... does something
};
// should call function like this
drawPoint1({
    x: 1,
    y: 2
});
// but could call function like this
// with no compile error.
drawPoint1({
    name: 'abc'
});
// solution in 2 ways
// 1st way is 'in-line annotation'
// good for simple functions but a bit verbose
var drawPoint2 = function (point) {
    // does something
};
// Then function declaration looks like this
// A lot cleaner and you can use PointInterface in multiple
// places and only have to change it in one place
var drawPoint3 = function (point) {
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
var Point = /** @class */ (function () {
    function Point() {
    }
    // in classes we can define the implementation
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        // ...
    };
    return Point;
}());
// Objects:
// Implementations of classes
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
