import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
//import { Container, FormGroup, Input } from 'reactstrap';
import { editUser } from '../redux/Actions/actions';

const EditUser = () => {

  const userActive = localStorage.getItem("user");
  const user = JSON.parse(userActive);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [input, setInput] = useState({});
  const [isActive,setisActive] = useState()
  const [loading, setLoading] = useState();

  //const user = useSelector((state) => state.user);

 

  const onChange = (e) => {



    setInput(e.target.value)
   
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(input === "true") {
        setisActive(true)
     
    }else if(input === "false"){
      
        setisActive(false)
    }
    console.log(isActive)
    

    const data = {
        isActive: isActive,
        
    }
   
    setLoading(false);
    // input.isActive = isActive;
    // ;
    dispatch(editUser(user.id, data));
    navigate('/profile');
  }

  return (
    <div className="form_container">
      <div className="log-in-container" style={{ textAlign: "center" }}>
        <h1>Edit User</h1>
       
        <form onSubmit={handleOnSubmit}>
          <div>
        
            <input
              type="text"
              name="text"
              value={input}
              onChange={onChange}
            />
          
          </div>
         
          <button type="submit" >
            Ready Changes
          </button>
        </form>
      </div>
    </div>
    );
}
 
export default EditUser;