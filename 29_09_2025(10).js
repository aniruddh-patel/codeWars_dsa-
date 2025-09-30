// const students = [
//   { name: "Aman", marks: { math: 90, english: 80, science: 85 } },
//   { name: "Sneha", marks: { math: 70, english: 75, science: 80 } },
//   { name: "Ravi", marks: { math: 95, english: 88, science: 92 } },
// ];
// [
//   { name: "Aman", avg: 85, topSubject: "math", grade: "A" },
//   { name: "Sneha", avg: 75, topSubject: "science", grade: "B" },
//   { name: "Ravi", avg: 91.67, topSubject: "math", grade: "A" }
// ]

function main() {
  const students = [
    { name: "Aman", marks: { math: 90, english: 80, science: 85 } },
    { name: "Sneha", marks: { math: 70, english: 75, science: 80 } },
    { name: "Ravi", marks: { math: 95, english: 88, science: 92 } },
  ];

  const result = [];
  students.forEach((data) => {
    let{ sum , grade }= averagefunc(data.marks);
    let maxsub = topSubjectfunc(data.marks);
    

    result.push({ name: data.name, avg: sum, topSubject: maxsub, grade: grade });
  });
  console.log(result);
}

function averagefunc(marks) {
    let sum=0;
    len=Object.keys(marks).length
    for(let key in marks){
        sum+=marks[key];
    }
    sum = parseFloat((sum / len).toFixed(2))
    
    let grade = gradeCalfunc(sum);
    return {sum,grade};
}
function topSubjectfunc(marks) {
    let maxsub="";
    let maxnum=0;
    for(let key in marks){
        if(marks[key]>maxnum){
            maxnum=marks[key];
            maxsub=key;
        }
    }
    return maxsub;
}
function gradeCalfunc(max_num) {
    // (A = 85+, B = 70–84, C = below 70)
    if(max_num<70)return "C";
    else if(max_num>=70 && max_num<=84)return "B";
    else if(max_num>=85) return "A"
    else return "";
}


main()