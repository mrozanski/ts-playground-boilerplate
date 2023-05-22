/**
There are 100 doors in a row that are all initially closed.
You make 100 passes by the doors.
The first time through, visit every door and 'toggle' the door
(if the door is closed, open it; if it is open, close it).
The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...)
and toggle it. The third time, visit every 3rd door
(i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.

Implement a function to determine the state of the doors after the last
pass. Return the final result in an array, with only the door number
included in the array if it is open.
*/
var doors = function () {
    var doors = Array(100).fill(false);
    var skip = 1;
    for (var i = 0; i <= 100; i++) {
        var newDoors = doors.map(function (el, i) {
            // i % skip
            console.log(skip);
            if (i % skip === 0)
                return !el;
            return el;
        });
        doors = newDoors;
        skip++;
    }
    var retArray = [];
    doors.reduce(function (prev, curr, index) {
        if (curr) {
            retArray.push(index);
        }
    });
    return retArray;
};
console.log(doors());
