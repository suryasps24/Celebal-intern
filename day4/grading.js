function gradingStudents(grades) {
    let a = [];

for(let i=0; i<grades.length;i++)
{
    let rem = grades[i]%5;
    
    if(grades[i]>=38 && rem>=2){
     {grades[i] = (grades[i]+(5 - grades[i]%5));}}
     
}
return grades
