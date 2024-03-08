import DeleteUser from "./DeleteUser";
import './UserDetails.css'
import { fakeUserData } from "../api/apiindex";
import{useDispatch} from 'react-redux';
import { addUser } from "../store/slices/UserSlice";
import DisplayUser from "./DisplayUser";
const UserDetails = () => {
  const dispatch =useDispatch()
  const addNewUser=(hyd)=>{
    dispatch(addUser(hyd))
  }
  return (  
    <>
    <div className="content">
      <div className="admin-table">
        <div className="admin-subtitle">List of User Details</div>
        <button className="btn add-btn" onClick={()=>addNewUser(fakeUserData())}>Add New User</button>
      </div>
      <ul>
      <DisplayUser/>
      
      </ul>
      <hr />
      <DeleteUser/>
    </div>
    </>
  );
}

 
export default UserDetails;