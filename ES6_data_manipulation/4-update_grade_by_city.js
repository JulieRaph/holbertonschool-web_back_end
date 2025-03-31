/* eslint_disbale */

export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }
  return students.filter((studentList) => studentList.location === city)
    .map((studentList) => {
      const studentIdGrade = newGrades.find((grade) => grade.studentId === studentList.id);
      return {
        ...studentList,
        grade: studentIdGrade ? studentIdGrade.grade : 'N/A',
      };
    });
}
