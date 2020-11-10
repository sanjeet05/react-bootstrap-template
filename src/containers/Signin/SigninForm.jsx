import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

// common components
import Button from "../../components/Button/Button";
import TextField from "../../components/TextField/TextField";

const schema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const SigninForm = (props) => {
  // const rememberEmail = LocalStorageService.getEmail();
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={schema}
      onSubmit={(values) => {
        props.handleSubmit(values);
      }}
    >
      {({ handleSubmit, handleBlur, handleChange, values, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <TextField
              name="email"
              type="email"
              placeholder="Type your email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              error={errors.email && touched.email ? errors.email : null}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <TextField
              name="password"
              type="password"
              placeholder="Type your password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              error={errors.password && touched.password ? errors.password : null}
            />
          </div>

          <div className="d-flex justify-content-between">
            <div></div>
            <div>
              <Link to="#" className="forgot_password_link">
                Forgot password?
              </Link>
            </div>
          </div>

          <div>
            <Button type="submit" text="Login" isLoading={props.isLoading} />
          </div>
        </form>
      )}
    </Formik>
  );
};

export default SigninForm;
