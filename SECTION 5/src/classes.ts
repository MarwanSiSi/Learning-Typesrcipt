abstract class Department {
  //   private id: string;
  //   private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    return (
      this.instance || (this.instance = new AccountingDepartment("d2", []))
    );
  }
  set mostRecentReport(value: string) {
    if (!value) throw new Error("Please pass in a valid value");
    this.lastReport = value;
  }

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;

    throw new Error("No report found");
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }
  printReports() {
    console.log(this.reports);
  }

  addEmployee(employee: string): void {
    if (employee === "Max") {
      return;
    }
    this.employees.push(employee);
  }
}

// const accounting = new Department("d1", "Accounting");
// accounting.addEmployee("Max");
// accounting.addEmployee("Manu");
// console.log(accounting);

// accounting.describe();
// accounting.printEmployeeInformation();

const accountingDep = AccountingDepartment.getInstance();

console.log(accountingDep);

accountingDep.addReport("Something went wrong");

accountingDep.printReports();
accountingDep.addEmployee("Max");
accountingDep.addEmployee("Manu");
accountingDep.printEmployeeInformation();

console.log(accountingDep.mostRecentReport);
accountingDep.mostRecentReport = "New Report";
console.log(accountingDep.mostRecentReport);
// accountingDep.mostRecentReport = "";
accountingDep.describe();

const employee1 = Department.createEmployee("Max");

const it = new ITDepartment("d3", ["Max"]);
it.addEmployee("Max");
it.addEmployee("Manu");
it.describe();

//STATIC METHODS/PROPERTIES: we can use it without creating an instance of the class

//PROTECTED: can be accessed by the class and its subclasses
//PRIVATE: can only be accessed by the class itself
