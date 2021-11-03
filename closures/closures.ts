function closures(firstName: string): (secondName: string) => string  {
    return function (secondName: string) {
        return `${firstName} ${secondName}`;
    }
}

const userFullName = closures('Alex')('Miller');
console.debug(userFullName);
