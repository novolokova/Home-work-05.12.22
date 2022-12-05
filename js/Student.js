"uce strict";

class Student extends User {
  /**
   * 
   * @param {string} name 
   * @param {string} surname 
   * @param {string} gender 
   * @param {string} yearOfAdmission 
   */
  constructor(name, surname, gender, yearOfAdmission) {
    super(name, surname, gender);
    this.yearOfAdmission = yearOfAdmission;
  }
  set yearOfAdmission(yearOfAdmission) {
    if (typeof yearOfAdmission !== "string") {
      throw new TypeError("yearOfAdmission  must be string");
    }
    if (!REGULAR_EXPRESSIONS.test(yearOfAdmission)) {
      throw new TypeError("enter the correct date, example '01.01.2000' ");
    }
    if (new Date().getTime() < new Date(yearOfAdmission).getTime()) {
      throw new RangeError(
        "the year of admission can't be greater than the current year"
      );
    }
    this._yearOfAdmission = yearOfAdmission;
  }

  get yearOfAdmission() {
    return this._yearOfAdmission;
  }

  getYearsOfStudy() {
    // const years = new Date().getFullYear() - new Date(this._yearOfAdmission).getFullYear();
    //  return (years === 0) ? 1 : years + 1;

    return new Date().getFullYear() -
      new Date(this._yearOfAdmission).getFullYear() ===
      0
      ? 1
      : new Date().getFullYear() -
          new Date(this._yearOfAdmission).getFullYear() +
          1;
  }
}

try {
  const student = new Student("Koko", "Shanel", "female", "01.09.2019");
  console.log(student);
  console.log(student.getYearsOfStudy());
} catch (error) {
  console.log(error);
}
