import Head from 'next/head';
import Link from 'next/link';


export default function Register() {
  return (
    <div className="container">
      <Head>
        <title>Fachmi - Register</title>
      </Head>

      <form className="register-form">
        <h2 className="register-title">Register</h2>

        <div className="form-group">
          <input type="text" id="username" className="register-input" placeholder='Username' />
        </div>

        <div className="form-group">
          <input type="email" id="email" className="register-input" placeholder='Email' />
        </div>

        <div className="form-group">
          <input type="password" id="password" className="register-input" placeholder='Password' />
        </div>

        <div className="form-group">
          <input type="password" id="confirm-password" className="register-input" placeholder='Confirm Password' />
        </div>

        <button type="submit" className="register-button">Register</button>

        <div className="login-link">
          Already have an account?{' '}
          <Link href="/"><div className="login-link-button">Login</div></Link>
        </div>
      </form>
    </div>
  )
}
