export default function SignUp() {
    return (
        <>
            <div className="signupForm">
                <h3>Personal Information</h3>
                <label>First Name</label>
                <input
                    type='text'
                    name='first-name'
                    id='first-name'
                />
                <label>Last Name</label>
                <input
                    type='text'
                    name='last-name'
                    id='last-name'
                />
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
                        Sign Up
                    </button>
            </div>
        </>
    )
}