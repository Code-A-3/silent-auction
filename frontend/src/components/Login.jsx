import { useState } from "react";
import axios from "axios";

function Login(props){
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [hasError, setHasError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const params = {
            'userId': userId,
            'passs': password
        };
        try {
            const response = await axios.get('/api/items', { params });
            if (response.data.items) {
                props.setItems(response.data.items);
                props.setBidderId(userId);
                setHasError(false);
            }
            else {
                setHasError(true);
            }
        } catch (error) {
            console.error('Error sending userId:', error);
        };
    };

    return (
        <>
            {hasError ? (
                <>
                    <h1 className="message">WRONG USER. Try again...</h1>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <label htmlFor="userName">Username</label>
                        <input type="text" name="userName" id="userName" onChange={(e) => setUserId(e.target.value)}/>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
                        <button type="submit">Login/Sign up</button>
                    </form>
                </>
            ) : (
                <form className="login-form" onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <label htmlFor="userName">Username</label>
                    <input type="text" name="userName" id="userName" onChange={(e) => setUserId(e.target.value)}/>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
                    <button type="submit">Login/Sign up</button>
                </form>
            )}
        </>
    )
}

export default Login;