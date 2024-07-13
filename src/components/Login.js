import { useState } from "react"



const Login = () => {
    const initalValues = {
        username: "",
        password: ""
    }
    const [inputValue, setInputValue] = useState(initalValues)


    const handleLoginInputChange = e => {
        const { name, value } = e.target;
        console.log({name, value});
        setInputValue({...inputValue, [name]: value});
    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        console.log(inputValue);
        setInputValue(initalValues);
    }

    return (
        <div>
            <form onSubmit={handleLoginSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input value={inputValue.username} name="username" placeholder="Username" onChange={handleLoginInputChange}></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input value={inputValue.password} type="password" name="password" placeholder="Password" onChange={handleLoginInputChange}></input>
                </div>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login