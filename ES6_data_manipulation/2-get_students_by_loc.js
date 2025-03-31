export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) {
    return [];
  }
  const cityStr = String(city);
  return students.filter((studentObject) => studentObject.location === cityStr);
}
