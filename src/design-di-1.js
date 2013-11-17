/* Example: use of the new operator and hard-coded dependencies */
function Person(name, age, sex, company) {
    this.company = new Company(company);
    this.name = name;
    this.age = age;
    this.sex = sex;
}

function Company(c) {
    this.cname = c;
}

var p1 = new Person("Eduard Gamonal", 25, "m", "PAL");
var p2 = new Person("Reem C", 2, "m", "ESA");

