const Employee = require("../lib/Employee");
const testEmployee = new Employee('Vanessa', 1, 'vfatta@yahoo.com');

test('name as entered', () => {
    expect(testEmployee.name).toEqual(expect.any(String));
    expect(testEmployee.name.length).toBeGreaterThan(2);
})

test('ID is any number', () => {
    expect(testEmployee.id).toEqual(expect.any(Number));
})

test('email is valid', () => {
    expect(testEmployee.email).toEqual(expect.stringContaining('@')); 
})
