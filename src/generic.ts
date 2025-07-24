function getFirstStringElement(arr: string[]): string {
  return arr[0];
}

// let names = ["Alice", "Bob", "Charlie"];
// let firstName = getFirstStringElement(names); // "Alice"

// let numbers = [1, 2, 3];
// let firstNumber = getFirstStringElement(numbers); // Error! Argument of type 'number[]' is not assignable to parameter of type 'string[]'.

// **********************************
// Any
function getFirstAnyElement(arr: any[]): any {
  return arr[0];
}

// let names = ["Alice", "Bob", "Charlie"];
// let firstName = getFirstAnyElement(names); // "Alice" (type က any ဖြစ်နေတယ်)

// let numbers = [1, 2, 3];
// let firstNumber = getFirstAnyElement(numbers); // 1 (type က any ဖြစ်နေတယ်)

let unknownValue: any = getFirstAnyElement([10, "hello"]);
// unknownValue မှာ string method တွေ ခေါ်လို့ရတယ်၊ တကယ်တော့ number လည်း ဖြစ်နိုင်တယ်။
unknownValue.toLowerCase(); // Runtime error!

// *******************************************

// Generic မပါရင် string အတွက် တစ်ခု၊ number အတွက် တစ်ခု ရေးရမယ်။
// function identityString(arg: string): string { return arg; }
// function identityNumber(arg: number): number { return arg; }
// Generic ကို သုံးရင် ဘယ် type အတွက်မဆို ဒီတစ်ခုတည်းနဲ့ ရပြီ။

// function identity<T>(arg: T): T {
//     return arg;
// }
// let output1 = identity<string>("myString"); // output1 ရဲ့ type က string ဖြစ်မယ်။
// let output2 = identity<number>(123);      // output2 ရဲ့ type က number ဖြစ်မယ်။

// ******************************************

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

let names: string[] = ["Alice", "Bob", "Charlie"];
let firstName: string = getFirstElement<string>(names); // OK. firstName is inferred as string.
console.log(firstName); // Output: Alice

let numbers: number[] = [10, 20, 30];

let firstNumber: number = getFirstElement<number>(numbers); // OK. firstNumber is inferred as number.
console.log(firstNumber); // Output: 10

let booleans: boolean[] = [true, false];
let firstBoolean: boolean = getFirstElement<boolean>(booleans); // OK. firstBoolean is inferred as boolean.
console.log(firstBoolean); // Output: true

// ******************************
// let inferredFirstName = getFirstElement(names); // inferredFirstName is string
// let inferredFirstNumber = getFirstElement(numbers); // inferredFirstNumber is number

// let errorExample: string = getFirstElement<string>(numbers); //error

// ***********************************
async function hideLoadingSpinner(): Promise<void> {
  console.log("Hiding loading spinner...");
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.log("Loading spinner hidden.");
}

// You might call this after an API call completes
hideLoadingSpinner();

// **************************************
async function deleteFile(filePath: string): Promise<void> {
  console.log(`Deleting file: ${filePath}...`);
  await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate file deletion
  console.log("File deleted successfully.");
}

deleteFile("report.pdf")
  .then(() => console.log("File deletion finished."))
  .catch((err) => console.error("Failed to delete file:", err));

//   *******************************************

// async function saveUserData(data: User): Promise<void> {
//   // API call to save data to a database
//   console.log("Saving user data...");
//   await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate async operation
//   console.log("User data saved successfully.");
//   // No return value needed
// }

// // Call the function
// saveUserData({ id: 1, name: "Alice" })
//   .then(() => {
//     console.log("Save operation completed.");
//   })
//   .catch((error) => {
//     console.error("Error saving data:", error);
//   });
