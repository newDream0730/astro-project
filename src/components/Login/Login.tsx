import {
    GithubButton,
  } from '@astro-auth/ui';
import './Login.css';

export default function Login() {
    return (
        <div className="login-form">
            <div className="container">
                <div className="form-container log-in-container">
                    <form action="#">
                        <h1>Login XXX</h1>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <button className='login'>Log In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <h1>Astro Login Form</h1>
                            <GithubButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};
