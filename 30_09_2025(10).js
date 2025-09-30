// 10. Find Most Popular Course
const courses = [
  { name: "JavaScript", students: 120 },
  { name: "Python", students: 150 },
  { name: "Python", students: 150 },
  { name: "Java", students: 100 }
];
// 👉 Find the course with the highest number of students.

function main(courses){
    let max=0;
    let courseName=""
    courses.forEach(element => {
        if(max<element.students){
            max=element.students
            courseName=element.name
        }
    });

    console.log(courseName);
    
}
main(courses)