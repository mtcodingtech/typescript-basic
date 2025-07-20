type UserId = number | string;

function result(value: UserId): void {
  if (typeof value === "string") {
    console.log(`String value: ${value}`);
  } else {
    console.log(`Number value: ${value}`);
  }
}

// Examples
result("Hello, TypeScript!");
result(42);

// tagged interface

interface UserInterface {
  type: "user";
  username: string;
  age: number;
  id: UserId;
}

interface PersonInterface {
  type: "person";
  first_name: string;
  age: number;
  id: UserId;
}

function logDetail(value: UserInterface | PersonInterface) {
  if (value.type === "user") {
    console.log(value.username, value.age);
  }
  if (value.type === "person") {
    console.log(value.first_name, value.age);
  }
}

logDetail({
  type: "user",
  username: "MTK",
  age: 30,
  id: 1,
});

logDetail({
  type: "person",
  first_name: "M",
  age: 20,
  id: 1,
});
