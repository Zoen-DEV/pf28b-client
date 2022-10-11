import { useEffect, useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { googleAuth, validateUser } from "../redux/Actions/actions";
// import jwt_decode from "jwt-decode";
import Profile from "./Profile";
import s from "./styles/Login2.module.css";
function Login2() {
  // const [usuario, setUsuario] = useState(null);
  // const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [datos, setDatos] = useState({
    email: "",
    password: "",
  });

  /********************GOOGLE AUTHENTICATION(don't touch)****************** */

  //the data user is save in userObject, uncomment to see.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleCallbackResponse = async (response) => {
    // console.log("Encoded JWT ID token: " + response.credential)
    // var userObject = jwt_decode(response.credential)
    // console.log(userObject);
    dispatch(googleAuth(response.credential));
  };

  useEffect(() => {
    // eslint-disable-next-line no-undef
    google.accounts.id.initialize({
      client_id:
        "37722855478-e3e8kuom5kn2v9n8slfn25lb8084vlq0.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    // eslint-disable-next-line no-undef
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, [handleCallbackResponse]);
  /*************************************************************** */

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    let newDatos = { ...datos, [name]: value };
    setDatos(newDatos);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      console.log("no enviar");
    } else {
      // let res = await axios.post(`${process.env.DB_ENDPOINT}login/auth`, datos);
      // console.log(res.data);
      // navigate("/profile");
      dispatch(validateUser(datos));
      // navigate('/profile')
    }
  };
  const user = localStorage.getItem("user");
  const userActive = JSON.parse(user);
  // console.log({userActive});

  return !userActive ? (
    <section className="h-100">
      {/* the div with id=signInDiv below renders the google login on the screen (don't touch)*/}
      <div id="signInDiv" className={s.googleBtn}></div>
      <div className="form_container">
        <div className="log-in-container">
          <h1>Welcome back to Animmerce!</h1>
          <form
            onSubmit={handleSubmit}
            className="log-in"
            noValidate={true}
            autoComplete="off"
          >
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                onChange={handleInputChange}
                value={datos.email}
                name="email"
                required
                autoFocus
                autoComplete="true"
              />
              <div className="invalid-feedback">Usuario inválido</div>
            </div>
            <div>
              <div>
                <label className={s.labelPass} htmlFor="password">
                  Password
                </label>
              </div>
              <input
                id="password"
                type="password"
                onChange={handleInputChange}
                value={datos.password}
                className="form-control"
                name="password"
                required
              />
              <div className="invalid-feedback">Contraseña es requirida</div>
            </div>

            <div className="d-flex align-items-center">
              <button type="submit" className="btn btn-primary ms-auto">
                <i className="bi bi-box-arrow-in-right"></i> Ingresar
              </button>
            </div>
          </form>
          <div>
            <Link to="/signup" className="float-end">
              <p className={s.labelPass}>don't have an acount yet?</p>
            </Link>
          </div>
        </div>
        <div className="card-footer py-3 border-0">
          <div className="text-center">Animmerce &copy; 2022</div>
        </div>
      </div>
    </section>
  ) : (
    <Profile />
  );
}

export default Login2;
