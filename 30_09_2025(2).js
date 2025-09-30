// 2. Filter Active Users
const users = [
  { id: 1, name: "Aman", active: true },
  { id: 2, name: "Riya", active: false },
  { id: 3, name: "Sanya", active: true },
];
// 👉 Return a list of names of only active users.

function main(users) {
  const names = [];
  users.forEach((element) => {
    if (element.active === true) {
      names.push(element.name);
    }
  });
  console.log(names);
}
main(users);
