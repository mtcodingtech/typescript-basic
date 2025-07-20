type Rgb = [number, number, number];

function randomColor(): Rgb {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  return [r, g, b];
}
console.log(randomColor());
console.log(randomColor());

// Object Literal

type User = {
  name: string;
  age: number;
};
const userOne: User = {
  name: "MT",
  age: 20,
};

function formatUser(user: User): void {
  console.log(user.name);
}
formatUser(userOne);
formatUser({ name: "Khine", age: 30 });

// type Person = {
//   name: string;
//   age: number;
// };
// type Person = {
//   city: number;
// };

interface Person {
  name: string;
  age: number;
}
interface Person {
  city: string;
}

const newPerson: Person = {
  name: "MT",
  age: 20,
  city: "BKK",
};
function createUser(user: Person): Person {
  console.log(user.name, user.age, user.city);
  const { name, age, city } = user;
  return { name, age, city };
}
console.log(createUser(newPerson)); 
// Result
// MT 20 BKK
// { name: 'MT', age: 20, city: 'BKK' }
