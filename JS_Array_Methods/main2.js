const items = [
  {
    name: "Bike",
    price: 100,
  },
  {
    name: "TV",
    price: 200,
  },
  {
    name: "Album",
    price: 10,
  },
  {
    name: "Book",
    price: 5,
  },
  {
    name: "Phone",
    price: 500,
  },
  {
    name: "Computer",
    price: 100,
  },
];

// items.filter(): filter/get all items with price is less or equal 100  and store in a new array(filterdItem)
// check evey item in this array and add it to the new array if item.price is less or equal 100
const filterdItem = items.filter((item) => {
  return item <= 100; // return a condition
});

console.log("filterdItem", filterdItem);
// [
//     {
//       name: "Bike",
//       price: 100,
//     },

//     {
//       name: "Album",
//       price: 10,
//     },
//     {
//       name: "Book",
//       price: 5,
//     },

//     {
//       name: "Computer",
//       price: 100,
//     },
//  ];

// items.map(): create a new array of item.name and store in a variable (itemName)
const itemName = items.map((item) => {
  return item.name; // reurn what we want in a new array
});

console.log("itemName", itemName);

//  ["Bike","TV", "Album", "Book","Phone","Computer"]

// items.find(): find/get first item with name equal Book and store in a variable (foundName)
const foundName = items.find((item) => {
  return item.name === "Book"; // reurn a condition
});

console.log("foundName", foundName);
// [
//     {
//       name: "Book",
//       price: 5,
//     },
//  ];
