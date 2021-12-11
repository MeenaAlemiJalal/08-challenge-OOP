const Engineer = require('../lib/Engineer')

const engineer = new Engineer(2, 'dev', 'dev@test.com', '@dev')
 
test('it creates an istance of Engineer', () => {
    expect(engineer).not.toBeNull()
})

test('it creates an Engineer with id, name, email, github and role', ()=>{
    expect(engineer).toEqual({
        id: 2, 
        name: 'dev', 
        email: 'dev@test.com', 
        role:'Engineer', 
        github: '@dev'
    })
})