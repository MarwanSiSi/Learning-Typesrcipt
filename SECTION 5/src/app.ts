class Department {
  //   private id: string;
  //   private name: string;
  private employees: string[] = [];

  constructor(private id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
console.log(accounting);

accounting.describe();
accounting.printEmployeeInformation();
