import{createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
  name:'user',
  initialState:[],
  reducers:{
    addUser(state,action){
      state.push(action.payload);
    },
    removeUser(state,action){
state.splice(action.payload,1)
console.log(action.payload)   

},
    deleteUser(state,action){
    return [];
    }
  },
})
// console.log(userSlice.actions.addUser());
export default userSlice;
export const {addUser,deleteUser,removeUser} = userSlice.actions;

