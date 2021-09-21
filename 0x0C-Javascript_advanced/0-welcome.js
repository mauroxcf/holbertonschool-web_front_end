function welcome(firstName, lastName) {
    const fullName = firstName + lastName;

    function displayFullName(fullName) {
        return alert('Welcome ' + fullName + ' !')
    }

    displayFullName(fullName)
}

welcome('Holberton', 'School');
