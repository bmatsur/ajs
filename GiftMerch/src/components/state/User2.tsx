import {useState} from 'react'

type AuthUser = {
    name: string
    email: string
}


function User2() {

    const [user, setUser] = useState<AuthUser>({} as AuthUser)

    const handleLogin = () => {
        setUser({
            name: 'Hack',
            email: 'hack@example.com'
        });
    };


  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <div>User name is: {user?.name}</div>
        <div>User email is: {user?.email}</div>
    </div>
  )
}

export default User2