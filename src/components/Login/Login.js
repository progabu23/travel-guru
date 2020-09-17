import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { BookContext } from '../../App';
import { createUserWithEmailAndPassword, handleGoogleSignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManage';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(BookContext)
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        photo: '',
        password: '',
    })

    initializeLoginFramework()

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                setUser(res);
                setLoggedInUser(res)
                history.replace(from)
            })
    }
    const signOut = () => {
        handleSignOut()
            .then(res => {
                setUser(res);
                setLoggedInUser(res)
            })
    }

    const handleBlur = (e) => {
        // console.log(e.target.name, e.target.value);
        let isEmailValid = true;
        if (e.target.name === 'email') {
            isEmailValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordNumber = /\d{1}/.test(e.target.value)
            isEmailValid = isPasswordValid && passwordNumber;
        }
        if (isEmailValid) {
            const newUser = { ...user };
            newUser[e.target.name] = e.target.value;
            setUser(newUser)
        }
    }
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    setUser(res);
                    setLoggedInUser(res)
                    history.replace(from)
                })
        }
        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    setUser(res);
                    setLoggedInUser(res)
                    history.replace(from)
                })
        }

        e.preventDefault()
    }



    return (
        <div className="container mt-5 text-center" style={{border: '1px solid gray', padding: '20px'}}>
            <div>
                <h3>Login</h3>
                <form onSubmit={handleSubmit}>
                    <div className="pb-2">
                        {newUser && <input type="text" placeholder="Name" onBlur={handleBlur} name="name" />}
                    </div>
                    <div className="py-2">
                        <input onBlur={handleBlur} type="text" placeholder="Email" name="email" />
                    </div>

                    <input onBlur={handleBlur} type="password" name="password" placeholder="Password" />
                    <div className="py-3">
                        <input style={{ backgroundColor: '#F9A51A', padding: '4px 45px', border: 'none', borderRadius: '5px' }} type="submit" value="Submit" />
                    </div>

                </form>

                <input type="checkbox" name="newUser" onChange={() => setNewUser(!newUser)} />
                <label  htmlFor="newUser">Create an account?</label>
                <h1 style={{ color: 'red' }}>{user.error}</h1>
                {
                    <button style={{padding: '4px 45px', border: '1px solid gray', borderRadius: '20px' }} onClick={googleSignIn}>Continue With Google</button>
                }
            </div>
        </div>
    );
};

export default Login;
