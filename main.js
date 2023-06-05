class Human {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Apartment {
    residents = [];

    addResident(human) {
        this.residents.push(human);
    }
}

class House {
    
    constructor(maxApartments) {
        this.apartments = [];
        this.maxApartments = maxApartments;
    }

    addApartment(apartment) {
        if(this.apartments.length < this.maxApartments) {
            this.apartments.push(apartment);
        } else {
            console.log('Maximum number of apartments reached!')
        }
    }
}

const personOne = new Human('Andre','man');
const personTwo = new Human('Emma','woman');
const personThree = new Human('Ihor','man');

// console.log(personOne);
// console.log(personTwo);
// console.log(personThree);

const firstApartment = new Apartment();
const secondApartment = new Apartment();
const thirdApartment = new Apartment();

// console.log(firstApartment);
// console.log(secondApartment);

firstApartment.addResident(personOne);
secondApartment.addResident(personTwo);
thirdApartment.addResident(personThree);

const house = new House(2);

house.addApartment(firstApartment);
house.addApartment(secondApartment);
house.addApartment(thirdApartment);

// console.log(firstApartment.residents);
// console.log(secondApartment.residents);
// console.log(thirdApartment.residents);

console.log(house);