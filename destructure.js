const person = {
  names: "Zack Ryder",
  age: 17,
  addresses: "Dhanmondi",
  phn: "11111",
  friends: ["Tom", "Jhon", "Peter"],
};

const { addresses, names } = person;

// console.log(addresses, names);
// console.log(addresses, names);
// console.log(addresses, names);
// console.log(addresses, names);

const friends = ["Alif", "Salman", "Messi", "Ronaldo", "Alom"];
const [first, second, ...restFriend] = friends;
console.log(first, second);
console.log(restFriend);

const complexObject = {
  name: "abc",
  info: {
    adresss: "kalabagan",
    zone: "South",
  },
};

const { zone } = complexObject.info;
console.log(zone);
