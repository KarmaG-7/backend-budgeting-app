const { v4: uuidv4 } = require("uuid");

module.exports = [
  {
    id: uuidv4(),
    item_name: "income",
    amount: 1000,
    date: "06/12/2023",
    from: "employer",
    category: "income",
  },
  {
    id: uuidv4(),
    item_name: "Dog food",
    amount: 30,
    date: "06/15/2023",
    from: "pet store",
    category: "pets",
  },
  {
    id: uuidv4(),
    item_name: "Veggies",
    amount: 20,
    date: "06/22/2023",
    from: "grocery store",
    category: "food",
  },
  {
    id: uuidv4(),
    item_name: "Iphone",
    amount: 500,
    date: "06/29/2023",
    from: "apple store",
    category: "electronics",
  },
];
