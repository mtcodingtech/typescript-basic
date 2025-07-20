console.log("hello MT and TS, start learning");
console.log("Hello TS");

const fruits: string[] = ["apple", "orange"];
// fruits.push(1);
console.log(fruits);

const allItems = ["apple", 1, true];
allItems.push(2);

let user: { name: string; age: number; id: number } = {
  name: "MT",
  age: 20,
  id: 1,
};

function sum(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(sum(10, 2));

function allProducts(items: number[]): void {
  let total = items.reduce((a, c) => a + c, 0);
  console.log("total", total);
}
allProducts([20, 24, 10]);

// Tuple examples
let hsla: [number, string, string, number];
hsla = [100, "100%", "50%", 10];

let num: [number, number] = [12.3, 10.4];

function coor(): [number, number] {
  let lat = 100;
  let long = 200;
  return [100, 200];
}

const [lat, long] = coor();

// name tuples
let person: [name: string, age: number];
person = ["John", 20];

console.log(person[0]);

// Interfaces

interface Author {
  name: string;
  avator: string;
}

const authorOne: Author = {
  name: "John",
  avator: "/img1.png",
};

interface Book {
  title: string;
  description: string;
  tags: string[];
  create_at: Date;
  author: Author;
}

const newBook: Book = {
  title: "Book 1",
  description: "description 1",
  tags: ["tag1", "tag2"],
  create_at: new Date(),
  author: authorOne
};


function createBook(book: Book): void{
  console.log(`Create a book ${book.title} by ${book.author.name}`)
}

createBook(newBook)

let books: Book[] = [];
books.push({
  title: "Book 2",
  description: "description 2",
  tags: ["tag1", "tag2"],
  create_at: new Date(),
  author: authorOne
})
console.log(books)