// Classes

// Class
class Department {
    // private id: string;
    // public name: string; // Can be accessed and modified
    protected employees: string[] = []; // Can be accessed/modified within the class instance method
    static date = new Date(); // New Date?

    // Constructor
    constructor(readonly id: string, public name: string) {
        // this.id = id;
        // this.name = name;
    }

    // Methods
    describe() {
        console.log("Department: " + this.name)
    }

    addEmployee(employee: string) {
        // can be used for validation, etc.
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

// Instance of Class
const accounting = new Department("A3", "Accounting");

accounting.addEmployee("Brandy");
accounting.addEmployee("Sandy");
// **This method does not work in "private"**
// accounting.employees[2] = "Anna";
accounting.describe();
accounting.printEmployeeInformation();
// // Instance copy
// const accountingCopy = { describe: accounting.describe() };
// accountingCopy.describe;

// Class Inherited from Another Class
class ITDepartment extends Department {
    private static instance: ITDepartment;
    constructor(id: string, public admins: string[]) {
        super(id, "IT");
        this.admins = admins;
    }
    printAdmins() {
        console.log("Administrators: ", this.admins);
    }
    static getInstance() {
        if (ITDepartment.instance) {
            return this.instance;
        }
        this.instance = new ITDepartment("S1", []);
        return this.instance;
    }
}

const it = new ITDepartment("D2", ["Maxy"])
it.addEmployee("Jorge");
it.printEmployeeInformation();
console.log(it);