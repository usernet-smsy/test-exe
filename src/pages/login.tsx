import React, { ChangeEvent } from "react";
import { NavLink, useNavigate } from "react-router-dom";



function Login() {

    const navigate = useNavigate();
    const [form, setForm] = React.useState<{ username: string, password: string }>({ username: '', password: '' });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {

        const { name, value } = event.target;

        setForm(prevState => ({
            ...prevState,
            [name]:value
        }))
    }


    /* 
    
[1, "sdfsd", {name: "Abdulaziz"}]
    
    */

    return (
        <div className='flex flex-col justify-between h-screen'>
            <header className='h-10 bg-orange-400 space-x-5'>
                <NavLink to="/profile">Profile</NavLink>
                {/* <NavLink to="/setting">Settings</NavLink> */}
                <button onClick={() => navigate('/setting')}>Settings</button>

            </header>
            <main className='bg-gray-100'>
                {JSON.stringify(form)}
                <div className='h-auto w-28 border border-solid border-gray-600 mx-auto'>
                    <label htmlFor="username">Username</label>
                    <input name="username" value={form.username} id="username" className="w-full" onChange={handleChange} />
                    <label htmlFor="password">Username</label>
                    <input name="password" value={form.password} id="password" className="w-full" onChange={handleChange} />
                <button className="bg-blue-600 text-white rounded-md py-1 px-3 disabled:bg-blue-400 disabled:cursor-not-allowed" disabled={!form.username.trim() || !form.password.trim()}>Submit</button>
                </div>
            </main>
            <footer className='h-10 bg-blue-400'>footer</footer>
        </div>
    )
}

export default Login;