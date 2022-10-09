import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { googleAuth, logOut, validateUser } from "../redux/Actions/actions";
import jwt_decode from 'jwt-decode'

function Login2() {
  const [usuario, setUsuario] = useState(null);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [datos, setDatos] = useState({
    email: "",
    password: "",
  });

  /********************GOOGLE AUTHENTICATION****************** */

  //the data user is save in userObject, uncomment to see.
  const handleCallbackResponse = async (response) => {
    // console.log("Encoded JWT ID token: " + response.credential)
    // var userObject = jwt_decode(response.credential)
    // console.log(userObject);
    dispatch(googleAuth(response.credential))

  }

  useEffect(() => {
    // eslint-disable-next-line no-undef
    google.accounts.id.initialize({
      client_id: "37722855478-e3e8kuom5kn2v9n8slfn25lb8084vlq0.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })
    // eslint-disable-next-line no-undef
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large"}
    )
  }, [])
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
      // let res = await axios.post("http://localhost:3000/login/auth", datos);
      // console.log(res.data);
      // navigate("/profile");
      dispatch(validateUser(datos));
      navigate('/profile')
    }
  };



  return (
    <section className="h-100">
      {/* the div with id=signInDiv below renders the google login on the screen */}
      <div id="signInDiv"></div>

      <div className="container h-100">
        <div className="row justify-content-sm-center h-100">
          <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
            <div className="card shadow-lg">
              <div className="card-body p-5">
                <h1 className="fs-4 card-title fw-bold mb-4">Login</h1>
                <form
                  onSubmit={handleSubmit}
                  className="needs-validation"
                  noValidate={true}
                  autoComplete="off"
                >
                  <div className="mb-3">
                    <label className="mb-2 text-muted" htmlFor="email">
                      Usuario
                    </label>
                    <input
                      id="email"
                      type="text"
                      onChange={handleInputChange}
                      value={datos.email}
                      className="form-control"
                      name="email"
                      required
                      autoFocus
                    />
                    <div className="invalid-feedback">Usuario inválido</div>
                  </div>
                  <div className="mb-3">
                    <div className="mb-2 w-100">
                      <label className="text-muted" htmlFor="password">
                        Contraseña
                      </label>
                      <a href="/" className="float-end">
                        ¿Olvidaste tu contraseña?
                      </a>
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
                    <div className="invalid-feedback">
                      Contraseña es requirida
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="remember"
                        id="remember"
                        className="form-check-input"
                      />
                      <label htmlFor="remember" className="form-check-label">
                        Recordarme
                      </label>
                    </div>
                    <button type="submit" className="btn btn-primary ms-auto">
                      <i className="bi bi-box-arrow-in-right"></i> Ingresar
                    </button>
                  </div>
                </form>
              </div>
              <div className="card-footer py-3 border-0">
                <div className="text-center">Animmerce &copy; 2022</div>
              </div>
            </div>
          </div>
        </div>
        <button onClick={() => {
          dispatch(logOut())
          navigate('/')
        }
        }>LogOut</button>
      </div>
    </section>
  );
}

export default Login2;
