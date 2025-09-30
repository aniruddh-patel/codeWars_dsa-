// 6. Group Employees by Department
const employees = [
  { name: "Ravi", dept: "IT" },
  { name: "Neha", dept: "HR" },
  { name: "Aman", dept: "IT" },
  { name: "Meera", dept: "Finance" },
];
// 👉 Return an object grouping employees by department.
// Expected Output:
// {
//   IT: ["Ravi", "Aman"],
//   HR: ["Neha"],
//   Finance: ["Meera"]
// }

function main(employees) {
  const result = {};

  employees.forEach((element) => {
    const dept = element.dept;
    const name = element.name;
    if (!result.hasOwnProperty(dept)) {
      result[dept] = [];
    }
    result[dept].push(name);
  });
  console.log(result);
}
main(employees);
