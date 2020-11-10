import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

// actions
import { doSignInWithEmailAndPassword } from "../../actions/authActions";

// components
import SigninHeader from "../../components/Header/SigninHeader";
import Card from "../../components/Card/Card";

// service
import LocalStorageService from "../../services/LocalStorageService";

// forms
import SigninForm from "./SigninForm";

// css
import "./Signin.scss";

const Signin = (props) => {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleSubmit = async (values) => {
    const { email, password } = values;
    try {
      setServerError("");
      setLoading(true);
      const res = await doSignInWithEmailAndPassword(email, password);
      LocalStorageService.setUser(res);
      setLoading(false);
      props.history.push("/app/home");
    } catch (error) {
      // console.log(error);
      setServerError(error);
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <SigninHeader />
      <div className="container" id="signin">
        <div className="mt-5">
          <Card>
            <div className="row no-gutters card_height">
              <div className="col-md-12">
                <div className="row card_height">
                  <div className="col-md-6 align-self-center">
                    <div className="pl-5 pr-5">
                      <h2 className="right_heading">Start Now</h2>
                      <div className="mt-4">
                        <SigninForm handleSubmit={handleSubmit} isLoading={loading} />
                      </div>
                      <div className="mt-4">
                        <span className="account pr-2">Don’t have an account?</span>
                        <Link to="#" className="signup_link">
                          SIGN UP
                        </Link>
                      </div>
                      <div className="text-danger mt-4">
                        {serverError ? serverError : <span>&nbsp;</span>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Fragment>
  );
};

export default Signin;
