//# 학생 성적 관리 시스템
/*
  ! 학생 객체 데이터
    - id: 학생 고유 번호
    - name: 학생 이름
    - scores: 각 과목별 성적을 저장하는 객체
      (예: { Math: 85, English: 90, Science: 78 })

  ! 1) Student 클래스
    - 생성자에 의해 id, name, scores 초기화
    - getAverageScore() 메서드 구현
      : 학생 평균 성적 계산
      ? Object.values(), reduce() 사용
*/
class Student {
  constructor(id, name, scores) {
    this.id = id;
    this.name = name;
    this.scores = scores;
  }

  getAverageScore() {
    const averageScore = Object.values(this.scores).reduce((sum, student) => {
      return sum + student.scores;
    }, 0);

    console.log(`${averageScore}이다.`);
  }
}

/*
! 2) GradeManagement 클래스
: 학생 관리 배열, 자동 증가 id 저장 
- 학생 추가: addStudent(name, scores)
- 학생별 평균 성적 계산: getAverageScore() 메서드 작성, 모든 학생의 id, 이름, 평균 성적을 포함하는 새 배열 반환
? map(), reduce() 사용
- 조건에 따른 학생 필터링 및 정렬
: getTopStudents(threshold) 메서드 작성, 평균 성적이 주어진 값 이상인 학생을 필터링하고 내림차순 정렬 반환
? filter(), sort() 사용

cf) threshold: 한계점
*/
class GradeManagement {
  constructor() {
    this.students = [];
    this.nextStudent = 1;
  }

  addStudnet(name, scores) {
    const student = new Student(this.nextStudent, name, scores);
    this.students.push(student);
    
  }
}

const studnet1 = new Student();

studnet1.getAverageScore();
