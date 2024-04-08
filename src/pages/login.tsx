import Logo from "../components/logo";
import "./register.css";

const Login = () => {
  return (
    <>
      <main className="main-register">
        <div className="container">
          <div className="register">
            <div className="logo">
              <Logo />
            </div>
            <div className="form">
              {" "}
              <form>
                <h3>Log in</h3>
                <input
                  type="email"
                  className="email form-control mb-3"
                  placeholder="Enter your email"
                />
                <input
                  type="password"
                  className="password form-control mb-2"
                  placeholder="Enter your password"
                />

                <div className="d-flex">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      name="checkbox"
                      id="checkbox"
                      className="form-check-input"
                    />
                    <label htmlFor="checkbox" className="form-check-label">
                      Stay logged in?
                    </label>
                  </div>

                  <a href="#" className="forgot-password">
                    Forgot password?
                  </a>
                  
                </div>
                <a href="#" className="register-button">
                  Login
                </a>
                <p>
                  Don't have an account yet? <a href="./signup">Sign up</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
