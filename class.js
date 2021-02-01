class Student {
  constructor(sId, sName) {
    this.id = sId;
    this.name = sName;
  }
}

const student1 = new Student(12, "Rahim");
const student2 = new Student(14, "Selim");
console.log(student1, student2);
