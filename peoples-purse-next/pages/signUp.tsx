import {
    useMutation,
    gql
} from '@apollo/client';

const SIGN_UP = gql`
mutation Mutation($input: UserSignUpInput!) {
    signUp(input: $input) {
      token
    }
  }
`

export default function SignUp() {
    const [signUp, { data, loading, error }] = useMutation(SIGN_UP);

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
    return (
        <>
            <form
                onSubmit={(e): any => {
                    e.preventDefault();
                    console.log(e.target)
                    signUp({
                        variables: {
                            input: {
                                first_name: 'newter',
                                last_name: 'tester',
                                email: 'newts@tester.com',
                                username: 'newts',
                                password: 'test12345'
                            }
                        }
                    })
                }}
                className="signupForm"
                >
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
            </form>
        </>
    )
}