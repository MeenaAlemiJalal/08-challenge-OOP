const Intern = require('../lib/Intern')

const intern = new Intern(4, 'tom', 'tom@test.com', 'star')
 
test('it creates an istance of Intern', () => {
    expect(intern).not.toBeNull()
})

test('it creates an Intern with id, name, email, role, and school', ()=>{
    expect(intern).toEqual({
        id: 4, 
        name: 'tom', 
        email: 'tom@test.com', 
        role:'Intern', 
        school: 'star'
    })
})