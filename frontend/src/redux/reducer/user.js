import { GUETUSER } from "../actionType/UserTypes";

const initialState = {
   users:[]
}

const user =  (state = initialState, { type, payload }) => {
    switch (type) {
        case GUETUSER:
            return {...state, users:payload.user}
    
        default:
            return state
    }
  }

  export default user

  
