export default class HolbertonCourse {
  constructor(name, lenght, students) {
    this.name = name;
    this.lenght = lenght;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get lenght() {
    return this._lenght;
  }

  set lenght(value) {
    if (typeof value === 'number') {
      this._lenght = value;
    } else {
      throw new TypeError('Lenght must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('Students must be an array of string');
    }
    for (const student of value) {
      if (typeof student !== 'string') {
        throw new TypeError('All students must be a strings');
      }
    }
    this._students = value;
  }
}
