var faker = require('faker');

var database = { products: []};

for (var i = 1; i<= 300; i++) {
  database.products.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    price: faker.commerce.price(),
    imageUrl: "http://lorempixel.com/800/450/technics/"+faker.random.number({
      'min': 1,
      'max': 10
  }),
    quantity: faker.random.number()
  });
}

console.log(JSON.stringify(database));