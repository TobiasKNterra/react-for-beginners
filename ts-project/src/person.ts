export interface Person3 {
  name: string;
  nr: number;
  pets?: string[];
  isNterrianer(): boolean;
}

export default function printPets3(person: Person3): void {
  const prefix: string = person.isNterrianer() ? "Nterra - " : "";

  if (person.pets) {
    person.pets.forEach((pet: string) => {
      console.log(`${prefix}${pet}`);
    });
  } else {
    console.log("No Pets");
  }
}
