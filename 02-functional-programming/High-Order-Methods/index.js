// ESERCIZIO 1 

function number(lines) {
    return lines.map((line, index) => `${index + 1}: ${line}`);
}

console.log(number(["a", "b", "c"]));

// ESERCIZIO 2 

function arrayDiff(a, b) {
    return a.filter(item => !b.includes(item));
}

console.log(arrayDiff([3, 4], [3]));

// ESERCIZIO 3 

function findSenior(list) {
    const maxAge = Math.max(...list.map(dev => dev.age));
    return list.filter(dev => dev.age === maxAge);
}

const list1 = [
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];

console.log(findSenior(list1));

