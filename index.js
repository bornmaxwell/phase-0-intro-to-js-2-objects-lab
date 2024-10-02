// Write your solution in this file!
function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Returns a new employee object with the updated key-value pair
    return {
        ...employee,
        [key]: value
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Updates the employee object directly
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    // Create a clone of the employee object
    let newEmployee = { ...employee };
    // Delete the key from the new object
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the key directly from the employee object
    delete employee[key];
    return employee;
}
// Define the employee object
let employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
};
