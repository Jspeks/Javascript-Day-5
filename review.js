// const string = "Hello World";
// const boolean = !true;
// const number = 1;
// const object = [];
// const profile = {
//     name: {
//         first: "Jesse",
//         last: "Specht",
// },
// };

for(let i = 0; i <= 100; i++){
    if(i % 2 === 0){
        console.log(i + " is even")
    }
    else {
        console.log(i + " is odd")
    }
}

// functions and scopes review

const items = [];
function addItems(name, price) {
  const item = { name, price };
  items.push(item);
  return items;
}

function getTotal() {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  const tax = total * 0.08;
  taxProcess(tax);
  return () => {
    return "$" + total + "tax is" + tax;
  };
}

function taxProcess(tax) {
  // ......do something
}

addItems("pants", 30);
addItems("shirt", 40);
addItems("shoes", 20);
addItems("cap", 50);

console.log(items);
console.log(getTotal()());

// looping through matirx

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i]);
}

for (let i = 0; i < matrix.length; i++) {
  console.log({ i });
  for (let j = 0; j < matrix[i].length; j++) {
    console.log({ j });
    console.log(matrix[i][j]);
  }
}
