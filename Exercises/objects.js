function printEmployeeAndPay(emp) {
  console.log("Name: " + emp.name);
  console.log("Pay: " + emp.payRate);
  console.log("jobTitle: " + emp.jobTitle);
  console.log("payRate " + emp.payRate);
}

let emp1 = {
  employeeId: "1",
  name: "Ezra",
  jobTitle: "Theater Teacher",
  payRate: 38.46,
};

let emp2 = {
  employeeId: "2",
  name: "Elisha",
  jobTitle: "Game Programmer",
  payRate: 43.27,
};

printEmployeeAndPay(emp1);
printEmployeeAndPay(emp2);
