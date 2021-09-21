function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return function() {
            return seat
        }
    }

    const students = [];

    for (let i = 0; i <= numbersOfStudents;) {
        i++;
        let val = studentSeat(i)
        students.push(val)
    }

    return students
}

let classRoom = createClassRoom(10);

console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());
