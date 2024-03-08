import {  useDispatch, useSelector } from "react-redux";
import{MdDeleteForever} from 'react-icons/md'
import { removeUser } from "../store/slices/UserSlice";
import './DisplayUser.css'
const DisplayUser = () => {

  const dispatc = useDispatch()

  const data = useSelector((state)=>{
    return state.users;
  })
  // console.log(data,'pp');
  console.log(data,"[]");
  const deleteUser = (id)=>{
    dispatc(removeUser(id))
  }
  return (  
    <>
    {
      data?.map((user,id)=>{
        return<div className="user-details">
        <li key={id}>
          <h3> {user} </h3>

        <button className="btn btn-delete" onClick={()=>deleteUser(id)}>

          <MdDeleteForever className ="delete-icon"/>
        </button>
        </li>
        </div>
      })
    }
    
    </>
  );
}
 
export default DisplayUser;