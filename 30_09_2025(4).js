// 4. Student Average Marks
const students = {
  Riya: { Math: 85, English: 78, Science: 92 },
  Aarav: { Math: 90, English: 88, Science: 75 }
};
// 👉 Find the average marks of each student and return a new object.

function main(students){
    const ansObj={}
    for(let key in students){
        let sum=0,avg=0,keyCount=0;
        for(let sub in students[key]){
            keyCount = Object.keys(students[key]).length;
            sum+=students[key][sub]
       }
       avg=parseFloat((sum/keyCount).toFixed(2))
       ansObj[key]=avg
    }
    console.log(ansObj);
}
main(students)


students.Riya