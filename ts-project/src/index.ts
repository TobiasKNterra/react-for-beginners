import printPets3, { Person3 } from "./person";
import getAFulfilledPromise, { getARejectedPromise } from "./promise/promise";

console.log("Hallo TypeScript!");

/**
 *
 * Übung 1: Funktionen und Variablen
 *******************************************/
console.log("\n******* Übung 1: Funktionen und Variablen ******* ");

const text: string = "Hallo Welt";

function sayHello(param: string): void {
  console.log(param);
}

sayHello(text);

/**
 *
 * Übung 2: Funktionen und Variablen
 *******************************************/
console.log("\n******* Übung 2: Funktionen und Variablen *******");

function printNumberOrString(param: string | number): void {
  console.log(param);
}

printNumberOrString("Hallo Welt");
printNumberOrString(5);

/**
 *
 * Übung 3: Funktionen und Variablen
 *******************************************/
console.log("\n******* Übung 2: Funktionen und Variablen *******");

function printHelloOrWorld(param: "hello" | "world"): void {
  console.log(param);
}

printHelloOrWorld("hello");
printHelloOrWorld("world");

/**
 *
 * Übung 5: Template Strings
 *******************************************/
console.log("\n******* Übung 5: Template Strings *******");

function printWithHelloWorld(param: string): void {
  const text: string = `Hallo Welt, ${param}!`;
  console.log(text);
}

printWithHelloWorld("Parameter");

/**
 *
 * Übung 6: interfaces und objects
 *******************************************/
console.log("\n******* Übung 6: interfaces und objects *******");

interface Person {
  name: string;
  nr: number;
  pets: string[];
  isNterrianer(): boolean;
}
const person: Person = {
  name: "Tobias",
  nr: 12,
  pets: ["cat", "dog"],
  isNterrianer: () => true,
};

function printPets(person: Person): void {
  const prefix: string = person.isNterrianer() ? "Nterra - " : "";
  person.pets.forEach((pet: string) => {
    console.log(`${prefix}${pet}`);
  });
}
printPets(person);
/**
 *
 * Übung 7: interfaces und objects
 *******************************************/
console.log("\n******* Übung 7: interfaces und objects *******");

interface Person2 {
  name: string;
  nr: number;
  pets?: string[];
  isNterrianer(): boolean;
}
const person2: Person2 = {
  name: "Tobias",
  nr: 12,
  pets: ["cat", "dog"],
  isNterrianer: () => true,
};

function printPets2(person: Person2): void {
  const prefix: string = person.isNterrianer() ? "Nterra - " : "";

  if (person.pets) {
    person.pets.forEach((pet: string) => {
      console.log(`${prefix}${pet}`);
    });
  } else {
    console.log("No Pets");
  }
}
printPets2(person2);

/**
 *
 * Übung 7: Module
 *******************************************/
console.log("\n******* Übung 7: Module *******");

const person3: Person3 = {
  name: "Tobias",
  nr: 12,
  pets: ["cat", "dog"],
  isNterrianer: () => true,
};

printPets3(person3);

/**
 *
 * Übung 8: Promise
 *******************************************/
console.log("\n******* Übung 8: Promise *******");

getAFulfilledPromise().then((result: string) => {
  console.log(result);
});

getAFulfilledPromise()
  .then((result: string) => getARejectedPromise())
  .catch((error: string) => console.log(error));
