"use strict";

class User {
  /**
   *
   * @param {string} name
   * @param {string} surname
   * @param {string} gender
   */
  constructor(name, surname, gender) {
    this.name = name;
    this.surname = surname;
    this.gender = gender;
  }

  set name(name) {
    if (checkSet(name)) {
      this._name = name;
    }
  }
  get name() {
    return this._name;
  }

  set surname(surname) {
    if (checkSet(surname)) {
      this._surname = surname;
    }
  }
  get surname() {
    return this._surname;
  }

  set gender(gender) {
    if (gender === "male" || gender === "female") {
      return (this._gender = gender);
    }
    throw new TypeError("gender must be 'male' or 'female'");
  }
  get gender() {
    return this._gender;
  }
}

try {
  const user = new User("Lee", "Min Ho", "male");
  console.log(user);
  console.log();
} catch (error) {
  console.log(error);
}
