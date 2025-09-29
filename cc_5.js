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

console.log(calculateOvertimePay(20, 45)); // Second test