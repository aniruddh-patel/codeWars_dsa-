// 1. Employee Salary Increment
const employees = [
  { name: "Ravi", dept: "IT", salary: 40000 },
  { name: "Neha", dept: "HR", salary: 35000 },
  { name: "Arjun", dept: "Finance", salary: 50000 }
];
// 👉 Increase each employee’s salary by 10% and return a new array with updated salaries.

function main(employees){
    const salaryArray=[];
    employees.forEach(element => {
        let value=incrementfun(element.salary);
        salaryArray.push(value);
    });
    console.log(salaryArray);
}

function incrementfun(salary){
    return (salary*110)/100

}
main(employees)