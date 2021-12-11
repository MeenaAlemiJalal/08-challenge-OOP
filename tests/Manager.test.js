const Manager = require('../lib/Manager')

const manager = new Manager(3, 'bob', 'bob@test.com', 43)

test('it creates an istance of Manager', () => {
    expect(manager).not.toBeNull()
})

test('it creates a Manager with id, name, email, role and officeNumber', () => {
    expect(manager).toEqual({
        id: 3,
        name: 'bob',
        email: 'bob@test.com',
        role: 'Manager',
        officeNumber: 43
    })
})