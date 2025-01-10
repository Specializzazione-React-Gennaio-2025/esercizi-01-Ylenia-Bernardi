import {people} from "./people.js";

function getEmails(people, options) {
    options = options || {}
    let withNames = options.withNames || false
    let onlyActive = options.onlyActive || false
    if (onlyActive) {
        people = people.filter(isActive)
    }
    return people.map(({name, email}) => {
        let result = ''
        if (withNames) {
            result = `${name} <${email}`
        } else {
            result = person.email
        }
        return result
    }).join(', ')
}

function getYoungest(people) {
    people.sort(function (personA, personB) {
        return personA.age - personB.age
    })
    return {
        youngest: people[0],
        others: people.slice(1)
    }
}

function isActive(person) {
    return person.isActive
}

const emails = getEmails(people, {
    withNames: true,
});
console.log(emails);

const youngest = getYoungest(people);
console.log(youngest);