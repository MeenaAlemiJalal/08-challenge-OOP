const Employee = require('../lib/Employee')

const employee = new Employee(1, 'john', 'john@test.com',)
 
test('it creates an istance of employee', () => {
    expect(employee).not.toBeNull()
})

test('it creates an employee with id, name, email and role', ()=>{
    expect(employee).toEqual({
        id: 1, 
        name: 'john', 
        email: 'john@test.com', 
        role:'Employee'
    })
})