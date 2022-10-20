import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
//import { Container, FormGroup, Input } from 'reactstrap';
import { editUser } from '../redux/Actions/actions';

const EditProfile = () => {

  const userActive = localStorage.getItem("user");
  const user = JSON.parse(userActive);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [input, setInput] = useState({});
  const [image, setImage] = useState();
  const [loading, setLoading] = useState();

  //const user = useSelector((state) => state.user);

  const uploadImage = async(e) => {
    const files = e.target.files;
    const data = new FormData();
        
    data.append("file", files[0]);
    data.append("upload_preset", "PF Anime");
    console.log(data);
    setLoading(true);

    const res = await fetch("https://api.cloudinary.com/v1_1/dda7bipcz/image/upload",
      {
        method: 'POST',
         body: data
      });

    const file = await res.json();
    setImage(file.secure_url);
    console.log(file.secure_url);
    setLoading(false);
    input.image = image;
  }

  const onChange = (e) => {
    setInput((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log('dispara onSubmit');

    const data = {
      image: image,
      username: input.username,
      cellphone: input.cellphone
    }
    console.log(data);
    console.log(user.email);
    dispatch(editUser(user.email, data));
    navigate('/profile');
  }

  return (
    <div className="form_container">
      <div className="log-in-container" style={{ textAlign: "center" }}>
        <h1>Editing Profile</h1>
        <img src={user.image} style={{width: 200}} />
        <form onSubmit={handleOnSubmit}>
          <div>
            <label >
              Profile Picture
            </label>
            <input
              type="file"
              id="file"
              name="file"
              value={input.image || ""}
              onChange={uploadImage}
            />
            {
                loading ? (<h3>Loading image...</h3>) : (<img src={image} style={{width: 200}} />)
            }
          </div>
          <div style={{ position: "relative" }}>
            <label >
              Username
            </label>
            <input
              type="username"
              id="username"
              name="username"
              value={input.username || ""}
              onChange={onChange}
            />
          </div>
          <div style={{ position: "relative" }}>
            <label >
              Cellphone
            </label>
            <input
              type="cellphone"
              id="cellphone"
              name="cellphone"
              value={input.cellphone || ""}
              onChange={onChange}
            />
          </div>
          <button type="submit" >
            Submit Changes
          </button>
        </form>
      </div>
    </div>
    );
}
 
export default EditProfile;