import './CSS/signup.css'

function LoginSignUp(){

    return <>
    <div className="loginsignup">
        <h1>Login</h1>
        <div className="login_container">
            <h1>Sign Up</h1>
            <div className="login_fields">
                <input type="text" name="" id="" placeholder="yourname"/>
                <input type="emai" name="" id="" placeholder="email"/>
                <input type="password" name="" id="" placeholder="password"/>
            </div>
            <button>Continue</button>
            <p className="login-signup">Already you have an Account? <span>Login</span></p>
            <div className="loginsignup-aggree">
                <input type="checkbox" name="" id="" />
                <p>By countinuing , i agree the terms of use & privasy police.</p>
            </div>
        </div>
    </div>
    </>
}

export default LoginSignUp