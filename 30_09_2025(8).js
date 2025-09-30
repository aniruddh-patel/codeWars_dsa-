// 8. Nested Object Extraction
const company = {
  name: "TechCorp",
  employees: [
    { name: "Ravi", skills: ["JavaScript", "Node.js"] },
    { name: "Neha", skills: ["Python", "Django", "Node.js"] }
  ]
};
// 👉 Return a flat array of all skills:
function main(company){
    const skills_array=[]
    company.employees.forEach(element => {
        skills_array.push(element.skills)
    });
    let a=skills_array.flat(Infinity)
    const output=new Set(a);

    console.log(output);
    
}
main(company)