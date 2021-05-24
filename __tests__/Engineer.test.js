const Engineer = require('../lib/Engineer.js');

const testEngineer = new Engineer('Hugh', 1, 'hughbowie@me.com', 'engineer', 'hugh-bowie');

test('name as entered', () => {
    expect(testEngineer.name).toEqual(expect.any(String));
    expect(testEngineer.name.length).toBeGreaterThan(2);
})

test('ID is any number', () => {
    expect(testEngineer.id).toEqual(expect.any(Number));
})

test('email is valid', () => {
    expect(testEngineer.email).toEqual(expect.stringContaining('@'));
})

test('is role Engineer', () => {
    expect(testEngineer.role).toBe('engineer');
})

test('Github was provided', () => {
    expect(testEngineer.gitHub).toEqual(expect.any(String));
})
