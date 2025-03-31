/* eslint_disbale */

export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.filter((studentObject) => studentObject.location === city);
}
