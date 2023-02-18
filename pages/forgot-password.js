import Head from "next/head"

export default function ForgotPassword() {
  return (
    <div className="container">
      <Head>
        <title>Fachmi - Forgot Password</title>
      </Head>

      <form className="forgot-password-form">
        <h2 className="forgot-password-title">Forgot Password</h2>

        <p className="forgot-password-description">
          Enter the email address associated with your account and we'll send you instructions to reset your password.
        </p>

        <div className="form-group">
          <input type="email" id="email" className="forgot-password-input" placeholder="Email" />
        </div>

        <button type="submit" className="forgot-password-button-s">Reset Password</button>
      </form>
    </div>
  )
}
