// 7. Find the Oldest Person
const people = [
  { name: "Riya", age: 25 },
  { name: "Arjun", age: 30 },
  { name: "Dev", age: 28 },
];
// 👉 Find and return the name of the oldest person.

function main(people) {
  let max = 0;
  let ans ="";
  people.forEach((element) => {
    if (element.age >= max) {
      max = element.age;
      ans=element.name;
    }
  });
  console.log(ans);
}

main(people);
