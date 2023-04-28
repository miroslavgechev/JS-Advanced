function createPerson(firstName, lastName) {

    let obj = {
        firstName,
        lastName,

        get fullName() {
            return this.firstName + ' ' + this.lastName;
        },

        set fullName(value) {
            let fullName = value.split(' ');
            this.firstName = fullName[0];
            this.lastName = fullName[1];
        }
    }

    return obj
}

let person = createPerson("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
