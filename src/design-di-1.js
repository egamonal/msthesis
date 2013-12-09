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

var p1 = new Person("Alice Goodfellow", 25, "m", "NSA");
var p2 = new Person("Bob Chapman", 2, "m", "ESA");

