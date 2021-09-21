const globalVariable = 'Welcome'

function outer(globalVariable) {
    alert(globalVariable);

    const course = 'Holberton';

    function inner(globalVariable, course) {
        alert(globalVariable + ' ' + course);

        const exclamation = "!";

        function inception(globalVariable, course, exclamation) {
            alert(`${globalVariable} ${course}${exclamation}`);
        }

        inception(globalVariable, course, exclamation)
    }

    inner(globalVariable, course)
}

outer(globalVariable);
