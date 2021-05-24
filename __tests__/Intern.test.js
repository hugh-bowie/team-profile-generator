const Intern = require('../lib/Intern.js');
const testIntern = new Intern('Laura Jean', 1, 'ljbrink90@gmail.com', 'intern', 'Universtity of Texas at Austin');

test('name as entered', () => {
  expect(testIntern.name).toEqual(expect.any(String));
  expect(testIntern.name.length).toBeGreaterThan(2);
})

test('ID is any number', () => {
  expect(testIntern.id).toEqual(expect.any(Number));
})

test('email is valid', () => {
  expect(testIntern.email).toEqual(expect.stringContaining('@'));
})

test('role is Intern', () => {
  expect(testIntern.role).toBe('intern');
})

test('school name as entered', () => {
  expect(testIntern.school).toEqual(expect.any(String));
  expect(testIntern.name.length).toBeGreaterThan(2);
})
