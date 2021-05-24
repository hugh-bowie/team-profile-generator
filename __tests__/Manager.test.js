const Manager = require('../lib/Manager.js');
const testManager = new Manager('Vicki', 1, 'victor1046@aol.com', 'manager', 5612994819);

test('name as entered', () => {
    expect(testManager.name).toEqual(expect.any(String));
    expect(testManager.name.length).toBeGreaterThan(2);
})

test('ID is any number', () => {
    expect(testManager.id).toEqual(expect.any(Number));
})

test('email is valid', () => {
    expect(testManager.email).toEqual(expect.stringContaining('@'));
})

test('role is Manager', () => {
    expect(testManager.role).toBe('manager');
})

test('ofiice number was provided', () => {
    expect(testManager.officeNumber).toEqual(expect.any(Number));
})
