import "../components/style.css";

function Login() {
  return (
    <div className="login-container">
      <form onSubmit={(event) => event.preventDefault()}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input name="username" type="text" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input name="password" type="password" />
        </div>
        <div className="submit-button">
          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
