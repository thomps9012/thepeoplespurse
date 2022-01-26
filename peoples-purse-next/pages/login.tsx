export default function Login() {
    return (
        <>
            <div className="loginForm">
                <h3>Personal Information</h3>
                <label>Username</label>
                <input
                    type='text'
                    name='username'
                    id='username'
                />
                <label>Email</label>
                <input
                    type='text'
                    name='email'
                    id='email'
                />
                <label>Password</label>
                <input
                    type='text'
                    name='password'
                    id='password'
                />
                <button
                    type='submit'
                >
                    Login
                </button>
            </div>
        </>
    )
}