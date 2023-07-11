const { v4: uuidv4 } = require("uuid");

module.exports = [
  {
    id: uuidv4(),
    item_name: "Salary",
    amount: 1000,
    date: "06/12/2023",
    from: "Employer",
    category: "income",
    type: "Income",
  },
  {
    id: uuidv4(),
    item_name: "Dog food",
    amount: 30,
    date: "06/15/2023",
    from: "Pet store",
    category: "pets",
    type: "Expenses",
  },
  {
    id: uuidv4(),
    item_name: "Veggies",
    amount: 20,
    date: "06/22/2023",
    from: "grocery store",
    category: "grocery",
    type: "Expenses",
  },
  {
    id: uuidv4(),
    item_name: "Iphone",
    amount: 500,
    date: "06/29/2023",
    from: "apple store",
    category: "electronics",
    type: "Expenses",
  },
];
