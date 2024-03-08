import {  useDispatch } from "react-redux";
import { deleteUser } from "../store/slices/UserSlice";
const DeleteUser = () => {
  const dispatch = useDispatch();

const clearList = ()=>{
  // console.log('helo');

 dispatch(deleteUser())
  console.log('h55ello');
}
  return (  
  <>
  <button className="btn del-btn" style={{marginTop:'3rem'}} onClick={()=>{
clearList()
  }}>DELETE - ALL</button></>
  );
}
 
export default DeleteUser;