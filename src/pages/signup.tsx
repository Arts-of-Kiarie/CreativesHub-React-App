import Logo from "../components/logo";
import "./register.css";

const SignUp = () => {
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
                <h3>Create an Account</h3> 
                <input
                  type="text"
                  className="text form-control mb-2"
                  placeholder="Full Names"
                />
                <input
                  type="email"
                  className="password form-control mb-2"
                  placeholder="Enter your email"
                />
                <input
                  type="password"
                  className="password form-control mb-2"
                  placeholder="Enter a password"
                />
                <input
                  type="password"
                  className="password form-control mb-2"
                  placeholder="Repeat password"
                />
                <div className="d-flex">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      name="checkbox"
                      id="checkbox"
                      className="form-check-input"
                    />
                    <label
                      htmlFor="checkbox"
                      className="form-check-label terms mb-3"
                    >
                      I agree to the <a href="#">terms and conditions</a>
                    </label>
                  </div>
                </div>
                <a href="#" className="register-button mb-2">
                  Sign up
                </a>
                <p>
                  Already have an account?<a href="./login">Log in</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignUp;
