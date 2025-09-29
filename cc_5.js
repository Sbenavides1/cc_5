// Coding Challenge 5

// Array of employee objects
let employees = [
    { name: "Alice", hourlyRate: 20, hoursWorked: 40 },
    { name: "Bob", hourlyRate: 15, hoursWorked: 35 },
    { name: "Juan", hourlyRate: 25, hoursWorked: 30 },
    { name: "Diana", hourlyRate: 30, hoursWorked: 45 },
    { name: "Sofia", hourlyRate: 18, hoursWorked: 50 }
];

// Create an array of 3–5 employee objects. Each should include: name, hourlyRate, hoursWorked.

// Function calculateBasePay(rate, hours) that returns pay for up to 40 hours only.
function calculateBasePay(rate, hours) {
    if (hours <= 40) {
        return rate * hours;
    } else {
        return rate * 40;
    }
}

console.log(calculateBasePay(20, 45)); // First test 

// Funtion to calculate overtime pay
function calculateOvertimePay(rate, hours) {
    if (hours > 40) {
        return rate * 1.5 * (hours - 40);
    } else {
        return 0;
    }
}

console.log(calculateOvertimePay(20, 45)); // Second test

// Function to calculate taxes (15%)
function calculateTaxes(totalPay) {
    return totalPay * 0.15;
}

console.log(calculateTaxes(1000)); // Third test

// Function to process payroll for each employee
function processPayroll(employee) {
    let basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    let overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    let grossPay = basePay + overtimePay;
    let taxes = calculateTaxes(grossPay);
    let netPay = grossPay - taxes;
    return {
        name: employee.name,
        basePay: basePay,
        overtimePay: overtimePay,
        grossPay: grossPay,
        netPay: netPay
    };
}
let emp = { name: "Alice", hourlyRate: 20, hoursWorked: 40 };
console.log(processPayroll(emp)); // Fourth test

// loop through employees and log payroll details
employees.forEach(emp => {
    console.log(processPayroll(emp));
});

