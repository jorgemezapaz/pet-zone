const USERS = [
    {
        id: 1,
        name: 'Jorge Meza',
        email: 'J@gmail.com',
        password: '1234'
    },
    {
        id: 2,
        name: 'Usuario de prueba',
        email: 'Test@gmail.com',
        password: '1234'
    }
]
export const getUsers = () => {
    console.log('User list')
    console.log(USERS)
    return USERS
}

export const addUser = (name, email, pwd) => {
    if(emailValidation(email)){
        USERS.push({
            id: lastId()+1,
            name: name,
            email: email,
            password: pwd
        })
        console.log('Add new user')
        console.log(USERS)
        return ''
    } else {
        return 'Este email ya esta registrado'
    }
}

const lastId = () =>{
    console.log('users->lastId : ',USERS[USERS.length-1].id )
    return USERS[USERS.length-1].id
}

const emailValidation = (email) => {
    console.log('users->emailValidation')
    const userAuth = USERS.find((u) => u.email == email)
    if(userAuth == null){
        console.log('users->emailValidation: OK')
        return true
    }else{
        console.log('users->emailValidation: ERROR: Email already exist')
        return false
    }
}