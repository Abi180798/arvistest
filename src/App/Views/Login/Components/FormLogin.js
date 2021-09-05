import { Formik } from "formik";
import * as Yup from "yup";
import firebase from "../../../../Config/firebase-config";
import Cookie from "js-cookie";
import { IDUSER, NAME, TOKEN } from "../../../Utils/constants";
import history from "../../../Utils/history";
import { Button, Form } from "react-bootstrap";
import { facebookProvider } from "../../../../Config/AuthMethod";
import SocialMediaAuth from "../../../../Services/SocialMediaAuth";
import { ImEyeBlocked, ImEye, ImFacebook2 } from "react-icons/im";
import { useState } from "react";
import { LoginAPI } from "../../../../Services/LoginAPI";
import { Link } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

function FormLogin() {
  const [showPass, setShowPass] = useState(false);
  function showPassword(value) {
    setShowPass(value);
  }
  async function handleLoginFacebook(provider) {
    const res = await SocialMediaAuth(provider);
    console.log(res);
  }
  async function handleLoginEmail(email, password) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (res) => {
        const dataLogin = JSON.stringify({
          email: email,
          password: password,
        });
        const r = await LoginAPI.loginAccount(dataLogin);
        console.log(r.data.data.id);
        if (r.data.status === 200) {
          Cookie.set(IDUSER, r.data.data.id);
          Cookie.set(TOKEN, res.user.getIdToken());
          Cookie.set(NAME, res.user.email);
          history.push("/");
          window.location.reload();
        }
      })
      .catch((er) => alert(er));
  }
  return (
    <div>
      <h1>Habib Store</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            handleLoginEmail(values.email, values.password);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <Form.Text className="text-danger">
                {errors.email && touched.email && errors.email}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type={showPass ? "text" : "password"}
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <Form.Text>
                <div className="d-flex">
                  <div className="text-danger">
                    {errors.password && touched.password && errors.password}
                  </div>
                  <div
                    className="ms-auto text-muted"
                    onClick={(e) => showPassword(!showPass)}
                  >
                    {showPass ? (
                      <div>
                        <ImEye />
                      </div>
                    ) : (
                      <ImEyeBlocked />
                    )}
                  </div>
                </div>
              </Form.Text>
            </Form.Group>
            <div className="btn-login">
              <div>
                <Button variant="primary" type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </div>
              <div
                className="ms-auto"
                onClick={(e) => handleLoginFacebook(facebookProvider)}
              >
                or Sign in With: <ImFacebook2 size={20} color="#3b5998" />
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <br />
      <Link to="/">
        <small>{`<`}Kembali</small>
      </Link>
    </div>
  );
}

export default FormLogin;
