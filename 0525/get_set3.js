// class에 get, set 적용 방법
// 입학년도 + 4

class Student {
  constructor(name){
    this.name = name;
  }
  get getEndYear() {
    return `${this.name}의 졸업년도는 ${this.startYear + 4}입니다.`
  }
  set setStartYear(year) {
    this.startYear = year;
    return
  }
}

const student1 = new Student('Lee');
student1.setStartYear = 2019;
console.log(student1.getEndYear);