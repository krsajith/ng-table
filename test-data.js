const { faker } = require('@faker-js/faker');

const arr = [];

for (let index = 0; index < 10; index++) {

    // const randomName = faker.name.fullName(); // Rowan Nikolaus
    // const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

    // arr.push({name:randomName,email:randomEmail});

    
    const city = faker.address.city();
    const buildingNumber = faker.address.buildingNumber();
    const streetName = faker.address.streetName();

    arr.push({city:city,buildingNumber:buildingNumber,streetName:streetName});
}

console.log(JSON.stringify(arr));