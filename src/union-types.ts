// type StringOrNumber = string | number;

// function result(value: StringOrNumber): void {
//   if (typeof value === "string") {
//     console.log(`String value: ${value}`);
//   } else {
//     console.log(`Number value: ${value}`);
//   }
// }

// // Examples
// result("Hello, TypeScript!");
// result(42);

let someId: string | number;
someId = "MT";
someId = 12;

let email: string | null;
email = "aa@gmail.com";
email = null;

type Id = number | string;

let anotherId: Id;
anotherId = 20;
anotherId = "MMM";

function IdType(id: Id): Id {
  // parseInt(id) // error
  return id;
}
IdType(20);
IdType("10");
