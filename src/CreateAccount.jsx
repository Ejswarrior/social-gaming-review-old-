import React, {useState} from 'react'
import axios from 'axios'

export default function CreateAccount(){

   const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const formSubmit = async () => {
        console.log(username, password)
        await axios.post('localhost:3002/createaccount',{
            username: username,
            password: password
        })
        .then(response => {
            console.log(response)
        })
        console.log('submitted')
        setUsername();
        setPassword();
}

    return(
            <div>
                <h2>Create Account</h2>
                    <form onSubmit={formSubmit}>
                        <div>
                            <label htmlFor='username'>Username</label>
                            <input type="text" value={username} onChange={((e) => setUsername(e.target.value))}/>
                        </div>

                        <div>
                            <label htmlFor='password'>Password</label>
                            <input type="password" value={password} onChange={((e) => setPassword(e.target.value))} />
                        </div>

                        <input type='submit' value="Submit"></input>
                    </form>
            </div>
    )
}


module.exports = CreateAccount